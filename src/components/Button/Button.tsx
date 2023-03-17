import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  text?: string | number;
  action?: () => void;
  isDisabled?: boolean;
  type?: string;
  children?: JSX.Element;
}

const Button = ({
  className,
  text,
  action,
  isDisabled,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} className={className} disabled={isDisabled}>
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
