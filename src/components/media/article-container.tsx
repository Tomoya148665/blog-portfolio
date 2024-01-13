type ArticleContainerType = {
  text?: string;
  text1?: string;
  text2?: string;
  title?: string;
  date?: string;
  image?: string;
  body?: ReactNode;
};

const ArticleContainer = ({ text, text1, text2, title, date, image, body }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[48px] max-w-[680px] text-left text-mini text-black font-text-sm-medium">
      <div className="self-stretch flex flex-row items-center justify-start gap-[10px] opacity-[0.4]">
        <a href="/media" className="no-underline">
          <img
            className="relative w-[16.5px] h-[7.36px]"
            alt=""
            src="/media/right-arrow.png"
          />
        </a>
        <div className="flex flex-row items-center justify-start pt-0 px-0 pb-px underline-only">
          <a href="/media" className="no-underline">
            <b className="relative leading-[32px]">Back</b>
          </a>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-center text-sm text-pink-700">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <div className="flex flex-row items-start justify-start mix-blend-multiply gap-[8px] text-slateblue">
            {text && (
              <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                <div className="relative leading-[20px] font-medium">
                  {text}
                </div>
              </div>
            )}
            {text1 && (
              <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                <div className="relative leading-[20px] font-medium">
                  {text1}
                </div>
              </div>
            )}
            {text2 && (
              <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                <div className="relative leading-[20px] font-medium">
                  {text2}
                </div>
              </div>
            )}
          </div>
          <div className="relative leading-[20px] font-medium text-black opacity-[0.6]">
            {date}
          </div>
        </div>
        <b className="self-stretch relative text-29xl leading-[48px] text-black text-left">
          {title}
        </b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] font-merriweather">
        <img
          className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[535px] shrink-0 object-cover"
          alt=""
          src={image}
        />
        <div className="self-stretch relative leading-[32px]">{body}</div>
      </div>
    </div>
  );
};

export default ArticleContainer;
