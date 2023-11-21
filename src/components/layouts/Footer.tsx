import Images from "../ui/Image";

interface FooterProps {
  logo: string;
}

const Footer: React.FC<FooterProps> = ({ logo }) => {
  return (
    <div className="flex justify-center items-center text-center h-[130px] border-t border-black">
      <Images src={logo} height={150} width={220} alt={"Etracs Logo"} />
    </div>
  );
};

export default Footer;
