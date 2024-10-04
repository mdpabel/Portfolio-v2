'use client';
import React, { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import toc from 'remark-toc';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ReactNode } from 'react';
import rehypeSlug from 'rehype-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import CodeCopyBtn from './CodeCopyBtn';
import TableOfContents from './TableOfContents';
import { cn } from '@/lib/utils';
import { visit } from 'unist-util-visit';

// Custom plugin to modify <img> src attributes
const rehypeImageSrc = (repoUrl: string) => {
  return () => {
    return (tree: any) => {
      visit(tree, 'element', (node: any) => {
        if (node.tagName === 'img' && node.properties && node.properties.src) {
          if (node.properties.src.startsWith('/')) {
            node.properties.src = `${repoUrl}${node.properties.src}`;
          }
        }
      });
    };
  };
};

const Pre = ({ children }: { children: ReactNode }) => (
  <pre className='blog-pre'>
    <CodeCopyBtn>{children}</CodeCopyBtn>
    {children}
  </pre>
);

const Content = ({ content }: { content: string }) => {
  const [tocHtml, setTocHtml] = useState('');

  useEffect(() => {
    const generateToc = async () => {
      const tocResult = await remark()
        .use(toc, { heading: 'Table of contents', maxDepth: 3 })
        .use(html)
        .process(content);

      const parsedTocHtml = tocResult.toString();

      const processedResult = await unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeRaw)
        .use(() => (tree) => {
          const filteredTree = {
            ...tree,
            //@ts-ignore
            children: tree.children.filter((node, index) => {
              if (node.tagName === 'h2' && index === 0) return true;
              if (node.tagName === 'ul' && index === 2) return true;
              return false;
            }),
          };
          return filteredTree;
        })
        .use(rehypeStringify)
        .process(parsedTocHtml);

      setTocHtml(processedResult.toString());
    };

    generateToc();
  }, [content]);

  const repoUrl =
    'https://raw.githubusercontent.com/mdpabel/Real-time-Vehicle-Tracking/main';

  return (
    <div
      className={cn(
        'relative gap-6 grid grid-cols-[75%_25%] notes-wrapper',
        !tocHtml && 'grid-cols-1 ',
      )}>
      <article className='max-w-full dark:prose-invert prose'>
        <ReactMarkdown
          className='text-zinc-800 dark:text-zinc-200 post-markdown'
          rehypePlugins={[
            rehypeRaw,
            rehypeSlug,
            rehypeImageSrc(repoUrl), // Custom plugin to update image paths
          ]}
          remarkPlugins={[
            remarkGfm,
            // @ts-ignore
            [remarkAutolinkHeadings, { behavior: 'wrap' }],
          ]}
          components={{
            // @ts-ignore
            pre: Pre,
            code({ node, className = 'blog-code', children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  // @ts-ignore
                  style={a11yDark}
                  language={match[1]}
                  PreTag='div'
                  {...props}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}>
          {content}
        </ReactMarkdown>
      </article>
      <aside
        className={cn(
          'max-w-full dark:prose-invert prose',
          !tocHtml && 'hidden',
        )}>
        <TableOfContents tocHtml={tocHtml} />
      </aside>
    </div>
  );
};

export default Content;
