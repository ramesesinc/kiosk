import Images from "@/component/ui/Image";

interface FooterProps {
  logo: string;
}

const Footer: React.FC<FooterProps> = ({ logo }) => {
  return (
    <div className="flex justify-center items-center text-center h-[130px] shadow-[0px_-17px_25px_-10px_rgba(0,0,0,0.3)]">
      <Images src={logo} height={150} width={200} alt={"Etracs Logo"} />
    </div>
  );
};

export default Footer;
