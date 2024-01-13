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
        return <img src={src} style={{ width: "100%", height: "auto" }} />;
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
