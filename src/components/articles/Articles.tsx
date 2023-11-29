import { formatDatetimeWithDay } from "src/utilities/formatDatetime";
import type { IArticle } from "types/contentful";

type PropsType = {
  articles: IArticle[];
};

const Articles = ({ articles }: PropsType) => {
  const latestArticle = articles.sort((a, b) => {
    return new Date(b.sys.createdAt) - new Date(a.sys.createdAt);
  })[0];

  return (
    <div className="max-w-[900px] mx-auto">
      <h1 className="text-4xl font-bold py-10">最新の記事</h1>
      <a href={`/media/${latestArticle.fields.slug}`}>
        <div
          key={latestArticle.sys.id}
          className="card w-full bg-base-100 shadow-card lg:flex-row"
        >
          <figure className="min-w-[50%] max-w-[50%]">
            <img
              src={latestArticle.fields.coverImage.fields.file.url || ""}
              alt="Shoes"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="indicator w-fit lg:w-max">
            <span className="indicator-item badge badge-primary h-10 w-20 text-white hidden lg:flex">
              new
            </span>
            <div className="card-body">
              <h2 className="card-title text-3xl">
                {latestArticle.fields.title}
              </h2>
              <p>{latestArticle.fields.description}</p>
              <p>{formatDatetimeWithDay(latestArticle.sys.createdAt, false)}</p>
            </div>
          </div>
        </div>
      </a>
      <div className="grid lg:grid-cols-2 gap-10 my-10 mx-2 lg:mx-0">
        {articles.slice(1).map(article => {
          if (!article) return null;
          return (
            <a href={`/media/${article.fields.slug}`} className="grow">
              <div
                key={article.sys.id}
                className="card bg-base-100 shadow-card h-full"
              >
                <figure>
                  <img
                    src={article.fields.coverImage.fields.file.url || ""}
                    alt="Shoes" // TODO: 画像のaltを設定する
                    style={{
                      height: "230px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </figure>
                <div className="card-body flex-col justify-between gap-y-3">
                  <div className="grid gap-y-4">
                    <h2 className="card-title text-xl min-h-[56px] inline">
                      {article.fields.title}
                    </h2>
                    <p
                      className="overflow-y-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                      }}
                    >
                      {article.fields.description}
                    </p>
                  </div>
                  <p className="grow-0">
                    {formatDatetimeWithDay(article.sys.createdAt, false)}
                  </p>
                  {/* TODO: タグ表示する */}
                  {article.fields.countries && false && (
                    <div>
                      {article.fields.countries?.map(country => {
                        return <p>{country.fields.name}</p>;
                      })}
                    </div>
                  )}
                  {/* TODO: タグ表示する */}
                  {article.fields.industries && false && (
                    <div>
                      {article.fields.industries?.map(industry => {
                        return <p>{industry.fields.name}</p>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
