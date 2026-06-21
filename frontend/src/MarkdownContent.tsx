import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

export function MarkdownContent({ value }: { value: string }) {
  return (
    <div className="article-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
        {value}
      </ReactMarkdown>
    </div>
  )
}
