#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full));
    } else if (entry.isFile() && full.endsWith('.astro')) {
      results.push(full);
    }
  }
  return results;
}

const root = path.resolve(__dirname, '..');
const files = walk(root);
const changed = [];

for (const file of files) {
  let s = fs.readFileSync(file, 'utf8');
  let out = s;
  // Collapse accidental duplicates like seoTitle=seoTitle={title} -> seoTitle={title}
  out = out.replace(/seoTitle\s*=\s*seoTitle\s*=/g, 'seoTitle=');
  out = out.replace(/seoDescription\s*=\s*seoDescription\s*=/g, 'seoDescription=');
  // Remove any lingering plain title= or description= in DocsLayout opening tags
  out = out.replace(/<DocsLayout([\s\S]*?)>/g, (m, attrs) => {
    let a = attrs;
    // remove plain title=... unless it's part of seoTitle or inside braces already
    a = a.replace(/\btitle\s*=\s*("[^"]*"|'[^']*')/g, '');
    a = a.replace(/\bdescription\s*=\s*("[^"]*"|'[^']*')/g, '');
    // also remove title={...} and description={...} if duplicates remain
    a = a.replace(/\btitle\s*=\s*\{[^}]*\}/g, '');
    a = a.replace(/\bdescription\s*=\s*\{[^}]*\}/g, '');
    // tidy up multiple spaces
    a = a.replace(/\s{2,}/g, ' ');
    return '<DocsLayout' + a + '>';
  });

  if (out !== s) {
    fs.writeFileSync(file, out, 'utf8');
    changed.push(path.relative(root, file));
  }
}

if (changed.length) {
  console.log('Fixed files:');
  changed.forEach((f) => console.log(' - ' + f));
} else {
  console.log('No fixes applied.');
}
