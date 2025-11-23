import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownComponents from '@/constants/markdownComponents';

const MarkdownParser = ({ content }: { content: string }) => (
  <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-p:text-neutral-800 prose-p:leading-8 prose-p:mb-7 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-strong:font-semibold">
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {content}
    </ReactMarkdown>
  </div>
);

export default MarkdownParser;
