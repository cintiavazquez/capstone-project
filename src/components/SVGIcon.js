const svgObject = {
	home: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
	post: 'M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z',
};

function SVGIcon({ variant, size = '24px', color = 'currentColor' }) {
	return (
		<svg
			/* xmlns="http://www.w3.org/2000/svg" */
			viewBox="0 0 24 24"
			style={{ width: size, height: size }}
		>
			<path fill={color} d={svgObject[variant]} />
		</svg>
	);
}
export default SVGIcon;
