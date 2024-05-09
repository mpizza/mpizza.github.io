import { getAllPosts } from '@/libs/post';

import ArticleBlock from "@/components/article-block";

export default function Blog() {
  const posts = getAllPosts();
  return (
    <div className="w-full my-6">
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {
          posts.map((post, index)=>
            <ArticleBlock {...post} key={index}/>
          )
        }
      </section>
    </div>
  );
}
