import { ButtonStyled } from './Button.styled';
export default function Button({ children }) {
	return <ButtonStyled type="submit">{children}</ButtonStyled>;
}
