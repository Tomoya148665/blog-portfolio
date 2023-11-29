import Header from "./Header";
import { Image, Picture } from "@astrojs/image/components";
import Footer from "@layouts/Footer";
import type { ReactNode } from "react";
import { FaDatabase, FaProjectDiagram } from "react-icons/fa/index";
import { BsTranslate } from "react-icons/bs/index";

type TechnologyType = {
  title: string;
  content: string;
  icon: ReactNode;
};

const Technology = ({ title, content, icon }: TechnologyType) => {
  return (
    <div className="card border bg-white w-full min-w-full">
      <div className="card-body">
        <div className="flex items-center">
          <div className="mr-6 hidden lg:block">{icon}</div>
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-100 lg:px-20">
      <div className="hero-content flex-col w-full lg:flex-row gap-10">
        <div className="space-y-5">
          <Header
            title="独自AI技術による情報越境技術"
            subtitle="テクノロジー"
            content="jetGee（ジェット・ジー）は独自AI技術を活用して国をまたがる課題を解決し、企業の海外展開やグローバルビジネスを支援します。"
          />
          <div className="grid gap-4">
            <Technology
              title="国際的な情報のフィルター技術"
              content="独自アルゴリズムによって大量の情報を解析し、フェイクニュースや古い情報をふるい落とし、ビジネスに与える影響度や関連性の高い情報のみを集約する技術"
              icon={<FaDatabase size="30" />}
            />
            <Technology
              title="オートメーション"
              content="海外の異なる文化や商習慣、現地競争環境やニーズ動向などに基づき、広告キャンペーンや営業資料、キャッチコピーやWEBサイトのデザインの自動生成を断続的に実行する技術"
              icon={<FaProjectDiagram size="30" />}
            />
            <Technology
              title="異国コミュニケーションの最適化技術"
              content="各国の言語、文化、商習慣をデータ化し、国を跨いだBtoB商談において翻訳以上のフィードバックやメッセージ自動生成を行う技術"
              icon={<BsTranslate size="30" />}
            />
          </div>
        </div>
        <div className="align-center contents">
          <img
            src="/top/screen.png"
            className="lg:max-w-md rounded-lg shadow-2xl mt-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
