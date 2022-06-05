import Link from 'next/link';
import DivFlex from '../src/UI/DivFlex.styled';
import DivStyled from '../src/UI/DivStyled.styled';
import { NavLink } from '../src/UI/NavLink.styled';
import { SVGStar } from '../src/UI/SVGAnimation';
import Typography from '../src/UI/Typography';

export default function StartPage() {
	return (
		<DivFlex
			background="var(--lightest-color)"
			flexDirection="column"
			position="fixed"
			width="100vw"
			height="100vh"
			bottom="0"
			left="0"
			right="0"
			top="0"
			zIndex="5"
			justifyContent="center"
			alignItems="center"
		>
			<DivStyled position="fixed" top="0" width="2000px" height="auto">
				<svg
					width="100%"
					height="100%"
					id="svg"
					viewBox="0 0 1440 600"
					xmlns="http://www.w3.org/2000/svg"
					className="transition duration-300 ease-in-out delay-150"
				>
					<defs>
						<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
							<stop offset="5%" stopColor="#bbc8b288" />
							<stop offset="95%" stopColor="#e5e2c788" />
						</linearGradient>
					</defs>
					<path
						d="M 0,600 C 0,600 0,200 0,200 C 135.42857142857144,209.5 270.8571428571429,219 394,230 C 517.1428571428571,241 628.0000000000001,253.50000000000003 754,247 C 879.9999999999999,240.49999999999997 1021.1428571428571,215 1138,204 C 1254.857142857143,193 1347.4285714285716,196.5 1440,200 C 1440,200 1440,600 1440,600 Z"
						stroke="none"
						strokeWidth="0"
						fill="url(#gradient)"
						className="transition-all duration-300 ease-in-out delay-150 path-0"
						transform="rotate(-180 720 300)"
					/>
					<defs>
						<linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
							<stop offset="5%" stopColor="#bbc8b2ff" />
							<stop offset="95%" stopColor="#e5e2c7ff" />
						</linearGradient>
					</defs>
					<path
						d="M 0,600 C 0,600 0,400 0,400 C 94.07142857142858,437.2857142857143 188.14285714285717,474.57142857142856 316,457 C 443.85714285714283,439.42857142857144 605.5,366.99999999999994 729,346 C 852.5,325.00000000000006 937.8571428571429,355.42857142857144 1050,373 C 1162.142857142857,390.57142857142856 1301.0714285714284,395.2857142857143 1440,400 C 1440,400 1440,600 1440,600 Z"
						stroke="none"
						strokeWidth="0"
						fill="url(#gradient)"
						className="transition-all duration-300 ease-in-out delay-150 path-1"
						transform="rotate(-180 720 300)"
					/>
				</svg>
			</DivStyled>
			<DivStyled position="relative" width="400px" height="400px" aspectRatio="1/1">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 132 257"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M76.0663 35.4435C77.2554 35.142 78.1739 35.1843 78.822 35.5702C79.5217 35.9429 79.9765 36.5429 80.1862 37.3701C80.527 38.7142 80.4149 40.0081 79.8499 41.2518C79.3366 42.4824 78.2335 43.3398 76.5406 43.824C72.431 44.976 68.6818 45.5965 65.2931 45.6854C63.5756 54.319 60.755 61.8568 56.8312 68.2987C52.946 74.6759 48.3927 78.5264 43.1713 79.8503C37.7947 81.2135 32.9952 79.1016 28.7725 73.5147C24.5499 67.9278 21.0885 59.8096 18.3883 49.1599C16.0813 40.0611 14.6565 31.7291 14.1138 24.1637C13.8975 21.3575 14.085 19.3842 14.6762 18.2439C15.306 17.0389 16.6548 16.1742 18.7227 15.6498C22.1348 14.7847 24.2144 15.8255 24.9615 18.7723C25.0402 19.0825 25.1326 19.6643 25.239 20.5176C26.0475 30.2164 27.4086 38.8397 29.3223 46.3876C31.3278 54.2973 33.5011 60.1562 35.8422 63.9643C38.2218 67.7076 40.7299 69.245 43.3665 68.5765C46.0548 67.8949 48.5038 65.2932 50.7136 60.7714C52.9234 56.2496 54.6322 50.8369 55.84 44.5334C52.1883 43.3685 49.168 41.4383 46.7789 38.7428C44.3767 35.9955 42.6578 32.5799 41.6223 28.4958C40.5868 24.4117 40.3355 20.8165 40.8684 17.7103C41.4399 14.5392 42.6343 11.9805 44.4517 10.0341C46.3208 8.07467 48.5995 6.75413 51.2877 6.07253C54.5964 5.23363 57.5086 5.76072 60.0244 7.65382C62.5918 9.5338 64.3999 12.5417 65.4485 16.6775C66.9559 22.6227 67.3085 29.4384 66.5063 37.1247C69.3642 36.8952 72.5509 36.3349 76.0663 35.4435ZM49.3168 25.9671C50.6014 31.0335 53.1802 34.3687 57.0532 35.9726C57.6013 29.6713 57.3969 24.6337 56.4401 20.8598C55.8895 18.6885 55.2054 17.1838 54.3877 16.3458C53.5569 15.456 52.6503 15.1356 51.6681 15.3847C50.2722 15.7386 49.3446 16.8541 48.8852 18.7313C48.4127 20.5567 48.5566 22.9687 49.3168 25.9671ZM91.0489 193.489C91.721 193.318 92.3232 193.523 92.8555 194.104C93.4263 194.619 93.8363 195.368 94.0854 196.35C94.3868 197.539 94.4418 198.516 94.2504 199.28C94.0589 200.043 93.6409 200.782 92.9966 201.496C89.3108 205.621 86.6175 208.67 84.9166 210.642L80.7991 215.235C81.548 226.434 81.0931 235.491 79.4346 242.404C77.8409 249.355 74.5884 253.454 69.6771 254.699C67.0405 255.367 64.6854 255.084 62.6116 253.849C60.5509 252.666 59.1864 250.756 58.5179 248.12C57.5872 244.449 58.032 240.127 59.8522 235.154C61.6855 230.233 65.803 223.686 72.2046 215.516L71.903 212.374C71.3781 213.992 70.4902 215.373 69.2392 216.515C68.0269 217.593 66.7228 218.309 65.327 218.663C62.1218 219.475 59.2678 218.961 56.7652 217.12C54.2625 215.278 52.5327 212.471 51.5759 208.697C50.5272 204.561 50.494 200.415 51.4762 196.26C52.4452 192.052 54.2247 188.438 56.8146 185.415C59.4431 182.328 62.5409 180.332 66.108 179.427C67.2454 179.139 68.054 179.182 68.5338 179.555C69.0523 179.864 69.5849 180.554 70.1318 181.626C71.0616 181.17 72.1727 180.778 73.4652 180.451C74.7576 180.123 75.7147 180.1 76.3366 180.383C76.997 180.6 77.4714 181.278 77.7598 182.415C77.9171 183.036 78.0157 183.533 78.0558 183.908C78.2553 185.563 78.6381 189.785 79.204 196.575C79.3118 197.868 79.4266 199.297 79.5482 200.862C79.7084 202.361 79.869 203.971 80.03 205.691C83.2242 201.58 86.3551 197.87 89.4227 194.561C89.9899 193.977 90.532 193.62 91.0489 193.489ZM66.1328 210.123C67.3219 209.821 68.2757 208.809 68.9944 207.086C69.713 205.364 69.9641 203.099 69.7478 200.293L68.8671 186.403C66.7606 186.992 65.0059 188.318 63.6028 190.379C62.1866 192.389 61.2634 194.824 60.8331 197.684C60.4029 200.544 60.5548 203.421 61.2888 206.316C61.6951 207.919 62.3068 209.03 63.1238 209.648C63.9925 210.253 64.9955 210.411 66.1328 210.123ZM68.6229 246.961C69.9154 246.633 70.9697 244.715 71.7858 241.207C72.6537 237.685 72.9786 232.349 72.7607 225.196C69.6452 229.617 67.5559 233.421 66.4929 236.607C65.4299 239.792 65.1605 242.419 65.6848 244.487C65.9077 245.366 66.2463 246.05 66.7006 246.54C67.2067 247.017 67.8475 247.157 68.6229 246.961ZM106.001 208.35C102.951 209.123 100.15 209.036 97.5989 208.087C95.086 207.073 92.9722 205.463 91.2574 203.257C89.5426 201.051 88.3247 198.526 87.6037 195.683C86.6076 191.754 86.4465 188.081 87.1207 184.664C87.8335 181.182 89.2402 178.266 91.3408 175.918C93.4283 173.518 96.0488 171.918 99.2024 171.119C102.253 170.345 105.06 170.459 107.624 171.459C110.176 172.408 112.309 173.986 114.024 176.192C115.739 178.398 116.956 180.923 117.677 183.766C118.674 187.695 118.815 191.401 118.103 194.883C117.377 198.313 115.944 201.235 113.805 203.648C111.704 205.996 109.103 207.563 106.001 208.35ZM104.731 199.759C106.488 199.313 107.719 197.983 108.423 195.769C109.179 193.541 109.092 190.592 108.161 186.922C107.44 184.078 106.379 182.064 104.978 180.879C103.577 179.693 102.153 179.284 100.705 179.651C98.8443 180.123 97.5359 181.473 96.7802 183.7C96.063 185.863 96.1763 188.805 97.1201 192.527C97.8672 195.474 98.9347 197.514 100.323 198.648C101.71 199.782 103.18 200.152 104.731 199.759Z"
						fill="#431E41"
					/>
				</svg>
				<SVGStar width="50px" height="50px" viewBox="0 0 24 24">
					<path
						fill="var(--rating-bad)"
						d="M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06Z"
					/>
				</SVGStar>
			</DivStyled>

			<Link passHref href="/home">
				<NavLink>
					<DivStyled
						margin="40px 0 0 0"
						padding="10px 20px 10px 20px"
						background="linear-gradient(0deg, rgba(196,196,196,0) 0%, rgba(229,226,231,1) 97%);"
						borderRadius="10px"
					>
						<DivStyled
							boxShadow="2px -2px 10px grey"
							padding="5px"
							background="var(--lightest-color)"
							borderRadius="10px"
						>
							<Typography variant="p" color="var(--text-light)" fontWeight="300">
								START RATING
							</Typography>
						</DivStyled>
					</DivStyled>
				</NavLink>
			</Link>
		</DivFlex>
	);
}
