const COUNTRIES = {
  us: "アメリカ",
  ca: "カナダ",
  in: "インド",
  cn: "中国",
  tw: "台湾",
  sg: "シンガポール",
  th: "タイ",
  vn: "ベトナム",
  kr: "韓国",
  my: "マレーシア",
  id: "インドネシア",
  de: "ドイツ",
  gb: "イギリス",
  mx: "メキシコ",
  br: "ブラジル",
  au: "オーストラリア",
  nz: "ニュージーランド",
  ee: "エストニア",
  ke: "ケニア",
  za: "南アフリカ",
};

const Country = ({ code }: { code: keyof typeof COUNTRIES }) => {
  return (
    <div className="flex flex-col space-y-2 justify-between">
      <img src={`/countries/${code}.png`} className="shadow-md" />
      <p className="text-center text-xs hidden lg:block">{COUNTRIES[code]}</p>
    </div>
  );
};

const Countries = () => {
  return (
    <div className="hero min-h-[10vh] bg-base-100 pb-10 lg:pb-20 pt-0 lg:pt-10 lg:px-20 hidden lg:flex lg:justify-center">
      <div className="hero-content flex-col items-start">
        <p className="text-primary font-bold">対応国一覧（一部）</p>
        <div className="grid grid-cols-10 w-full gap-1 lg:gap-10">
          {Object.keys(COUNTRIES).map(code => {
            return <Country code={code as keyof typeof COUNTRIES} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Countries;
