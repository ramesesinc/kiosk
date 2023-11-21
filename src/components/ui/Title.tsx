interface TitleProps {
  text: string;
  className?: string;
}

const title: React.FC<TitleProps> = ({ text, className }) => {
  return <p className={`uppercase font-bold text-4xl ${className}`}>{text}</p>;
};

export default title;
