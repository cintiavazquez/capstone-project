import React from 'react';
import { FormLabel } from './Label.styled';

export default function Label({ children, htmlFor }) {
	return <FormLabel htmlFor={htmlFor}>{children}</FormLabel>;
}

//const Label = React.forwardRef((props, ref) => <FormLabel ref={ref}>{props.children}</FormLabel>);

/* Label.displayName = 'Label';
export default Label; */
