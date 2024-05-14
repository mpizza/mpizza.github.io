import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import PostType from '@/types/post';

const postsDirectory = join(process.cwd(), 'src', '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  let post: PostType = {
    slug: realSlug,
    content: content,
    title: data.title,
    date: data.date,
    keywords: data.keywords,
    coverImage: data?.coverImage,
    author:  data.author,
    excerpt:  data?.excerpt,
    ogImage: data?.ogImage,
  }; 

  // Ensure only the minimal needed data is exposed
  // fields.forEach((field) => {
  //   if (field === 'slug') {
  //     items[field] = realSlug
  //   }
  //   if (field === 'content') {
  //     items[field] = content
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field]
  //   }
  // })

  return post;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (Date.parse(post2.date) - Date.parse(post1.date)));

  return posts;
}
