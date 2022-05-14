import { Controller } from 'react-hook-form';
import { TextArea } from './TextArea.styled';

export default function FormTextArea({ children, name, control, id }) {
	console.log(name, id);
	return (
		<Controller
			name={name}
			id={id}
			control={control}
			rules={{ required: true }}
			render={({
				field: { onChange, onBlur, value, name, ref },
				fieldState: { invalid, isTouched, isDirty, error },
				//formState,
			}) => (
				<TextArea
					name={name}
					value={value}
					id={id}
					checked={value}
					inputRef={ref}
					invalid={invalid}
					isTouched={isTouched}
					isDirty={isDirty}
					error={error}
					onChange={onChange}
					onBlur={onBlur}
				>
					{children}
				</TextArea>
			)}
		/>
	);
}
