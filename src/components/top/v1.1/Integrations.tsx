import Header from "./Header";

type PropsType = {
  title: string;
  content: string;
};

const MeritCard = ({ title, content }: PropsType) => {
  return (
    <div>
      <h3 className="text-primary text-lg md:text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-500">{content}</p>
    </div>
  );
};

const Integrations = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-white lg:px-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="space-y-10 py-20">
          <Header
            title="jetGeeが全ての情報を一箇所に統合"
            subtitle="Integrations"
            content="データ化されていない情報、整理されていない情報、大量の外国語で書かれた情報などを全て整理し、必要なタイミングで提供します。"
          />
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
            <MeritCard
              title="海外API連携"
              content="海外行政機関のAPI, 海外特許API, 論文APIなどを翻訳・要約して提供。必要に応じて、独自のAPI接続の開発が可能です。"
            />
            <MeritCard
              title="Web最新情報"
              content="指定Webサイト、Google 検索結果、News サイトを常にクローリング、真偽判定、翻訳、要約を行い、最新情報をもとに海外展開の支援が可能です。"
            />
            <MeritCard
              title="専門家・コンサルタント"
              content="各国の専門家・コンサルタントに煩雑な契約なく、チャットで必要なタイミングに迅速なアクセスが可能です。"
            />
            <MeritCard
              title="チーム内の気付き・ドキュメント"
              content="チーム内でのナレッジを蓄積し、AI に学習させ、任意のタイミングで引き出すことが可能です。自社独自の情報網として、自社の知見を強化できます。"
            />
            <MeritCard
              title="現地スタッフによる調査代行"
              content="データ化されていない現地情報のヒアリング・実地調査などを代行し、海外出張なく素早く現地情報を収集することができます。"
            />
            <MeritCard
              title="オンラインオペレーター"
              content="現地言語・文化に精通したオンラインオペレーターが、現地ウェブサイトの調査や各実務の代行を行います。"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
