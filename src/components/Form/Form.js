import React from 'react';
import useStore from '../../useStore/useStore';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button.styled';
import { FormStyled } from './Form.styled';
import { FormWarning } from './FormWarning.styled';
import { Label } from './Label.styled';
import { TextArea } from './TextArea.styled';
import { Input } from './Input.styled';
import { FormFieldset } from './Fieldset.styled';
import { Legend } from './Legend.styled';

export default function Form() {
	const addReview = useStore(state => state.addReview);
	const modalShow = useStore(state => state.modalShow);

	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();

	const onSubmit = (data, event) => {
		addReview(data);
		event.target.reset();
		modalShow();
	};

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<FormFieldset
				aria-invalid={errors.rating ? 'true' : 'false'}
				{...register('rating', { required: true })}
			>
				<Legend>Rate the product:</Legend>

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

				{errors.rating && <FormWarning role="alert">This field is required</FormWarning>}
			</FormFieldset>

			<Label htmlFor="name">Product name:</Label>
			<Input
				aria-invalid={errors.name ? 'true' : 'false'}
				{...register('name', { required: true, maxLength: 30 })}
				name="name"
				type="text"
				id="name"
			/>
			{errors.name && errors.name.type === 'required' && (
				<FormWarning role="alert">Please enter a name</FormWarning>
			)}
			{errors.name && errors.name.type === 'maxLength' && (
				<FormWarning role="alert">The name must be under 30 characters</FormWarning>
			)}

			<Label htmlFor="location">Where did you buy this product?</Label>
			<Input
				aria-invalid={errors.location ? 'true' : 'false'}
				{...register('location', { required: true })}
				name="location"
				type="text"
				id="location"
			/>

			{errors.location && <FormWarning role="alert">Please enter a location</FormWarning>}

			<Label htmlFor="comment">Write your review</Label>
			<TextArea
				aria-invalid={errors.comment ? 'true' : 'false'}
				{...register('comment', { required: true, maxLength: 700 })}
				name="comment"
				type="text"
				id="comment"
			/>
			{errors.comment && errors.comment.type === 'required' && (
				<FormWarning role="alert">Please enter your review</FormWarning>
			)}
			{errors.comment && errors.comment.type === 'maxLength' && (
				<FormWarning role="alert">The comment must be under 700 characters</FormWarning>
			)}

			<Button type="submit" variant="submit">
				Post review
			</Button>
		</FormStyled>
	);
}
