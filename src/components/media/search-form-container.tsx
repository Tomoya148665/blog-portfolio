import { FetchedCategories } from "@lib/contentful";

const SearchFormContainer = ({ categories }) => {
  return (
    <div className="self-stretch bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-8 px-0 pb-16 text-center text-9xl text-black font-text-sm-medium">
      <div className="w-full flex flex-col items-center justify-start gap-[26px] max-w-[760px]">
        <div className="self-stretch relative leading-[20px] font-medium">{`Search Your Interest `}</div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[8px]">
          {categories.items.map((category, index) => (
            <button
              key={index}
              className="cursor-pointer [border:none] py-0.5 px-2.5 bg-ghostwhite-200 rounded-2xl flex flex-row items-center justify-center"
            >
              <div className="relative text-3xl leading-[20px] font-medium font-text-sm-medium text-slateblue text-center">
                {category.fields.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFormContainer;
