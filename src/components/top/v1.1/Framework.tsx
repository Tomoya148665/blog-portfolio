import Header from "./Header";
import { BiCheck } from "react-icons/bi/index";

const Framework = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-100 lg:px-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:flex-row">
          <Header
            title="海外展開フレームワーク"
            subtitle="Feature 2 - Blueprints"
            content="食品・飲料の海外展開の事例を世界中から集め、自社の海外展開の状況や市況をもとに最適なフレームワークを提供します。"
          />
          <div className="my-10 space-y-5">
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>直感的なUIUX上で海外展開のステップを可視化</p>
            </div>
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>海外現地の最新情報を反映した最適解を提示</p>
            </div>
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>専門家のチャットサポート + AIチャットボット</p>
            </div>
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>展示会の出展代行やVISAの手配まで実務もサポート</p>
            </div>
            <div className="flex items-center space-x-3">
              <BiCheck fontSize={25} />
              <p>自社独自のワークフローをフレームワーク化することも可能</p>
            </div>
          </div>
        </div>
        <div className="mockup-window border border-base-300 shadow-lg lg:mr-10 max-w-none lg:max-w-[50%] mb-4 lg:mb-0">
          <img
            src="/top/framework.png"
            className="object-fit rounded-lg shadow-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Framework;
