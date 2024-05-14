import type { Metadata, ResolvingMetadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/libs/post';
import markdownToHtml from '@/libs/marktohtml';
import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';

type PostProps = {
  params: {
    slug: string
  }
}

type Items = {
  [key: string]: string
}

const Post = async ({ params }: PostProps) => {
  const {slug} = params;

  const getPost = async (slug: string) => {
    let post = getPostBySlug(slug, [
      'title',
      'date',
      'slug',
      'author',
      'content',
      'ogImage',
      'coverImage',
    ]);
    const content = await markdownToHtml(post.content || '')
    post['content'] = content;
    return post;
  }

  const post = await getPost(slug);
  
  return (
    <div>
      {(
        <>
          <article className="items-center">
            <PostHeader
              title={post.title}
              coverImage={(post.coverImage ? post.coverImage : '')}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </div>
  )
}

export default Post


export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: PostProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const {slug} = params
  // xxx Maybe there is a new way to reduce count of calling getPostBySlug.
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'keywords',
    'content',
    'ogImage',
    'coverImage',
  ]);
  let ogImages = [];
  if (post.ogImage?.url) {
    ogImages.push(post.ogImage?.url);
  }
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      images: ogImages,
    },
  }
}