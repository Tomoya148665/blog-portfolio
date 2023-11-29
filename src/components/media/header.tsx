const Header = () => {
  return (
    <>
      <div className="self-stretch bg-white flex flex-col items-center justify-start pt-8 px-4 pb-0">
        <div className="w-full h-[61px] flex flex-row items-start justify-start gap-[14px] max-w-[1152px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-80 h-[60px] bg-[url('media/fulllogo-transparent-nobuffer-11@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <div className="flex-1 flex flex-row items-center justify-end gap-[12px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[35.16px] h-[30.63px] hidden mq700:flex">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/media/hamburger-menu.svg"
              />
            </button>
            <div className="flex flex-row items-center justify-end gap-[12px] mq700:hidden">
              <a href="/media" className="no-underline">
                <button className="cursor-pointer [border:none] p-2 bg-[transparent] h-[49px] flex flex-row items-center justify-start box-border">
                  <div className="relative text-xl leading-[24px] font-text-sm-medium text-gray-100 text-left">
                    Blog
                  </div>
                </button>
              </a>{" "}
              <a href="/" className="no-underline">
                <button className="cursor-pointer [border:none] p-2 bg-[transparent] h-[49px] flex flex-row items-center justify-start box-border">
                  <div className="relative text-xl leading-[24px] font-text-sm-medium text-gray-100 text-left">
                    Products
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
