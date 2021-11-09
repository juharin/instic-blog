import markdownStyles from './markdown-styles.module.css'
import { RichText } from 'prismic-reactjs'
import ReactMarkdown from "react-markdown";

export default function PostBody({ content }) {
  const rawMarkdown = RichText.asText(content);
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        <ReactMarkdown>{rawMarkdown}</ReactMarkdown>
      </div>
    </div>
  )
}
