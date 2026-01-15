import Button from '@/components/common/Button';

interface SubscribeButtonProps {
  className?: string;
}

const SubscribeButton = ({ className }: SubscribeButtonProps) => {
  return <Button text='+ 구독하기' className={`${className}`} />;
};

export default SubscribeButton;
