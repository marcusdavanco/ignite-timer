import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
