const TRIAL_FORM_URL = "https://share.hsforms.com/1AXCA5D56Rvqq5vk93eS1nQnndjo";

const LastMessage = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-100 lg:px-20">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-3xl lg:text-5xl font-bold">
            グローバルの壁を共に突破しませんか？
          </h1>
          <p className="py-6">
            jetGeeは海外展開の最初から最後まで、常に並走する存在です。
          </p>
          <a href={TRIAL_FORM_URL} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary text-white">
              ウェイトリスト登録
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastMessage;
