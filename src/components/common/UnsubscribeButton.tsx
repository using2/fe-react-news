import Button from '@/components/common/Button';

interface UnsubscribeButtonProps {
  additialnalText?: string;
  className?: string;
  handleUnsubscribe: () => void;
}

const UnsubscribeButton = ({
  additialnalText,
  className,
  handleUnsubscribe,
}: UnsubscribeButtonProps) => {
  return (
    <Button
      text={`x${additialnalText}`}
      className={`${className}`}
      handleClick={handleUnsubscribe}
    />
  );
};

export default UnsubscribeButton;
