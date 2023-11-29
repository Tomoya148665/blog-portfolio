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

const Merits = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-100 lg:px-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="space-y-10 py-20">
          <Header
            title="チームの「海外展開力」を増強"
            subtitle="Benefits"
            content="jetGeeは海外展開に関わるチームの力強い仲間として加わり、より安く、より早く、より高い成功率で海外展開を導きます。"
          />
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
            <MeritCard
              title="海外展開の成功率をUP"
              content="情報不足による失敗や、大きな先行投資による資金不足を避け、テクノロジーが素早く効率的な海外展開を促進します。"
            />
            <MeritCard
              title="展開速度の上昇"
              content="サインアップしてワンクリックで海外展開を前に進めることができ、フレームワークに沿った最適な海外展開をすることでスピードが加速します。"
            />
            <MeritCard
              title="自社に海外現地のナレッジを蓄積"
              content="AIが自動で収集した情報や、社内社外でのやりとりの全てを一箇所に集約し、自社ナレッジとして蓄積することで、強力なチームを作ることができます。"
            />
            <MeritCard
              title="採用費・委託費用の削減"
              content="jetGeeに海外展開のノウハウが詰め込まれているため、過度に専門家やグローバル人材を採用したり委託したりする必要はありません。"
            />
            <MeritCard
              title="海外展開の進捗や成果を可視化"
              content="社内の他のメンバーに見えづらい海外展開の進捗や成果・アクション状況をダッシュボードで可視化し、共有することができます。"
            />
            <MeritCard
              title="AIによるDX・業務効率化"
              content="AIを駆使した業務効率化やアウトソーシングを通じて、社内の業務を効率化するDX改革を推進することができます。"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merits;
