interface ParagraphProps {
    text: string;
    className?: string;
  }
  
  const paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
    return <p className={`text-3xl text-center ${className}`}>{text}</p>;
  };
  
  export default paragraph;
  