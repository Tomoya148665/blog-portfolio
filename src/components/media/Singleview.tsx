import React from "react";
import Header from "./header";
import ArticleContainer from "./article-container";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BlogPostCard2 from "./blog-post-card2";
import { formatToYYYYMMDD } from "src/utilities/formatDatetime";

interface SingleviewProps {
  article: ArticleProps;
}

const Singleview: React.FC<SingleviewProps> = ({ article }) => {
  const EmbeddedArticle = ({ title, body }) => {
    console.log("EmbeddedArticle props:", { title, body });

    //後でEmbedded Articleのポストカードを作る必要がある
    /* return (
      <div className="embedded-article">
        <h2>{title}</h2>
      </div>
    ); */
  };

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.HR]: () => <hr />,
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
      [INLINES.ENTRY_HYPERLINK]: (node, children) => (
        <a href={`/entry/${node.data.target.sys.id}`}>{children}</a>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => (
        <a href={node.data.target.fields.file.url}>{children}</a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <img
            src={node.data.target.fields.file.url}
            alt={
              node.data.target.fields.description ||
              node.data.target.fields.title
            }
          />
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        // This assumes that `contentType` is available in your embedded entry node
        const contentType = node.data.target.sys.contentType.sys.id;

        switch (contentType) {
          case "blogPage": // or 'blogPost', or whatever your content type ID is
            // Using the fields directly might depend on the exact structure of your `node.data.target.fields`
            return <EmbeddedArticle {...node.data.target.fields} />;
          default:
            console.warn("Unhandled content type:", contentType);
            return null;
        }
      },
    },
  };

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start gap-[10px]">
      <main className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-4 pb-24">
          <ArticleContainer
            text={article.fields.category[0].fields.name}
            text1={article.fields.category[1]?.fields.name}
            text2={article.fields.category[2]?.fields.name}
            title={article.fields.title}
            date={formatToYYYYMMDD(article.sys.createdAt, false)}
            image={article.fields.coverImage.fields.file.url}
            body={documentToReactComponents(article.fields.body, options)}
          />
        </div>
        <section className="self-stretch flex flex-col items-center justify-start py-[72px] px-4 gap-[40px] text-center text-[32.25px] text-black font-text-sm-medium">
          <div className="self-stretch relative leading-[43px] font-semibold">
            Related articles
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-[680px]">
            {article.fields.recommendedPosts?.map((post, index) => (
              <BlogPostCard2
                key={index}
                image={post.fields.coverImage.fields.file.url}
                date={formatToYYYYMMDD(post.sys.createdAt, false)}
                title={post.fields.title}
                description={post.fields.description}
                text={post.fields.category[0]?.fields.name}
                text1={post.fields.category[1]?.fields.name}
                text2={post.fields.category[2]?.fields.name}
                slug={post.fields.slug}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Singleview;
