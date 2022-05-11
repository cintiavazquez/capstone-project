export default function ReviewCard(props) {
	return (
		<div>
			<div>
				<h3>{props.name}</h3>
				<p>{props.rating}</p>
			</div>
			<div>
				<p>{props.comment}</p>
			</div>
			<div>
				<p>{props.location}</p>
			</div>
		</div>
	);
}
