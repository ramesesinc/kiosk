interface SubtitleProps {
    text: string;
    className?: string;
  }
  
  const subtitle: React.FC<SubtitleProps> = ({ text, className }) => {
    return <p className={`text-3xl ${className}`}>{text}</p>;
  };
  
  export default subtitle;
  