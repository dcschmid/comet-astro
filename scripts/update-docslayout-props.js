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
const changedFiles = [];

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  let out = src;
  out = out.replace(/<DocsLayout\b([\s\S]*?)>/g, (m, attrs) => {
    let newAttrs = attrs;
    // replace explicit attributes: title=... and description=...
    newAttrs = newAttrs.replace(
      /\btitle\s*=\s*("[^"]*"|'[^']*'|\{[^}]*\})/g,
      'seoTitle=$1'
    );
    newAttrs = newAttrs.replace(
      /\bdescription\s*=\s*("[^"]*"|'[^']*'|\{[^}]*\})/g,
      'seoDescription=$1'
    );
    // replace shorthand attribute syntax inside the opening tag
    newAttrs = newAttrs.replace(/\{\s*title\s*\}/g, 'seoTitle={title}');
    newAttrs = newAttrs.replace(
      /\{\s*description\s*\}/g,
      'seoDescription={description}'
    );
    // If replacements introduced duplicate props (e.g. both title and seoTitle), leave as-is: we'll keep both but prefer new ones.
    return `<DocsLayout${newAttrs}>`;
  });

  if (out !== src) {
    fs.writeFileSync(file, out, 'utf8');
    changedFiles.push(file);
  }
}

if (changedFiles.length) {
  console.log('Updated files:');
  changedFiles.forEach((f) => console.log(' - ' + path.relative(root, f)));
  process.exit(0);
} else {
  console.log('No changes needed.');
  process.exit(0);
}
