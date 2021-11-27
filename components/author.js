import Date from './date'
import Image from 'next/image'

export default function Author({
  date,
  author,
}) {
  return (
    <div className="text-sm mb-4">
      <div className="mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 relative mr-4">
            <Image
              src={author.picture.url}
              layout="fill"
              className="rounded-full"
              alt={author.name[0].text}
            />
          </div>
          <div className="flex-col">
            <div className="font-bold">{author.name}</div>
            <div><Date dateString={date} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
