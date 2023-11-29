import Header from "./header";
import SearchFormContainer from "./search-form-container";
import BlogPostCard from "./blog-post-card";
import BlogPostCard1 from "./blog-post-card1";
import BlogPostCard2 from "./blog-post-card2";
import {
  fetchBlogPageEntries,
  FetchedArticles,
  FetchedCategories,
} from "@lib/contentful";
import { formatToYYYYMMDD } from "src/utilities/formatDatetime";

const Collectview = ({ articles, categories }) => {
  console.log("Check", FetchedCategories.items);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-center text-[146px] text-gray-100 font-text-sm-medium">
      {/* <Header /> */}
      <div className="self-stretch bg-white flex flex-row items-start justify-center pt-8 px-0 pb-[62px]">
        <div className="flex-1 flex flex-row items-start justify-center py-[38px] px-0 border-t-[1px] border-solid border-gray-200 border-b-[1px]">
          <b className="relative inline-block w-[1462px] shrink-0 lg:text-[120px] md:text-51xl sm:font-bold sm:font-text-sm-medium sm:text-[40px] mq700:text-51xl mq590:text-[50px]">
            jetGee BLOG
          </b>
        </div>
      </div>
      <SearchFormContainer categories={categories} />

      <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start text-left text-5xl">
        <div className="self-stretch bg-white flex flex-col items-center justify-start py-8 px-0">
          <div className="w-full flex flex-col items-start justify-start py-0 px-4 box-border gap-[32px] max-w-[1152px]">
            <div className="self-stretch relative leading-[32px] font-semibold">
              Recent blog posts
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq1152:flex-col">
              <BlogPostCard
                image={articles.items[0].fields.coverImage.fields.file.url}
                date={formatToYYYYMMDD(articles.items[0].sys.createdAt, false)}
                title={articles.items[0].fields.title}
                description={articles.items[0].fields.description}
                text={articles.items[0].fields.category[0].fields.name}
                text1={articles.items[0].fields.category[1]?.fields.name}
                text2={articles.items[0].fields.category[2]?.fields.name}
                slug={articles.items[0].fields.slug}
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[32px] mq1152:flex-[unset] mq1152:self-stretch">
                <BlogPostCard1
                  image={articles.items[1].fields.coverImage.fields.file.url}
                  date={formatToYYYYMMDD(
                    articles.items[1].sys.createdAt,
                    false
                  )}
                  title={articles.items[1].fields.title}
                  description={articles.items[1].fields.description}
                  text={articles.items[1].fields.category[0].fields.name}
                  text1={articles.items[1].fields.category[1]?.fields.name}
                  text2={articles.items[1].fields.category[2]?.fields.name}
                  slug={articles.items[1].fields.slug}
                />
                <BlogPostCard1
                  image={articles.items[2].fields.coverImage.fields.file.url}
                  date={formatToYYYYMMDD(
                    articles.items[2].sys.createdAt,
                    false
                  )}
                  title={articles.items[2].fields.title}
                  description={articles.items[2].fields.description}
                  text={articles.items[2].fields.category[0].fields.name}
                  text1={articles.items[2].fields.category[1]?.fields.name}
                  text2={articles.items[2].fields.category[2]?.fields.name}
                  slug={articles.items[2].fields.slug}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col items-center justify-start py-7 px-0 mq1152:pt-0 mq1152:box-border">
          <div className="w-full flex flex-col items-start justify-start py-0 px-4 box-border max-w-[1152px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <BlogPostCard
                image={articles.items[3].fields.coverImage.fields.file.url}
                date={formatToYYYYMMDD(articles.items[3].sys.createdAt, false)}
                title={articles.items[3].fields.title}
                description={articles.items[3].fields.description}
                text={articles.items[3].fields.category[0].fields.name}
                text1={articles.items[3].fields.category[1]?.fields.name}
                text2={articles.items[3].fields.category[2]?.fields.name}
                slug={articles.items[3].fields.slug}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col items-center justify-start py-[30px] px-0">
          <div className="w-full flex flex-col items-start justify-start py-0 px-4 box-border max-w-[1152px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[32px] font-semibold">
                All blog posts
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-start justify-center pt-0 px-0 pb-36">
        <div className="flex-1 flex flex-row items-start justify-start py-0 px-4 box-border max-w-[1152px]">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[32px] mq1152:gap-[16px]">
            {articles.items.slice(4).map((article, index) => (
              <BlogPostCard2
                key={article.sys.id}
                image={article.fields.coverImage.fields.file.url}
                date={formatToYYYYMMDD(article.sys.createdAt, false)}
                title={article.fields.title}
                description={article.fields.description}
                text={article.fields.category[0].fields.name}
                text1={article.fields.category[1]?.fields.name}
                text2={article.fields.category[2]?.fields.name}
                slug={article.fields.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collectview;
