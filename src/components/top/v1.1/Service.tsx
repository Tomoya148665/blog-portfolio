import Header from "./Header";

type CardProps = {
  title: string;
  content: string;
  image: string;
};

const ServiceCard = ({ title, content, image }: CardProps) => {
  return (
    <div className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] bg-base-100 grow p-12 space-y-5 rounded-sm">
      <img src={image} className="max-w-[70%] mx-auto" />
      <h3 className="text-2xl lg:text-2xl text-center whitespace-pre-wrap">
        {title}
      </h3>
      <p className="lg:text-md text-gray-500">{content}</p>
    </div>
  );
};

const Service = () => {
  return (
    <div className="hero min-h-[90vh] bg-base-100 lg:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="space-y-10 py-10">
          <Header
            title="海外展開支援AI「jetGee（ジェット・ジー）」とは？"
            subtitle="Service"
            content="AIとプロフェッショナルの融合型サービスにより、迅速でハイクオリティな支援を従来の30%以下の低コストで提供します。"
          />
          <div className="flex-row lg:flex w-full space-y-5 lg:space-y-0 lg:space-x-6">
            <ServiceCard
              title={"独自の現地データ学習\nAIチャット"}
              content="LLMを活用して大量のデータを読み込み、翻訳・要約をした上で、必要な情報を必要なタイミングで提供します。また jetGee 独自の収集データを提供します。"
              image="/top/feature1.png"
            />
            <ServiceCard
              title={"専門家にチャットで\n即時アクセス"}
              content="専門家への業務依頼や質問をチャット上で即時実行することができます。また、全てのコミュニケーションを一箇所にまとめて管理することができます。"
              image="/top/feature2.png"
            />
            <ServiceCard
              title={"ローカライズ\nオートメーション"}
              content="海外展開を支援するコンサルティング会社や、同じ国へ事業展開をする企業、海外事業チームメンバー間などで情報を共有し、円滑なコラボレーションを促進します。"
              image="/top/feature3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
