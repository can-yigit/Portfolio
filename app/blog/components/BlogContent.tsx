"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <ReactMarkdown
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const isInline = !match && !className;
          return !isInline && match ? (
            <SyntaxHighlighter
              style={oneDark}
              language={match[1]}
              PreTag="div"
              customStyle={{
                borderRadius: "12px",
                padding: "1.25rem",
                margin: "1.5rem 0",
                fontSize: "14px",
              }}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        h1: ({ children }) => <h1>{children}</h1>,
        h2: ({ children }) => <h2>{children}</h2>,
        h3: ({ children }) => <h3>{children}</h3>,
        p: ({ children }) => <p>{children}</p>,
        ul: ({ children }) => <ul>{children}</ul>,
        ol: ({ children }) => <ol>{children}</ol>,
        li: ({ children }) => <li>{children}</li>,
        blockquote: ({ children }) => <blockquote>{children}</blockquote>,
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
