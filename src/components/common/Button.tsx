interface ButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`text-[#879298] border border-[#D2DAE0] px-1 py-1 text-xs ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
