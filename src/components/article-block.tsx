
import PostType from '@/types/post';
import DateFormatter from '@/components/date-formatter';

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

        <div className="bg-white p-4 h-[calc(100%-14rem)] sm:p-6">
          <DateFormatter dateString={date}></DateFormatter>
          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
          <p className="mt-2  line-clamp-3 text-sm/relaxed text-gray-500">
            {excerpt}
          </p>
        </div>
      </a>
    </article>
  )
}

export default ArticleBlock;