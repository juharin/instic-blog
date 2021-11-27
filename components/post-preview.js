import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Author from './author'
import CoverImage from './cover-image'
import PostType from './post-type'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  type
}) {
  return (
    <div className="mr-4 mb-4">
      <div className="mb-5">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <div><PostType>{type}</PostType></div>
      <h3 className="text-3xl mb-6 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">
            <RichText render={title} />
          </a>
        </Link>
      </h3>
      <Author date={date} author={author} />
    </div>
  )
}
