import Link from 'next/link';
import DivStyled from '../../UI/DivStyled.styled';
import DivFlex from '../../UI/DivFlex.styled';
import { Navigation } from '../../UI/Navigation.styled';
import SVGIcon from '../../UI/SVGIcon';
import { NavLink } from '../../UI/NavLink.styled';

export default function Navbar() {
	return (
		<footer>
			<Navigation>
				<DivStyled
					width="100%"
					height="100%"
					background="linear-gradient(370deg, rgba(148,126,163,0.97) 33%, rgba(212,233,199,0.88) 49%, rgba(196,196,196,0) 100%);"
				>
					<DivFlex
						borderRadius="none"
						justifyContent="space-around"
						alignItems="center"
						width="100%"
						height="100%"
						background="linear-gradient(144deg, rgba(142,163,126,0.25) 31%, rgba(144,216,190,0.36) 38%, rgba(250,252,158,1) 61%, rgba(187,244,214,0.5) 66%, rgba(120, 192, 65, 0.7) 100%)"
					>
						<Link passHref href="/">
							<NavLink>
								<SVGIcon variant="home" color="var(--dark-lilac)" />
							</NavLink>
						</Link>
						<Link passHref href="/post">
							<NavLink>
								<SVGIcon variant="post" color="var(--dark-lilac)" />
							</NavLink>
						</Link>
						<Link passHref href="/profile">
							<NavLink>
								<SVGIcon variant="profile" color="var(--dark-lilac)" />
							</NavLink>
						</Link>
					</DivFlex>
				</DivStyled>
			</Navigation>
		</footer>
	);
}
