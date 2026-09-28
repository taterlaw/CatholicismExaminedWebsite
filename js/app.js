/* Catholicism Examined — renders everything from window.CLAIMS (js/claims.js).
   You should not need to edit this file to add or change claims. */
(function () {
  "use strict";

  const RULES = window.ALLOWED_SOURCES;
  const TYPE_ORDER = ["scripture", "catechism", "magisterium"];
  const TYPE_ICON = { scripture: "📖", catechism: "✝", magisterium: "⛪" };

  const $ = (sel) => document.querySelector(sel);
  const homeView = $("#home-view");
  const claimView = $("#claim-view");
  const grid = $("#claim-grid");
  const emptyState = $("#empty-state");
  const searchInput = $("#search");
  const filterBar = $("#category-filters");

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  /* ---- Safety net: hide any evidence that breaks the source rule ---- */
  function isAllowed(ev) {
    const rule = RULES.types[ev.type];
    if (!rule) return false;
    let host;
    try { host = new URL(ev.url).host; } catch { return false; }
    if (!rule.hosts.includes(host)) return false;
    if (ev.type === "scripture" && ev.translation !== RULES.scriptureTranslation) return false;
    return Boolean(ev.ref && ev.quote);
  }

  const claims = (window.CLAIMS || []).map((claim) => {
    const evidence = (claim.evidence || []).filter((ev) => {
      const ok = isAllowed(ev);
      if (!ok) console.warn(`[Catholicism Examined] Hidden evidence "${ev.ref}" in "${claim.id}": source not on the approved list.`);
      return ok;
    });
    return { ...claim, evidence, objections: claim.objections || [] };
  });

  /* ---------------- Home view ---------------- */
  let activeCategory = "All";

  function renderFilters() {
    const counts = claims.reduce((m, c) => ((m[c.category] = (m[c.category] || 0) + 1), m), {});
    const cats = ["All", ...Object.keys(counts).sort()];
    filterBar.innerHTML = cats
      .map((cat) => {
        const n = cat === "All" ? claims.length : counts[cat];
        return `<button class="chip" type="button" data-cat="${esc(cat)}" aria-pressed="${cat === activeCategory}">${esc(cat)}<span class="count">${n}</span></button>`;
      })
      .join("");
  }

  function renderGrid() {
    const q = searchInput.value.trim().toLowerCase();
    const shown = claims.filter((c) => {
      if (activeCategory !== "All" && c.category !== activeCategory) return false;
      if (!q) return true;
      return [c.title, c.summary, c.category].join(" ").toLowerCase().includes(q);
    });
    grid.innerHTML = shown
      .map((c) => {
        const counts = TYPE_ORDER.map((t) => [t, c.evidence.filter((e) => e.type === t).length]).filter(([, n]) => n);
        return `
        <button class="claim-card" type="button" data-id="${esc(c.id)}">
          <span class="cat-tag">${esc(c.category)}</span>
          <h2>${esc(c.title)}</h2>
          <p>${esc(c.summary)}</p>
          <div class="card-meta">${counts
            .map(([t, n]) => `<span><span class="dot ${t}"></span> ${n} ${esc(RULES.types[t].label)}</span>`)
            .join("")}</div>
          <span class="card-cta">Examine the evidence <span>→</span></span>
        </button>`;
      })
      .join("");
    emptyState.hidden = shown.length > 0;
  }

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    renderFilters();
    renderGrid();
  });
  searchInput.addEventListener("input", renderGrid);
  grid.addEventListener("click", (e) => {
    const card = e.target.closest("[data-id]");
    if (card) location.hash = card.dataset.id;
  });

  /* ---------------- Claim view ---------------- */
  let activeType = "all";

  function evidenceCard(ev) {
    return `
      <div class="ev-card ${ev.type}" id="ev-${slug(ev.ref)}">
        <div class="ev-head">
          <span class="ev-ref">${esc(ev.ref)}</span>
          <span class="ev-source">${esc(ev.source || "")}${ev.translation ? ` · ${esc(ev.translation)}` : ""}</span>
        </div>
        <blockquote class="ev-quote">${esc(ev.quote)}</blockquote>
        ${ev.plain ? `<p class="ev-plain"><strong>In plain words:</strong> ${esc(ev.plain)}</p>` : ""}
        ${ev.note ? `<p class="ev-note"><strong>Note:</strong> ${esc(ev.note)}</p>` : ""}
        <a class="ev-link" href="${esc(ev.url)}" target="_blank" rel="noopener">Read the source ↗</a>
      </div>`;
  }

  function renderEvidence(claim) {
    const types = activeType === "all" ? TYPE_ORDER : [activeType];
    return types
      .map((t) => {
        const items = claim.evidence.filter((e) => e.type === t);
        if (!items.length) return "";
        return `
          <div class="ev-group">
            <h3 class="ev-group-title"><span class="dot ${t}"></span>${TYPE_ICON[t]} ${esc(RULES.types[t].label)} <span>(${items.length})</span></h3>
            <div class="ev-list">${items.map(evidenceCard).join("")}</div>
          </div>`;
      })
      .join("");
  }

  function renderTabs(claim) {
    const tabs = [["all", "All evidence", claim.evidence.length]].concat(
      TYPE_ORDER.map((t) => [t, `${TYPE_ICON[t]} ${RULES.types[t].label}`, claim.evidence.filter((e) => e.type === t).length]).filter(
        ([, , n]) => n
      )
    );
    return tabs
      .map(
        ([key, label, n]) =>
          `<button class="chip ev-tab" type="button" data-type="${key}" aria-pressed="${key === activeType}">${esc(label)}<span class="count">${n}</span></button>`
      )
      .join("");
  }

  function renderClaim(claim) {
    const refSet = new Set(claim.evidence.map((e) => e.ref));
    claimView.innerHTML = `
      <div class="detail-hero">
        <div class="wrap">
          <button class="back-btn" type="button" data-action="back">← All questions</button><br>
          <span class="cat-tag">${esc(claim.category)}</span>
          <h1>${esc(claim.title)}</h1>
        </div>
      </div>
      <div class="wrap detail-body">
        <div class="answer-box">
          <p class="label">The short answer</p>
          <p>${esc(claim.summary)}</p>
        </div>
        <div class="detail-grid">
          <nav class="toc" aria-label="On this page">
            <p>On this page</p>
            <a href="" data-jump="sec-explain">Explanation</a>
            <a href="" data-jump="sec-evidence">The evidence</a>
            ${claim.objections.length ? `<a href="" data-jump="sec-faq">Common questions</a>` : ""}
          </nav>
          <div>
            <section class="section prose" id="sec-explain">
              <h2 class="section-title">Explanation</h2>
              ${(claim.explanation || []).map((p) => `<p>${esc(p)}</p>`).join("")}
            </section>

            <section class="section" id="sec-evidence">
              <h2 class="section-title">The evidence</h2>
              <div class="ev-tabs" role="group" aria-label="Filter evidence by source">${renderTabs(claim)}</div>
              <div id="ev-container">${renderEvidence(claim)}</div>
            </section>

            ${
              claim.objections.length
                ? `<section class="section" id="sec-faq">
                <h2 class="section-title">Common questions</h2>
                <div class="faq">
                  ${claim.objections
                    .map(
                      (o, i) => `
                    <details${i === 0 ? " open" : ""}>
                      <summary>${esc(o.question)}</summary>
                      <div class="faq-body">
                        <p>${esc(o.answer)}</p>
                        ${
                          (o.evidenceRefs || []).length
                            ? `<div class="ref-chips"><span>See:</span>${o.evidenceRefs
                                .filter((r) => refSet.has(r))
                                .map((r) => `<button class="ref-chip" type="button" data-ref="${esc(r)}">${esc(r)}</button>`)
                                .join("")}</div>`
                            : ""
                        }
                      </div>
                    </details>`
                    )
                    .join("")}
                </div>
              </section>`
                : ""
            }

            <div class="source-note">
              <strong>Sources used:</strong> only Catholic-approved Scripture (NABRE, via the U.S. bishops at bible.usccb.org), the
              <em>Catechism of the Catholic Church</em>, and official Church teaching published by the Holy See (vatican.va).
            </div>
          </div>
        </div>
      </div>`;

    claimView.onclick = (e) => {
      const back = e.target.closest("[data-action='back']");
      if (back) { location.hash = ""; return; }

      const jump = e.target.closest("[data-jump]");
      if (jump) { e.preventDefault(); document.getElementById(jump.dataset.jump)?.scrollIntoView(); return; }

      const tab = e.target.closest("[data-type]");
      if (tab) {
        activeType = tab.dataset.type;
        claimView.querySelector(".ev-tabs").innerHTML = renderTabs(claim);
        claimView.querySelector("#ev-container").innerHTML = renderEvidence(claim);
        return;
      }

      const chip = e.target.closest("[data-ref]");
      if (chip) {
        const ref = chip.dataset.ref;
        if (activeType !== "all") {
          activeType = "all";
          claimView.querySelector(".ev-tabs").innerHTML = renderTabs(claim);
          claimView.querySelector("#ev-container").innerHTML = renderEvidence(claim);
        }
        const card = document.getElementById(`ev-${slug(ref)}`);
        if (card) {
          card.scrollIntoView({ block: "center" });
          card.classList.add("flash");
          setTimeout(() => card.classList.remove("flash"), 1600);
        }
      }
    };
  }

  /* ---------------- Routing (#claim-id) ---------------- */
  let homeScroll = 0;   // remembers where the reader was in the list

  function route() {
    const id = decodeURIComponent(location.hash.slice(1));
    const claim = claims.find((c) => c.id === id);
    if (claim) {
      if (!homeView.hidden) homeScroll = window.scrollY;
      activeType = "all";
      renderClaim(claim);
      homeView.hidden = true;
      claimView.hidden = false;
      document.title = `${claim.title} · Catholicism Examined`;
      window.scrollTo(0, 0);
    } else {
      claimView.hidden = true;
      homeView.hidden = false;
      document.title = "Catholicism Examined";
      window.scrollTo(0, homeScroll);
    }
  }

  renderFilters();
  renderGrid();
  window.addEventListener("hashchange", route);
  route();
})();
