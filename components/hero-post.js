import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Author from './author'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostType from './post-type'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  type
}) {
  return (
    <section>
      <div><PostType>{type}</PostType></div>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div className="mr-8">
          <h3 className="mb-8 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">
                <RichText render={title} />
              </a>
            </Link>
          </h3>
          <p className="text-md font-light leading-relaxed mb-4">{excerpt}</p>
        </div>
        <div>
          {author && <Author date={date} author={author} />}
        </div>
      </div>
    </section>
  )
}
