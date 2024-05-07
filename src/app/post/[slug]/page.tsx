import Head from 'next/head';
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
          <article className="mb-32">
            <Head>
              <title>
                {post.title}
              </title>
              {post?.ogImage &&
                <meta property="og:image" content={post.ogImage.url} /> 
              }
            </Head>
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