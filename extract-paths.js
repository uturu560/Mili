const fs = require('fs');
const s = fs.readFileSync('nigeria.svg', 'utf8');
// Match path with d, title, id (multiline)
const r = /<path\s+d="([^"]+)"\s+title="([^"]+)"\s+id="(NG-[^"]+)"\s*\/>/g;
let m;
const out = [];
while ((m = r.exec(s)) !== null) {
  out.push('      <path d="' + m[1] + '" title="' + m[2] + '" id="' + m[3] + '"/>');
}
// Skip first 8 (already in HTML), output rest
console.log(out.slice(8).join('\n'));
