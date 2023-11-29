type HeaderType = {
  title: string;
  subtitle: string;
  content: string;
};

const Header = ({ title, subtitle, content }: HeaderType) => {
  return (
    <div className="space-y-3 w-full">
      <p className="text-primary font-bold text-lg">{subtitle}</p>
      <h2 className="text-2xl lg:text-4xl font-bold">{title}</h2>
      <p className="mr-5 text-sm lg:text-lg text-gray-500">{content}</p>
    </div>
  );
};

export default Header;
