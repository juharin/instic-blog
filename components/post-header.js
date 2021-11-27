import { RichText } from 'prismic-reactjs'
import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Author from './author'

export default function PostHeader({ 
  title, 
  coverImage, 
  date, 
  author,
  excerpt 
}) {
  return (
    <>
      <PostTitle>{title[0].text}</PostTitle>
      <div>
        <p className="text-md font-light leading-relaxed mb-4">{excerpt}</p>
      </div>
      <div className="hidden md:block md:mb-12">
        {author && <Author date={date} author={author} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={RichText.asText(title)} url={coverImage.url} />
      </div>
    </>
  )
}
