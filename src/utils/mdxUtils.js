import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export const getMDXContent = (slug) => {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return { data, content };
  } catch (error) {
    console.error(`Error reading MDX file for slug ${slug}:`, error);
    return null;
  }
};

export const getAllMDXFiles = () => {
  try {
    const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');
    const fileNames = fs.readdirSync(postsDirectory);
    
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '');
        const filePath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        return { ...data, slug };
      });
  } catch (error) {
    console.error('Error reading MDX files:', error);
    return [];
  }
}; 