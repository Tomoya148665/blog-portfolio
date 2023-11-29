type BlogPostCard1Type = {
  image?: string;
  date?: string;
  title?: string;
  description?: string;
  text?: string;
  text1?: string;
  text2?: string;
  slug?: string;
};

const BlogPostCard1 = ({
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
    <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-center text-sm text-slateblue font-text-sm-medium mq700:flex-col">
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[212px] object-cover mq700:flex-[unset] mq700:self-stretch"
        alt=""
        src={image}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] mq700:flex-[unset] mq700:self-stretch">
        <a href={`/media/${slug}`} className="no-underline">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch relative text-sm leading-[20px] font-semibold font-text-sm-medium text-slateblue text-left">
              {date}
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative text-lg leading-[28px] font-semibold font-text-sm-medium text-gray-100 text-left">
                {title}
              </div>
              <div className="self-stretch relative text-base leading-[24px] font-text-sm-medium text-slategray text-left">
                {description}
              </div>
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

export default BlogPostCard1;
