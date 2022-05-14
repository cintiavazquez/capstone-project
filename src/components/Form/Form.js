import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import { FormStyled } from './Form.styled';
import { FormWarning } from './FormWarning.styled';
import FormTextArea from './TextArea';
import Label from './FormLabel';
import React from 'react';
import FormFieldset from './Fieldset';

export default function Form() {
	const {
		register,
		handleSubmit,
		control,
		onBlur,
		formState: { errors },
	} = useForm();
	const onSubmit = data => console.log(data);
	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<FormFieldset>
				<Label htmlFor="rating">Rate the product:</Label>

				<input
					{...register('rating')}
					name="rating"
					type="radio"
					id="rating_good"
					value="Good"
				/>
				<Label htmlFor="rating_good">Good</Label>

				<input
					{...register('rating')}
					name="rating"
					type="radio"
					id="rating_middling"
					value="Middling"
				/>
				<Label htmlFor="rating_middling">Middling</Label>

				<input
					{...register('rating')}
					name="rating"
					type="radio"
					id="rating_bad"
					value="Bad"
				/>
				<Label htmlFor="rating_bad">Bad</Label>

				{errors.rating && <FormWarning>This field is required</FormWarning>}
			</FormFieldset>

			<Label htmlFor="name">Product name:</Label>
			<input {...register('name', { required: true })} name="name" type="text" id="name" />
			{errors.name && <FormWarning>Please enter a name</FormWarning>}

			<Label htmlFor="location">Where did you buy this product?</Label>
			<input
				{...register('location', { required: true })}
				name="location"
				type="text"
				id="location"
			/>
			{errors.location && <FormWarning>Please enter a location</FormWarning>}

			<Label htmlFor="comment">Write your review</Label>
			<FormTextArea
				control={control}
				name="comment"
				type="text"
				id="comment"
				onBlur={onBlur}
			/>
			{errors.comment && <FormWarning>Please enter your review</FormWarning>}

			<Label htmlFor="otto">Otto</Label>
			<input {...register('otto', { required: true })} name="otto" id="otto" type="text" />

			<Button type="submit">Post review</Button>
		</FormStyled>
	);
}
