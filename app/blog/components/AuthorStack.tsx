interface Author {
  id: string;
  name: string;
  avatar?: string;
  email?: string;
}

interface AuthorStackProps {
  authors: Author[];
  showNames?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function AuthorStack({ authors, showNames = true, size = "md" }: AuthorStackProps) {
  if (!authors || authors.length === 0) return null;

  const sizeClasses = {
    sm: { avatar: "w-6 h-6 text-[10px]", offset: "-ml-2", text: "text-xs" },
    md: { avatar: "w-8 h-8 text-xs", offset: "-ml-2.5", text: "text-sm" },
    lg: { avatar: "w-10 h-10 text-sm", offset: "-ml-3", text: "text-base" },
  };

  const s = sizeClasses[size];

  return (
    <div className="blog-author-stack">
      <div className="blog-author-stack__avatars">
        {authors.slice(0, 4).map((author, index) => (
          <div
            key={author.id}
            className={`blog-author-stack__avatar ${s.avatar} ${index > 0 ? s.offset : ""}`}
            style={{ zIndex: authors.length - index }}
            title={author.name}
          >
            {author.avatar ? (
              <img src={author.avatar} alt={author.name} />
            ) : (
              <span>{author.name.charAt(0).toUpperCase()}</span>
            )}
          </div>
        ))}
        {authors.length > 4 && (
          <div className={`blog-author-stack__avatar blog-author-stack__avatar--more ${s.avatar} ${s.offset}`}>
            <span>+{authors.length - 4}</span>
          </div>
        )}
      </div>
      {showNames && (
        <div className={`blog-author-stack__names ${s.text}`}>
          {authors.length === 1 ? (
            <span>{authors[0].name}</span>
          ) : authors.length === 2 ? (
            <span>{authors[0].name} & {authors[1].name}</span>
          ) : (
            <span>{authors[0].name} & {authors.length - 1} more</span>
          )}
        </div>
      )}
    </div>
  );
}
