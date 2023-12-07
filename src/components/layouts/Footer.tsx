import Images from "../ui/Image";

interface FooterProps {
  logo: string;
}

const Footer: React.FC<FooterProps> = ({ logo }) => {
  return (
    <div className="border-2 border-gray-400 flex justify-center">
      <div className="p-[20px]">
        <Images src={logo} alt="etracs logo" width={160} height={50} />
      </div>
    </div>
  );
};

export default Footer;
