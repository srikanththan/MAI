// scripts/generateBlogJson.js
// Run with: node scripts/generateBlogJson.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const OUTPUT_PATH = path.join(__dirname, '../src/Data/blog.json');

function getAllMDXPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  return files.map(file => {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    // Add slug from filename if not present
    const slug = data.slug || file.replace(/\.mdx$/, '');
    // Ensure categories is always an array
    const categories = Array.isArray(data.categories) ? data.categories : [];
    return { ...data, slug, categories };
  });
}

function main() {
  const posts = getAllMDXPosts().filter(post => post.status !== 'draft');
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2));
  console.log(`Generated blog.json with ${posts.length} posts.`);
}

main();
