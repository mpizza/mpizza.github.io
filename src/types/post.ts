import Author from '@/types/author'

type PostType = {
  author: Author
  slug: string
  title: string
  date: string
  content: string
  coverImage?: string
  excerpt?: string
  ogImage?: { 
    url: string
  }
}

export default PostType
