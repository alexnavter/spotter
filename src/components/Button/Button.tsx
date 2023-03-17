import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  text?: string | number;
  action?: () => void;
  isDisabled?: boolean;
  type?: string;
  children?: JSX.Element;
  ariaLabel?: string;
}

const Button = ({
  className,
  text,
  action,
  isDisabled,
  children,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      onClick={action}
      className={className}
      disabled={isDisabled}
      aria-label={ariaLabel}
    >
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
