import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
	return (
		<>
			{children}
			<Navbar />
		</>
	);
}
