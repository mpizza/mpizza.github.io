
import PostType from '@/types/post';

const ArticleBlock = (props: PostType) => {
  const {slug, excerpt, date, title, coverImage} = props;
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <a href={`/post/${slug}`}>
        <img
          alt=""
          src={coverImage}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> {date} </time>
          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {excerpt}
          </p>
        </div>
      </a>
    </article>
  )
}

export default ArticleBlock;