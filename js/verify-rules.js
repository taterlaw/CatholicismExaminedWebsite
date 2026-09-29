/* Source-rule checker shared by verify.html (browser) and scripts/verify-sources.mjs (Node).
   Returns { errors: [...], citations: N }. */
window.verifyClaims = function (CLAIMS, RULES) {
  const errors = [];
  const ids = new Set();
  let citations = 0;

  if (!RULES) errors.push("window.ALLOWED_SOURCES is missing from js/claims.js");
  if (!Array.isArray(CLAIMS)) return { errors: errors.concat("window.CLAIMS is missing or not a list"), citations };

  for (const claim of CLAIMS) {
    const where = `claim "${claim.id}"`;
    for (const field of ["id", "title", "category", "summary"]) {
      if (!claim[field]) errors.push(`${where}: missing "${field}"`);
    }
    if (ids.has(claim.id)) errors.push(`${where}: duplicate claim id`);
    ids.add(claim.id);

    const refs = new Set();
    for (const ev of claim.evidence || []) {
      citations++;
      const at = `${where} → "${ev.ref ?? "(no ref)"}"`;
      const rule = RULES && RULES.types[ev.type];

      for (const field of ["type", "ref", "quote", "url"]) {
        if (!ev[field]) errors.push(`${at}: missing "${field}"`);
      }
      if (refs.has(ev.ref)) errors.push(`${at}: duplicate ref within claim`);
      refs.add(ev.ref);

      if (!rule) {
        errors.push(`${at}: type "${ev.type}" is not allowed (use scripture, catechism, or magisterium)`);
        continue;
      }
      let host = "";
      try { host = new URL(ev.url).host; } catch (e) { errors.push(`${at}: url is not a valid link`); }
      if (host && !rule.hosts.includes(host)) {
        errors.push(`${at}: link host "${host}" is not an approved source for ${ev.type} (allowed: ${rule.hosts.join(", ")})`);
      }
      if (ev.type === "scripture" && ev.translation !== RULES.scriptureTranslation) {
        errors.push(`${at}: scripture must be tagged translation "${RULES.scriptureTranslation}"`);
      }
      if (ev.type === "catechism" && !/^CCC \d+(–\d+)?$/.test(ev.ref)) {
        errors.push(`${at}: catechism refs must look like "CCC 499"`);
      }
    }

    for (const obj of claim.objections || []) {
      for (const r of obj.evidenceRefs || []) {
        if (!refs.has(r)) errors.push(`${where} → objection "${obj.question}": "See" reference "${r}" does not match any evidence ref`);
      }
    }

    for (const pt of claim.points || []) {
      if (!pt.heading || !pt.text) errors.push(`${where} → step "${pt.heading ?? "(no heading)"}": needs both "heading" and "text"`);
      for (const r of pt.evidenceRefs || []) {
        if (!refs.has(r)) errors.push(`${where} → step "${pt.heading}": "See" reference "${r}" does not match any evidence ref`);
      }
    }

    // Further reading is NOT evidence: it must be clearly separate and from an approved Catholic site.
    const readingHosts = (RULES && RULES.furtherReadingHosts) || [];
    for (const item of claim.furtherReading || []) {
      const at = `${where} → further reading "${item.title ?? "(no title)"}"`;
      if (!item.title || !item.url) errors.push(`${at}: needs "title" and "url"`);
      let host = "";
      try { host = new URL(item.url).host; } catch (e) { errors.push(`${at}: url is not a valid link`); }
      if (host && !readingHosts.includes(host)) {
        errors.push(`${at}: site "${host}" is not on the further-reading list (allowed: ${readingHosts.join(", ") || "none"})`);
      }
    }
  }
  return { errors, citations };
};
