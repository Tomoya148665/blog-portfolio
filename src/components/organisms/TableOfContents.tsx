import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
// import { Link } from "react-scroll";
import type { Document } from "@contentful/rich-text-types";
import type { IArticle } from "types/contentful";
import { HeadingContent } from "@components/contentful/Blocks";
import { AiOutlineRight } from "react-icons/ai/index";

type PropsType = {
  article: IArticle;
};

const HEADINGS = [BLOCKS.HEADING_2, BLOCKS.HEADING_3];

const TableOfContents = ({ article }: PropsType) => {
  const blocks = article.fields.content.content;
  const headings = blocks.filter((b) => HEADINGS.includes(b.nodeType));
  return (
    <nav className="toc bg-gray-100 p-8 border-2 border-grey-800 rounded-lg space-y-2">
      <p className="toc__title text-xl">目次</p>
      {headings.map((heading) => {
        const content = heading.content[0];
        if (content.nodeType !== "text") return null;
        if (heading.nodeType === BLOCKS.HEADING_2) {
          return (
            <div className="flex items-center space-x-2">
              <AiOutlineRight />
              <p className="text-xl">{content.value}</p>
            </div>
          );
        }
        if (heading.nodeType === BLOCKS.HEADING_3) {
          return (
            <div className="flex items-center space-x-2 ml-10">
              <p>・</p>
              <p className="text-lg">{content.value}</p>
            </div>
          );
        }
      })}
    </nav>
  );
};

export default TableOfContents;
