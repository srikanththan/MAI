# MetaNova AI Blog

A modern blog platform built with React, Vite, and MDX.

## Features

- MDX-powered blog posts
- Responsive design
- Modern UI components
- SEO optimized
- Easy content management

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/metanovaai-blog.git
cd metanovaai-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── content/          # MDX blog posts
├── Components/       # React components
├── Pages/           # Page components
├── Routes/          # React Router configuration
├── utils/           # Utility functions
└── assets/          # Static assets
```

## Adding New Blog Posts

1. Create a new `.mdx` file in `src/content/blog/`
2. Follow the MDX frontmatter structure:
```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
excerpt: "Post excerpt"
featuredImage: "/path/to/image.jpg"
author:
  name: "Author Name"
  avatar: "/path/to/avatar.jpg"
  bio: "Author bio"
categories: ["Category1", "Category2"]
tags: ["Tag1", "Tag2"]
publishedAt: "YYYY-MM-DD"
readTime: "X min read"
status: "published"
---
```

## Technologies Used

- React
- Vite
- MDX
- React Router
- Tailwind CSS
- Date-fns

## License

MIT
