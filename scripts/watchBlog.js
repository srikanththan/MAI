// scripts/watchBlog.js
// Run with: node scripts/watchBlog.js

import chokidar from 'chokidar';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const GENERATE_SCRIPT = path.join(__dirname, 'generateBlogJson.js');

function generateBlogJson() {
  exec(`node "${GENERATE_SCRIPT}"`, (err, stdout, stderr) => {
    if (err) {
      console.error('Error generating blog.json:', stderr);
    } else {
      console.log(stdout.trim());
    }
  });
}

console.log('Watching for changes in blog MDX files...');

chokidar.watch(BLOG_DIR, { ignoreInitial: true })
  .on('add', generateBlogJson)
  .on('change', generateBlogJson)
  .on('unlink', generateBlogJson);
