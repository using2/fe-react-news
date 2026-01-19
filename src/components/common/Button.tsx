interface ButtonProps {
  text: string;
  className?: string;
  handleClick?: () => void;
}

const Button = ({ text, className, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`text-[#879298] border border-[#D2DAE0] px-1 py-1 text-xs ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
