interface ParagraphProps {
    text: string;
    className?: string;
  }
  
  const paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
    return <p className={`text-3xl ${className}`}>{text}</p>;
  };
  
  export default paragraph;
  