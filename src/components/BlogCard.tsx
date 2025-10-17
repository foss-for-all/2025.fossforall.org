import { useState } from "react";
import { sliceStringByBytes } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
}

export function BlogCard({
  title,
  link,
  pubDate,
  contentSnippet,
}: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        height: "100%",
      }}
    >
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: "all 0.3s ease-in-out",
          cursor: "pointer",
          height: "100%",
          opacity: isHovered ? 0.85 : 1,
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 8px 16px rgba(0, 0, 0, 0.15)"
            : "0 2px 4px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="card-content">
          <p className="title">{title}</p>
          <p className="subtitle">
            {new Date(pubDate).toLocaleDateString()}
          </p>
          <div className="content">
            {sliceStringByBytes(contentSnippet, 0, 200)}
            <br />
          </div>
        </div>
      </div>
    </a>
  );
}
