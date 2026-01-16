import Button from '@/components/common/Button';

interface SubscribeButtonProps {
  className?: string;
  handleSubscribe: () => void;
}

const SubscribeButton = ({
  className,
  handleSubscribe,
}: SubscribeButtonProps) => {
  return (
    <Button
      text='+ 구독하기'
      className={`${className}`}
      handleClick={handleSubscribe}
    />
  );
};

export default SubscribeButton;
