import { MetadataRoute } from 'next';
const BASE_URL = 'https://mpizza.github.io';
import { getAllPosts } from '@/libs/post';
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // Doesn't work in dev mode
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const posts = getAllPosts();
  const postsMap:MetadataRoute.Sitemap = posts.map((post, index) => {
    return {
      url: `${BASE_URL}/post/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'yearly',
      priority: 0.5,
    }
  });

  return [...staticPages, ...postsMap];
}