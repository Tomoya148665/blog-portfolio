import Blocks from "@components/contentful/Blocks";
import TableOfContents from "@components/organisms/TableOfContents";
import type { IArticle } from "types/contentful";
import type { Article } from "types/generated";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { ReactNode } from "react";

type PropsType = {
  article: IArticle;
};

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode) => (
      <p className="text-lg inline">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: ReactNode) => (
      <h2 className="text-3xl border-l-4 border-l-primary pl-4 mt-10 mb-5">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: ReactNode) => (
      <h3 className="text-2xl mt-8">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: ReactNode) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: ReactNode) => {
      return <li className="text-lg p-2 w-full">{children}</li>;
    },
    [BLOCKS.OL_LIST]: (_node: any, children: ReactNode) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
    [INLINES.HYPERLINK]: (node: any, children: ReactNode) => {
      return (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {children}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const src = "https:" + node.data.target.fields.file.url;
      const height = node.data.target.fields.file.details.height;
      const width = node.data.target.fields.file.details.width;
      return <img src={src} width={width} height={height} />;
    },
  },
};

const Article = ({ article }: PropsType) => {
  if (!article.fields) {
    return null;
  }

  const blocks = article.fields.content.content;
  const richTextDocument = article.fields.content;
  const relatedArticles = article.fields.relatedArticles;

  return (
    <div className="max-w-4xl mx-auto px-5 lg:px-10 pb-20">
      <figure>
        <img
          className="w-full h-96 object-cover"
          src={article.fields.coverImage.fields.file.url || ""}
          alt="Shoes"
        />
      </figure>
      <div className="my-2">
        <a href="/media" className="link">
          記事一覧へ
        </a>
      </div>
      <h1 className="text-5xl my-10">{article.fields.title}</h1>
      <div className="text-lg my-10">{article.fields.description}</div>
      <TableOfContents article={article} />
      {false && ( // react-renderer に切り替え
        <Blocks blocks={blocks} />
      )}
      <div className="grid gap-y-4 my-7 py-7">
        {documentToReactComponents(richTextDocument, options)}
      </div>
      {relatedArticles && (
        <div>
          <h5>関連記事</h5>
          {relatedArticles.map(article => {
            return (
              <div>
                <a href={`/media/${article.fields.slug}`} className="link">
                  {article.fields.title}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Article;
