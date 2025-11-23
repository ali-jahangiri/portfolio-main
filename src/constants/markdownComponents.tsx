import type { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import CopyCodeButton from '@/components/features/copyCodeButton';
import { pitchBlack } from '@/lib/themes/pitchBlack';
import { generateHeadingId } from '@/lib/utils';
import Image from 'next/image';

const markdownComponents: Components = {
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';
    const codeString = String(children).replace(/\n$/, '');
    const isInline = !match;

    return !isInline ? (
      <div className="my-6 rounded-lg overflow-hidden border border-neutral-900 bg-black">
        <div className="flex items-center justify-between bg-neutral-900 px-4 py-2 border-b border-neutral-800">
          <span className="text-xs font-medium text-neutral-400 uppercase">{language}</span>
          <CopyCodeButton code={codeString} />
        </div>
        <SyntaxHighlighter
          language={language}
          style={pitchBlack}
          PreTag="div"
          customStyle={
            {
              margin: '0',
              padding: '1rem',
              background: '#000000',
            } as React.CSSProperties
          }
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code
        className="px-1.5 py-0.5 rounded bg-neutral-100 text-red-400 font-mono text-sm border border-neutral-200"
        {...props}
      >
        {children}
      </code>
    );
  },
  blockquote({ children }) {
    return (
      <blockquote className="border-l-4 border-primary/30 pl-6 py-2 my-6 italic text-neutral-700 bg-neutral-50 rounded-r-lg">
        {children}
      </blockquote>
    );
  },
  pre({ children }) {
    return <div className="my-0">{children}</div>;
  },
  h1({ children }) {
    const text = String(children);
    const id = generateHeadingId(text);
    return (
      <h1 id={id} className="text-4xl md:text-5xl font-bold text-neutral-900 mt-12 mb-6 pb-3 scroll-mt-24">
        {children}
      </h1>
    );
  },
  h2({ children }) {
    const text = String(children);
    const id = generateHeadingId(text);
    return (
      <h2 id={id} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-10 mb-5 pb-2 scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3({ children }) {
    const text = String(children);
    const id = generateHeadingId(text);
    return (
      <h3 id={id} className="text-2xl md:text-3xl font-semibold text-neutral-800 mt-8 mb-4 scroll-mt-24">
        {children}
      </h3>
    );
  },
  h4({ children }) {
    const text = String(children);
    const id = generateHeadingId(text);
    return (
      <h4 id={id} className="text-xl md:text-2xl font-semibold text-neutral-800 mt-6 mb-3 scroll-mt-24">
        {children}
      </h4>
    );
  },
  h5({ children }) {
    const text = String(children);
    const id = generateHeadingId(text);
    return (
      <h5 id={id} className="text-lg md:text-xl font-semibold text-neutral-700 mt-5 mb-2 scroll-mt-24">
        {children}
      </h5>
    );
  },
  h6({ children }) {
    const text = String(children);
    const id = generateHeadingId(text);
    return (
      <h6 id={id} className="text-base md:text-lg font-semibold text-neutral-700 mt-4 mb-2 scroll-mt-24">
        {children}
      </h6>
    );
  },
  ul({ children }) {
    return <ul className="my-4 ml-8 list-disc space-y-3 text-neutral-800">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="my-7 ml-6 list-decimal space-y-3 text-neutral-800">{children}</ol>;
  },
  li({ children }) {
    return <li className="pl-2 leading-7 mb-2 text-base">{children}</li>;
  },
  p({ children }) {
    return <p className="text-base md:text-lg leading-8 text-neutral-800 mb-5 font-normal">{children}</p>;
  },
  a({ href, children }) {
    return (
      <a
        href={href}
        className="text-primary font-medium underline-offset-2 hover:underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  },
  strong({ children }) {
    return <strong className="font-semibold text-neutral-900">{children}</strong>;
  },
  em({ children }) {
    return <em className="italic text-neutral-800">{children}</em>;
  },
  hr() {
    return <hr className="my-8 border-neutral-200" />;
  },
  table({ children }) {
    return (
      <div className="my-8 overflow-x-auto rounded-lg border border-neutral-300">
        <table className="min-w-full border-collapse">{children}</table>
      </div>
    );
  },
  thead({ children }) {
    return <thead className="bg-neutral-100 border-b border-neutral-300">{children}</thead>;
  },
  tbody({ children }) {
    return <tbody className="bg-white divide-y divide-neutral-200">{children}</tbody>;
  },
  tr({ children }) {
    return <tr className="hover:bg-neutral-50 transition-colors">{children}</tr>;
  },
  th({ children }) {
    return (
      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 uppercase tracking-wider">
        {children}
      </th>
    );
  },
  td({ children }) {
    return <td className="px-6 py-4 text-sm text-neutral-700">{children}</td>;
  },
  img({ src, alt, ...props }) {
    let imageSrc = typeof src === 'string' ? src : '';

    if (typeof imageSrc === 'string' && !imageSrc.startsWith('/')) {
      try {
        const decodedSrc = decodeURIComponent(imageSrc);
        imageSrc = `/images/blog/${decodedSrc}`;
      } catch {
        imageSrc = `/images/blog/${imageSrc}`;
      }
    }

    return (
      <div className="my-8 flex justify-center">
        <div className="relative w-full max-w-4xl rounded-lg border border-neutral-200 bg-neutral-50">
          <Image
            src={imageSrc}
            alt={alt || ''}
            width={1200}
            height={675}
            className="w-full h-auto object-contain"
            style={{ width: '100%', height: 'auto' }}
            unoptimized
            {...props}
          />
        </div>
      </div>
    );
  },
};

export default markdownComponents;
