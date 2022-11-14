import { ButtonContainer } from "./styles";

const Button = ({ label, ...props}) => {
  return (
    <ButtonContainer  {...props}>
      {label}
    </ButtonContainer>
  );
}

export default Button