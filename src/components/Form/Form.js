import { React, useEffect } from 'react';
import useStore from '../../useStore/useStore';
import { useForm } from 'react-hook-form';
import { Button } from '../../UI/Button.styled';
import { FormStyled } from '../../UI/Form.styled';
import { InputWarning } from '../../UI/InputWarning.styled';
import { Label } from '../../UI/Label.styled';
import { TextArea } from '../../UI/TextArea.styled';
import { Input } from '../../UI/Input.styled';
import { FormFieldset } from '../../UI/Fieldset.styled';
import { Legend } from '../../UI/Legend.styled';

export default function Form() {
	const reviews = useStore(state => state.reviews);
	const addReview = useStore(state => state.addReview);
	const modalShow = useStore(state => state.modalShow);
	const hideEdit = useStore(state => state.hideEdit);
	const editmode = useStore(state => state.editmode);
	const editReview = useStore(state => state.editReview);
	const ID = useStore(state => state.id);
	const indexToUpdate = reviews.findIndex(review => review.id === ID);

	const {
		register,
		handleSubmit,
		reset,
		watch,
		setValue,

		formState: { errors },
	} = useForm();

	const newData = watch();

	function prePopulateForm() {
		setValue('name', reviews[indexToUpdate].name);
		setValue('rating', reviews[indexToUpdate].rating);
		setValue('location', reviews[indexToUpdate].location);
		setValue('comment', reviews[indexToUpdate].comment);
	}

	useEffect(() => {
		{
			editmode ? prePopulateForm() : '';
		}
	}, []);

	const onSubmit = data => {
		if (editmode === true) {
			editReview(newData, ID), modalShow('updated'), hideEdit();
		} else {
			addReview(data), modalShow('sent'), reset();
		}
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

				{errors.rating && <InputWarning role="alert">This field is required</InputWarning>}
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
				<InputWarning role="alert">Please enter a name</InputWarning>
			)}
			{errors.name && errors.name.type === 'maxLength' && (
				<InputWarning role="alert">The name must be under 30 characters</InputWarning>
			)}

			<Label htmlFor="location">Where did you buy this product?</Label>
			<Input
				aria-invalid={errors.location ? 'true' : 'false'}
				{...register('location', { required: true })}
				name="location"
				type="text"
				id="location"
			/>

			{errors.location && <InputWarning role="alert">Please enter a location</InputWarning>}

			<Label htmlFor="comment">Write your review</Label>
			<TextArea
				aria-invalid={errors.comment ? 'true' : 'false'}
				{...register('comment', { required: true, maxLength: 700 })}
				name="comment"
				type="text"
				id="comment"
			/>
			{errors.comment && errors.comment.type === 'required' && (
				<InputWarning role="alert">Please enter your review</InputWarning>
			)}
			{errors.comment && errors.comment.type === 'maxLength' && (
				<InputWarning role="alert">The comment must be under 700 characters</InputWarning>
			)}

			{editmode ? (
				<Button type="submit">Save</Button>
			) : (
				<Button type="submit" variant="post">
					Post review
				</Button>
			)}
		</FormStyled>
	);
}
