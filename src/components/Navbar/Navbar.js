import Link from 'next/link';
import { Button } from '../../UI/Button.styled';
import { Navigation } from '../../UI/Navigation.styled';
import SVGIcon from '../../UI/SVGIcon';

export default function Navbar() {
	return (
		<footer>
			<Navigation>
				<Link passHref href="/">
					<Button type="button" variant="nav">
						<SVGIcon variant="home" color="white" />
					</Button>
				</Link>
				<Link passHref href="/post">
					<Button type="button" variant="nav">
						<SVGIcon variant="post" color="white" />
					</Button>
				</Link>
				<Link passHref href="/profile">
					<Button type="button" variant="nav">
						<SVGIcon variant="profile" color="white" />
					</Button>
				</Link>
			</Navigation>
		</footer>
	);
}
