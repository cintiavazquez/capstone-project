import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import { FormFieldsetStyled } from './Input.styled';
import { FormStyled } from './Form.styled';

export default function Form() {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);
	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<FormFieldsetStyled>
				<legend>Rate the product:</legend>

				<input
					{...register('rating')}
					name="rating"
					type="radio"
					id="rating_good"
					value="Good"
				/>
				<label htmlFor="rating_good">Good</label>

				<input
					{...register('rating')}
					name="rating"
					type="radio"
					id="rating_middling"
					value="Middling"
				/>
				<label htmlFor="rating_middling">Middling</label>

				<input
					{...register('rating')}
					name="rating"
					type="radio"
					id="rating_bad"
					value="Bad"
				/>
				<label htmlFor="rating_bad">Bad</label>
			</FormFieldsetStyled>

			<Button type="submit">Post review</Button>
		</FormStyled>
	);
}
