const TRIAL_FORM_URL = "https://share.hsforms.com/1AXCA5D56Rvqq5vk93eS1nQnndjo";

const FirstView = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-100 lg:px-20">
      <div className="hero-content flex-row-reverse py-10">
        <img
          src="/top.png"
          className="max-w-[40%] rounded-lg hidden lg:block mt-10"
        />
        <div className="space-y-8">
          <div>
            <img
              src="/logo.png"
              className="max-w-[30%] min-w-[150px] rounded-lg"
            />
          </div>
          <div className="space-y-1 lg:space-y-3">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
              食品・飲料の海外展開支援AI
            </h1>
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold">
              自動で販路拡大 & ソーシング
            </h1>
          </div>
          <p className="mr-5 text-sm lg:text-md xl:text-lg text-gray-500">
            jetGee（ジェット・ジー）は飲料・食品の海外展開を目指す企業のためのAIクラウドサービスです。大量の現地情報を学習済みの独自AI+コンサルタントがチャットで海外展開を支援。全ての取引とナレッジを1箇所に集約することができます。
          </p>
          <div className="flex lg:flex-row items-center content-center">
            <a href={TRIAL_FORM_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary btn-lg text-white">
                ウェイトリスト登録
              </button>
            </a>
            {false && (
              <p className="ml-4">※ β版につき無料でご利用いただけます。</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstView;
