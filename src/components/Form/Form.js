import React, { useCallback, useEffect, useState } from 'react';
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
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Form() {
	const reviews = useStore(state => state.reviews);
	const addReview = useStore(state => state.addReview);
	const setModalState = useStore(state => state.setModalState);
	const editmode = useStore(state => state.editmode);
	const hideEdit = useStore(state => state.hideEdit);
	const editReview = useStore(state => state.editReview);
	const ID = useStore(state => state.id);
	const indexToUpdate = reviews.findIndex(review => review.id === ID);
	const router = useRouter();
	const CLOUD = process.env.CLOUDINARY_CLOUD;
	const PRESET = process.env.CLOUDINARY_PRESET;

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		watch,

		formState: { errors },
	} = useForm();

	//CLOUDINARY-----------------------------
	const placeholderImage = {
		url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
		width: 460,
		height: 307,
	};

	const [previewImage, setPreviewImage] = useState(placeholderImage);
	const uploadImage = async () => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;
			const image = watch('image')[0];
			console.log(watch('image'), 'image');

			const fileData = new FormData();
			fileData.append('file', image);
			fileData.append('upload_preset', PRESET);

			const response = await fetch(url, {
				method: 'POST',
				body: fileData,
			});

			setPreviewImage(await response.json());
			console.log(response);
		} catch (error) {
			console.error(error.message);
		}
	};

	//END CLOUDINARY------------------------

	const prePopulateForm = useCallback(() => {
		setValue('name', reviews[indexToUpdate].name);
		setValue('rating', reviews[indexToUpdate].rating);
		setValue('location', reviews[indexToUpdate].location);
		setValue('comment', reviews[indexToUpdate].comment);
		setPreviewImage(reviews[indexToUpdate].image);
	}, [indexToUpdate, reviews, setValue]);

	const resetForm = useCallback(() => {
		console.log('test');
		setValue('name', '');
		setValue('rating', '');
		setValue('location', '');
		setValue('comment', '');
		setValue('image', '');
	}, [setValue]);

	useEffect(() => {
		if (editmode) {
			prePopulateForm();
		} else {
			reset();
		}
	}, [editmode, prePopulateForm, resetForm]);

	const onSubmit = data => {
		data.image = {
			url: previewImage.url,
			width: previewImage.width,
			height: previewImage.height,
		};
		if (editmode) {
			editReview(data, ID);
			setModalState('updated');
			hideEdit();
			router.push('/');
		} else {
			addReview(data);
			setModalState('sent');
			reset();
			router.push('/');
			console.log(data);
		}
	};

	console.log(previewImage);

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<Label htmlFor="image">Upload a picture:</Label>
			<Input
				id="image"
				type="file"
				aria-invalid={errors.image ? 'true' : 'false'}
				{...register('image')}
				onChange={uploadImage}
			/>
			{errors.image && errors.image.type === 'required' && (
				<span>please enter a valid url</span>
			)}
			<Image
				src={previewImage.url}
				alt={previewImage.url}
				width={previewImage.width}
				height={previewImage.height}
			/>

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
