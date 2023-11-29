const COUNTRIES = {
  eu: "EU",
  us: "アメリカ",
  ca: "カナダ",
  in: "インド",
  cn: "中国",
  tw: "台湾",
  th: "タイ",
  vn: "ベトナム",
  kr: "韓国",
  id: "インドネシア",
  br: "ブラジル",
  au: "オーストラリア",
};

const Country = ({ code }: { code: keyof typeof COUNTRIES }) => {
  return (
    <div className="flex flex-col space-y-2 justify-between">
      <img src={`/countries/${code}.png`} className="shadow-md" />
      <p className="text-center text-3xl font-bold hidden lg:block">
        {COUNTRIES[code]}
      </p>
    </div>
  );
};

const Countries = () => {
  return (
    <div className="hero min-h-[10vh] bg-base-100 pb-10 lg:pb-20 pt-0 lg:pt-10 lg:px-20">
      <div className="hero-content flex-col items-start">
        <p className="text-primary font-bold text-5xl">対応国一覧（一部）</p>
        <div className="grid grid-cols-6 w-full gap-1 lg:gap-10">
          {Object.keys(COUNTRIES).map(code => {
            return <Country code={code as keyof typeof COUNTRIES} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Countries;
