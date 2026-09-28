// Verifies that every piece of evidence in js/claims.js uses an approved Catholic source.
// Usage:  node scripts/verify-sources.mjs      (or just open verify.html in a browser)
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const sandbox = { window: {}, URL };
for (const f of ["js/claims.js", "js/verify-rules.js"]) {
  const path = fileURLToPath(new URL(`../${f}`, import.meta.url));
  vm.runInNewContext(readFileSync(path, "utf8"), sandbox, { filename: f });
}
const { CLAIMS, ALLOWED_SOURCES, verifyClaims } = sandbox.window;
const { errors, citations } = verifyClaims(CLAIMS, ALLOWED_SOURCES);

if (errors.length) {
  console.error(`✗ Found ${errors.length} problem(s):\n`);
  for (const e of errors) console.error("  • " + e);
  process.exit(1);
}
console.log(`✓ All ${citations} citations across ${CLAIMS.length} claim(s) use approved Catholic sources.`);
