import Header from "./Header";
import { BiCheck } from "react-icons/bi/index";

const ChatFirst = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-100 lg:px-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:flex-row">
          <Header
            title="チャットファースト"
            subtitle="Feature 1 - Chat First"
            content="専門家や現地ネットワークとのコミュニケーションは、国際コミュニケーションに最適化されたチャットを中心に行います。"
          />
          <div className="my-10 space-y-5">
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>翻訳、要約、自動メッセージ生成に対応</p>
            </div>
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>自社専用のAIチャットボットがチャット内容を自動学習</p>
            </div>
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>専門家と第三者間でのやりとりも全て可視化し、自社ナレッジへ</p>
            </div>
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>販売代理店、ソーシング、法務などバラバラなやりとりを集約</p>
            </div>
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>チャットのやり取りや蓄積データを元に、タスクを自動実行</p>
            </div>
          </div>
        </div>
        <div className="mockup-window border border-base-300 shadow-lg lg:mr-10 max-w-none lg:max-w-[50%] mb-4 lg:mb-0">
          <img
            src="/top/dashboard.png"
            className="object-fit rounded-lg shadow-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatFirst;
