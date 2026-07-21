import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

export function MarkdownContent({ value, basePath }: { value: string; basePath?: string }) {
  return (
    <div className="article-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          img: ({ src = '', alt = '' }) => (
            <img src={resolveMarkdownUrl(src, basePath)} alt={alt} />
          ),
        }}
      >
        {value}
      </ReactMarkdown>
    </div>
  )
}

function resolveMarkdownUrl(src: string, basePath?: string) {
  if (!basePath || /^(?:[a-z]+:|\/|#)/i.test(src)) return src

  const baseDir = basePath.split('/').slice(0, -1).join('/') || '/'
  return new URL(src, `${window.location.origin}${baseDir}/`).pathname
}
