type BlogPostCard2Type = {
  image?: string;
  date?: string;
  title?: string;
  description?: string;
  text?: string;
  text1?: string;
  text2?: string;
  slug?: string;
};

const BlogPostCard2 = ({
  image,
  date,
  title,
  description,
  text,
  text1,
  text2,
  slug,
}) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[300px] text-center text-sm text-slateblue font-text-sm-medium">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <a href={`/media/${slug}`} className="no-underline">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-medium text-slateblue text-left">
              {date}
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <div className="flex-1 relative text-5xl leading-[32px] font-semibold font-text-sm-medium text-gray-100 text-left">
                {title}
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/media/arrowupright.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative text-base leading-[24px] font-text-sm-medium text-slategray text-left">
              {description}
            </div>
          </button>
        </a>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
          {text && (
            <div className="flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                <div className="relative leading-[20px] font-medium">
                  {text}
                </div>
              </div>
            </div>
          )}
          {text1 && (
            <div className="flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                <div className="relative leading-[20px] font-medium">
                  {text1}
                </div>
              </div>
            </div>
          )}
          {text2 && (
            <div className="flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                <div className="relative leading-[20px] font-medium">
                  {text2}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard2;
