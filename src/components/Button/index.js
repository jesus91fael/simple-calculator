import { ButtonContainer } from "./styles"

const Button = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onclick} type='button'>{label}</ButtonContainer>
  );
}

export default Button;
