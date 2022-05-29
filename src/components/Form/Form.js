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
import { ImageWrapper } from '../../UI/ImageWrapper';
import SVGIcon from '../../UI/SVGIcon';
import DivFlex from '../../UI/DivFlex.styled';

export default function Form() {
	const reviews = useStore(state => state.reviews);
	const addReview = useStore(state => state.addReview);
	const setModalState = useStore(state => state.setModalState);
	const editmode = useStore(state => state.editmode);
	const hideEdit = useStore(state => state.hideEdit);
	const editReview = useStore(state => state.editReview);
	const ID = useStore(state => state.id);
	const select = useStore(state => state.select);
	const smileySelect = useStore(state => state.smileySelect);
	const indexToUpdate = reviews.findIndex(review => review.id === ID);
	const router = useRouter();
	const CLOUD = process.env.CLOUDINARY_CLOUD;
	const PRESET = process.env.CLOUDINARY_PRESET;

	const {
		register,
		handleSubmit,
		reset,
		setValue,

		formState: { errors },
	} = useForm();

	const placeholderImage = {
		url: 'https://res.cloudinary.com/dlzyhqilm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1653520182/Group_16_ggv2bu.svg',
		width: 400,
		height: 220,
	};

	const [previewImage, setPreviewImage] = useState(placeholderImage);
	const uploadImage = async event => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;
			const image = event.target.files[0];

			const fileData = new FormData();
			fileData.append('file', image);
			fileData.append('upload_preset', PRESET);

			const response = await fetch(url, {
				method: 'POST',
				body: fileData,
			});

			setPreviewImage(await response.json());
		} catch (error) {
			console.error(error.message);
		}
	};

	const prePopulateForm = useCallback(() => {
		setValue('name', reviews[indexToUpdate].name);
		setValue('rating', reviews[indexToUpdate].rating);
		setValue('location', reviews[indexToUpdate].location);
		setValue('comment', reviews[indexToUpdate].comment);
		setPreviewImage(reviews[indexToUpdate].image);
	}, [indexToUpdate, reviews, setValue]);

	useEffect(() => {
		if (editmode) {
			prePopulateForm();
		} else {
			reset();
		}
	}, [editmode, prePopulateForm, reset]);

	const onSubmit = data => {
		data.image =
			previewImage.url ==
			'https://res.cloudinary.com/dlzyhqilm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1653520182/Group_16_ggv2bu.svg'
				? {
						url: 'https://images.unsplash.com/photo-1624160719218-33eb1081919c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHBhdHRlcm58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
				  }
				: { url: previewImage.url };

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
		}
	};
	console.log(smileySelect);

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<DivFlex justifyContent="space-between" alignItems="center" gap="5%">
				<Label htmlFor="image">
					<DivFlex
						color="grey"
						border="3px solid transparent"
						padding="15px"
						width="100%"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						borderRadius="50px"
						background="linear-gradient(white, white) padding-box,
					linear-gradient(to right, darkblue, darkorchid) border-box"
					>
						<SVGIcon variant="upload" color="grey" /> Upload your image
					</DivFlex>
				</Label>
				<Input
					position="fixed"
					top="-100%"
					left="-100vw"
					id="image"
					type="file"
					{...register('image')}
					onChange={uploadImage}
				/>

				<ImageWrapper borderRadius="10%">
					<Image
						src={previewImage.url}
						alt={previewImage.url}
						width="150px"
						height="150px"
						objectFit="cover"
					/>
				</ImageWrapper>
			</DivFlex>
			<FormFieldset
				aria-invalid={errors.rating ? 'true' : 'false'}
				{...register('rating', { required: true })}
			>
				<Legend>Rate the product:</Legend>

				<Input
					{...register('rating')}
					position="fixed"
					top="-100%"
					left="-100vw"
					name="rating"
					type="radio"
					id="rating_good"
					value="Good"
					onClick={() => {
						select('good');
					}}
				/>
				<Label htmlFor="rating_good">
					{smileySelect === 'good' ? (
						<SVGIcon variant="smiley_great" color="var(--rating-good)" size="30px" />
					) : (
						<SVGIcon variant="smiley_great" color="grey" size="30px" />
					)}
				</Label>

				<Input
					{...register('rating')}
					position="fixed"
					top="-100%"
					left="-100vw"
					name="rating"
					type="radio"
					id="rating_middling"
					value="Middling"
					onClick={() => {
						select('okay');
					}}
				/>
				<Label htmlFor="rating_middling">
					{smileySelect === 'okay' ? (
						<SVGIcon variant="smiley_okay" color="orange" size="30px" />
					) : (
						<SVGIcon variant="smiley_okay" color="grey" size="30px" />
					)}
				</Label>

				<Input
					{...register('rating')}
					position="fixed"
					top="-100%"
					left="-100vw"
					name="rating"
					type="radio"
					id="rating_bad"
					value="Bad"
					onClick={() => {
						select('bad');
					}}
				/>
				<Label htmlFor="rating_bad">
					{smileySelect === 'bad' ? (
						<SVGIcon variant="smiley_bad" color="red" size="30px" />
					) : (
						<SVGIcon variant="smiley_bad" color="grey" size="30px" />
					)}
				</Label>

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
