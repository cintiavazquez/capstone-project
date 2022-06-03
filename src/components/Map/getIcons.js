import L from 'leaflet';
export const getIcon = type => {
	if (type === 'Default') {
		const markerIcon = new L.divIcon({
			html: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 17.9666C22.2889 17.9666 24.1444 16.1111 24.1444 13.8222C24.1444 11.5333 22.2889 9.67773 20 9.67773C17.7111 9.67773 15.8556 11.5333 15.8556 13.8222C15.8556 16.1111 17.7111 17.9666 20 17.9666Z" fill="#316905"/>
			<path d="M20 2.22217C16.5391 2.22506 13.22 3.59737 10.7676 6.03939C8.31514 8.4814 6.92872 11.7947 6.91111 15.2555C6.91111 20.4444 9.82222 24.7888 11.9556 27.9555L12.3444 28.5333C14.467 31.6095 16.744 34.5763 19.1667 37.4222L20.0111 38.4111L20.8556 37.4222C23.2779 34.576 25.5549 31.6093 27.6778 28.5333L28.0667 27.9444C30.1889 24.7777 33.1 20.4444 33.1 15.2555C33.0824 11.7927 31.6944 8.4778 29.2396 6.03547C26.7848 3.59314 23.4628 2.22212 20 2.22217ZM20 21.1111C18.5584 21.1111 17.1492 20.6836 15.9505 19.8827C14.7519 19.0817 13.8176 17.9434 13.2659 16.6115C12.7143 15.2796 12.5699 13.8141 12.8512 12.4002C13.1324 10.9863 13.8266 9.68752 14.846 8.66815C15.8653 7.64878 17.1641 6.95458 18.578 6.67333C19.9919 6.39209 21.4575 6.53643 22.7893 7.08811C24.1212 7.63979 25.2596 8.57403 26.0605 9.77268C26.8614 10.9713 27.2889 12.3806 27.2889 13.8222C27.2889 15.7553 26.521 17.6093 25.154 18.9762C23.7871 20.3431 21.9331 21.1111 20 21.1111Z" fill="#431E41"/>
			<rect x="9" y="5" width="22" height="21" rx="10.5" fill="white"/>
			<path d="M25.368 15.816C25.552 15.816 25.684 15.856 25.764 15.936C25.852 16.016 25.896 16.12 25.896 16.248C25.896 16.456 25.832 16.64 25.704 16.8C25.584 16.96 25.392 17.044 25.128 17.052C24.488 17.068 23.92 17.02 23.424 16.908C22.856 18.1 22.168 19.092 21.36 19.884C20.56 20.668 19.756 21.06 18.948 21.06C18.116 21.06 17.496 20.576 17.088 19.608C16.68 18.64 16.476 17.332 16.476 15.684C16.476 14.276 16.576 13.012 16.776 11.892C16.848 11.476 16.948 11.196 17.076 11.052C17.212 10.9 17.44 10.824 17.76 10.824C18.288 10.824 18.552 11.052 18.552 11.508C18.552 11.556 18.544 11.644 18.528 11.772C18.288 13.212 18.168 14.516 18.168 15.684C18.168 16.908 18.268 17.84 18.468 18.48C18.676 19.112 18.984 19.428 19.392 19.428C19.808 19.428 20.26 19.14 20.748 18.564C21.236 17.988 21.684 17.264 22.092 16.392C21.604 16.088 21.236 15.696 20.988 15.216C20.74 14.728 20.616 14.168 20.616 13.536C20.616 12.904 20.712 12.372 20.904 11.94C21.104 11.5 21.372 11.172 21.708 10.956C22.052 10.74 22.432 10.632 22.848 10.632C23.36 10.632 23.764 10.816 24.06 11.184C24.364 11.552 24.516 12.056 24.516 12.696C24.516 13.616 24.316 14.62 23.916 15.708C24.34 15.78 24.824 15.816 25.368 15.816ZM21.828 13.452C21.828 14.236 22.08 14.816 22.584 15.192C22.896 14.296 23.052 13.556 23.052 12.972C23.052 12.636 23.008 12.392 22.92 12.24C22.832 12.08 22.712 12 22.56 12C22.344 12 22.168 12.128 22.032 12.384C21.896 12.632 21.828 12.988 21.828 13.452Z" fill="#431E41"/>
			</svg>`,
			className: 'marker_div',
			iconSize: [40, 40],
			iconAnchor: [20, 40],
		});
		return markerIcon;
	} else if (type === 'Good') {
		const markerIcon = new L.divIcon({
			html: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 17.9666C22.2889 17.9666 24.1444 16.1111 24.1444 13.8222C24.1444 11.5333 22.2889 9.67773 20 9.67773C17.7111 9.67773 15.8556 11.5333 15.8556 13.8222C15.8556 16.1111 17.7111 17.9666 20 17.9666Z" fill="#316905"/>
            <path d="M20 2.22217C16.5391 2.22506 13.22 3.59737 10.7676 6.03939C8.31514 8.4814 6.92872 11.7947 6.91111 15.2555C6.91111 20.4444 9.82222 24.7888 11.9556 27.9555L12.3444 28.5333C14.467 31.6095 16.744 34.5763 19.1667 37.4222L20.0111 38.4111L20.8556 37.4222C23.2779 34.576 25.5549 31.6093 27.6778 28.5333L28.0667 27.9444C30.1889 24.7777 33.1 20.4444 33.1 15.2555C33.0824 11.7927 31.6944 8.4778 29.2396 6.03547C26.7848 3.59314 23.4628 2.22212 20 2.22217ZM20 21.1111C18.5584 21.1111 17.1492 20.6836 15.9505 19.8827C14.7519 19.0817 13.8176 17.9434 13.2659 16.6115C12.7143 15.2796 12.5699 13.8141 12.8512 12.4002C13.1324 10.9863 13.8266 9.68752 14.846 8.66815C15.8653 7.64878 17.1641 6.95458 18.578 6.67333C19.9919 6.39209 21.4575 6.53643 22.7893 7.08811C24.1212 7.63979 25.2596 8.57403 26.0605 9.77268C26.8614 10.9713 27.2889 12.3806 27.2889 13.8222C27.2889 15.7553 26.521 17.6093 25.154 18.9762C23.7871 20.3431 21.9331 21.1111 20 21.1111Z" fill="#78C041"/>
            <rect x="9" y="5" width="22" height="21" rx="10.5" fill="white"/>
            <path d="M20 6.96875C18.2323 6.96875 16.5044 7.4691 15.0346 8.40652C13.5648 9.34395 12.4193 10.6763 11.7428 12.2352C11.0664 13.7941 10.8894 15.5095 11.2342 17.1644C11.5791 18.8193 12.4303 20.3394 13.6802 21.5325C14.9302 22.7256 16.5227 23.5381 18.2564 23.8673C19.9901 24.1965 21.7871 24.0276 23.4202 23.3818C25.0533 22.7361 26.4492 21.6427 27.4313 20.2397C28.4133 18.8368 28.9375 17.1873 28.9375 15.5C28.933 13.2387 27.9899 11.0713 26.3148 9.47228C24.6396 7.8733 22.369 6.97309 20 6.96875V6.96875ZM20 22.7188C18.5043 22.7188 17.0421 22.2954 15.7985 21.5022C14.5549 20.709 13.5855 19.5816 13.0132 18.2625C12.4408 16.9434 12.291 15.492 12.5828 14.0917C12.8746 12.6914 13.5949 11.4051 14.6525 10.3956C15.7101 9.38601 17.0576 8.69849 18.5246 8.41996C19.9916 8.14142 21.5122 8.28437 22.894 8.83074C24.2759 9.37711 25.457 10.3024 26.288 11.4895C27.119 12.6766 27.5625 14.0723 27.5625 15.5C27.5602 17.4139 26.7627 19.2487 25.345 20.602C23.9272 21.9553 22.005 22.7166 20 22.7188V22.7188ZM15.875 13.8594C15.875 13.6647 15.9355 13.4744 16.0488 13.3125C16.1621 13.1506 16.3232 13.0244 16.5116 12.9499C16.7 12.8754 16.9074 12.8559 17.1074 12.8939C17.3075 12.9319 17.4912 13.0256 17.6355 13.1633C17.7797 13.301 17.8779 13.4764 17.9177 13.6673C17.9575 13.8583 17.9371 14.0562 17.859 14.2361C17.7809 14.416 17.6488 14.5697 17.4792 14.6779C17.3096 14.786 17.1102 14.8438 16.9063 14.8438C16.6327 14.8438 16.3704 14.74 16.177 14.5554C15.9836 14.3708 15.875 14.1204 15.875 13.8594ZM22.0625 13.8594C22.0625 13.6647 22.123 13.4744 22.2363 13.3125C22.3496 13.1506 22.5107 13.0244 22.6991 12.9499C22.8875 12.8754 23.0949 12.8559 23.2949 12.8939C23.495 12.9319 23.6787 13.0256 23.823 13.1633C23.9672 13.301 24.0654 13.4764 24.1052 13.6673C24.145 13.8583 24.1246 14.0562 24.0465 14.2361C23.9684 14.416 23.8363 14.5697 23.6667 14.6779C23.4971 14.786 23.2977 14.8438 23.0938 14.8438C22.8202 14.8438 22.5579 14.74 22.3645 14.5554C22.1712 14.3708 22.0625 14.1204 22.0625 13.8594ZM24.168 17.7969C23.7456 18.4953 23.1381 19.0753 22.4064 19.4786C21.6748 19.8818 20.8448 20.0941 20 20.0941C19.1552 20.0941 18.3252 19.8818 17.5936 19.4786C16.8619 19.0753 16.2544 18.4953 15.832 17.7969C15.7782 17.7224 15.7411 17.638 15.7231 17.5492C15.7051 17.4603 15.7065 17.3689 15.7273 17.2806C15.7481 17.1923 15.7878 17.1091 15.8439 17.0361C15.9 16.9632 15.9713 16.9021 16.0533 16.8567C16.1353 16.8113 16.2263 16.7826 16.3205 16.7724C16.4147 16.7622 16.5101 16.7707 16.6007 16.7973C16.6913 16.824 16.7751 16.8682 16.8469 16.9273C16.9187 16.9864 16.977 17.059 17.018 17.1406C17.3207 17.6396 17.7556 18.0539 18.279 18.3419C18.8024 18.6298 19.3959 18.7814 20 18.7814C20.6041 18.7814 21.1976 18.6298 21.721 18.3419C22.2444 18.0539 22.6793 17.6396 22.982 17.1406C23.0802 17.0046 23.2286 16.909 23.3974 16.8728C23.5662 16.8366 23.7432 16.8625 23.8929 16.9453C24.0426 17.0282 24.1541 17.1619 24.2051 17.3197C24.2561 17.4775 24.2428 17.6479 24.168 17.7969Z" fill="#78C041"/>
            </svg>`,
			className: 'marker_div',
			iconSize: [40, 40],
			iconAnchor: [20, 40],
		});
		return markerIcon;
	} else if (type === 'Okay') {
		const markerIcon = new L.divIcon({
			html: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 17.9666C22.2889 17.9666 24.1444 16.1111 24.1444 13.8222C24.1444 11.5333 22.2889 9.67773 20 9.67773C17.7111 9.67773 15.8556 11.5333 15.8556 13.8222C15.8556 16.1111 17.7111 17.9666 20 17.9666Z" fill="#316905"/>
            <path d="M20 2.22217C16.5391 2.22506 13.22 3.59737 10.7676 6.03939C8.31514 8.4814 6.92872 11.7947 6.91111 15.2555C6.91111 20.4444 9.82222 24.7888 11.9556 27.9555L12.3444 28.5333C14.467 31.6095 16.744 34.5763 19.1667 37.4222L20.0111 38.4111L20.8556 37.4222C23.2779 34.576 25.5549 31.6093 27.6778 28.5333L28.0667 27.9444C30.1889 24.7777 33.1 20.4444 33.1 15.2555C33.0824 11.7927 31.6944 8.4778 29.2396 6.03547C26.7848 3.59314 23.4628 2.22212 20 2.22217ZM20 21.1111C18.5584 21.1111 17.1492 20.6836 15.9505 19.8827C14.7519 19.0817 13.8176 17.9434 13.2659 16.6115C12.7143 15.2796 12.5699 13.8141 12.8512 12.4002C13.1324 10.9863 13.8266 9.68752 14.846 8.66815C15.8653 7.64878 17.1641 6.95458 18.578 6.67333C19.9919 6.39209 21.4575 6.53643 22.7893 7.08811C24.1212 7.63979 25.2596 8.57403 26.0605 9.77268C26.8614 10.9713 27.2889 12.3806 27.2889 13.8222C27.2889 15.7553 26.521 17.6093 25.154 18.9762C23.7871 20.3431 21.9331 21.1111 20 21.1111Z" fill="#FFA500"/>
            <rect x="9" y="5" width="22" height="21" rx="10.5" fill="white"/>
            <path d="M15.725 14.1118C15.725 13.9171 15.7855 13.7268 15.8988 13.565C16.0122 13.4031 16.1733 13.277 16.3617 13.2025C16.5502 13.128 16.7576 13.1085 16.9577 13.1465C17.1578 13.1844 17.3416 13.2782 17.4859 13.4158C17.6302 13.5535 17.7284 13.7288 17.7682 13.9198C17.808 14.1107 17.7876 14.3086 17.7095 14.4884C17.6314 14.6683 17.4992 14.822 17.3296 14.9301C17.16 15.0383 16.9605 15.096 16.7565 15.096C16.4829 15.096 16.2205 14.9923 16.0271 14.8077C15.8336 14.6232 15.725 14.3728 15.725 14.1118ZM22.9457 13.1276C22.7417 13.1276 22.5423 13.1853 22.3726 13.2934C22.203 13.4016 22.0708 13.5553 21.9927 13.7351C21.9146 13.915 21.8942 14.1129 21.934 14.3038C21.9738 14.4947 22.0721 14.6701 22.2163 14.8077C22.3606 14.9454 22.5444 15.0391 22.7445 15.0771C22.9446 15.1151 23.152 15.0956 23.3405 15.0211C23.529 14.9466 23.6901 14.8204 23.8034 14.6586C23.9168 14.4967 23.9773 14.3064 23.9773 14.1118C23.9773 13.8507 23.8686 13.6004 23.6751 13.4158C23.4817 13.2312 23.2193 13.1276 22.9457 13.1276ZM28.7911 15.7522C28.7911 17.4392 28.2668 19.0884 27.2844 20.4912C26.3021 21.8939 24.9059 22.9872 23.2723 23.6329C21.6387 24.2785 19.8412 24.4474 18.107 24.1183C16.3728 23.7891 14.7799 22.9767 13.5296 21.7838C12.2793 20.5908 11.4278 19.0709 11.0829 17.4163C10.7379 15.7616 10.915 14.0465 11.5916 12.4879C12.2683 10.9292 13.4141 9.59702 14.8843 8.65973C16.3545 7.72244 18.0829 7.22217 19.8511 7.22217C22.2207 7.2265 24.492 8.12659 26.1676 9.72534C27.8432 11.3241 28.7866 13.4912 28.7911 15.7522ZM27.4157 15.7522C27.4157 14.3246 26.9721 12.9292 26.1409 11.7422C25.3096 10.5553 24.1282 9.63018 22.746 9.08389C21.3637 8.5376 19.8427 8.39467 18.3753 8.67316C16.9079 8.95166 15.5601 9.63908 14.5021 10.6485C13.4442 11.6579 12.7237 12.944 12.4318 14.3441C12.14 15.7442 12.2898 17.1954 12.8623 18.5143C13.4349 19.8331 14.4044 20.9604 15.6484 21.7535C16.8924 22.5465 18.355 22.9699 19.8511 22.9699C21.8567 22.9677 23.7794 22.2066 25.1976 20.8534C26.6157 19.5003 27.4134 17.6657 27.4157 15.7522ZM23.2896 17.7206H16.4127C16.2303 17.7206 16.0553 17.7898 15.9264 17.9128C15.7974 18.0359 15.725 18.2028 15.725 18.3768C15.725 18.5508 15.7974 18.7177 15.9264 18.8408C16.0553 18.9638 16.2303 19.0329 16.4127 19.0329H23.2896C23.472 19.0329 23.6469 18.9638 23.7758 18.8408C23.9048 18.7177 23.9773 18.5508 23.9773 18.3768C23.9773 18.2028 23.9048 18.0359 23.7758 17.9128C23.6469 17.7898 23.472 17.7206 23.2896 17.7206Z" fill="#FFA500"/>
            </svg>`,
			className: 'marker_div',
			iconSize: [40, 40],
			iconAnchor: [20, 40],
		});
		return markerIcon;
	} else if (type === 'Bad') {
		const markerIcon = new L.divIcon({
			html: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 17.9666C22.2889 17.9666 24.1444 16.1111 24.1444 13.8222C24.1444 11.5333 22.2889 9.67773 20 9.67773C17.7111 9.67773 15.8556 11.5333 15.8556 13.8222C15.8556 16.1111 17.7111 17.9666 20 17.9666Z" fill="#316905"/>
            <path d="M20 2.22217C16.5391 2.22506 13.22 3.59737 10.7676 6.03939C8.31514 8.4814 6.92872 11.7947 6.91111 15.2555C6.91111 20.4444 9.82222 24.7888 11.9556 27.9555L12.3444 28.5333C14.467 31.6095 16.744 34.5763 19.1667 37.4222L20.0111 38.4111L20.8556 37.4222C23.2779 34.576 25.5549 31.6093 27.6778 28.5333L28.0667 27.9444C30.1889 24.7777 33.1 20.4444 33.1 15.2555C33.0824 11.7927 31.6944 8.4778 29.2396 6.03547C26.7848 3.59314 23.4628 2.22212 20 2.22217ZM20 21.1111C18.5584 21.1111 17.1492 20.6836 15.9505 19.8827C14.7519 19.0817 13.8176 17.9434 13.2659 16.6115C12.7143 15.2796 12.5699 13.8141 12.8512 12.4002C13.1324 10.9863 13.8266 9.68752 14.846 8.66815C15.8653 7.64878 17.1641 6.95458 18.578 6.67333C19.9919 6.39209 21.4575 6.53643 22.7893 7.08811C24.1212 7.63979 25.2596 8.57403 26.0605 9.77268C26.8614 10.9713 27.2889 12.3806 27.2889 13.8222C27.2889 15.7553 26.521 17.6093 25.154 18.9762C23.7871 20.3431 21.9331 21.1111 20 21.1111Z" fill="#FF0000"/>
            <rect x="9" y="5" width="22" height="21" rx="10.5" fill="white"/>
            <path d="M19.94 7C18.1718 7 16.4434 7.50028 14.9732 8.43756C13.503 9.37485 12.3572 10.7071 11.6805 12.2657C11.0039 13.8244 10.8268 15.5395 11.1718 17.1941C11.5167 18.8488 12.3682 20.3687 13.6185 21.5616C14.8687 22.7546 16.4617 23.567 18.1959 23.8961C19.9301 24.2252 21.7276 24.0563 23.3612 23.4107C24.9948 22.7651 26.391 21.6718 27.3733 20.269C28.3557 18.8663 28.88 17.2171 28.88 15.53C28.8755 13.269 27.9321 11.1019 26.2565 9.50317C24.5809 7.90442 22.3096 7.00434 19.94 7ZM19.94 22.7477C18.4439 22.7477 16.9813 22.3244 15.7373 21.5313C14.4933 20.7382 13.5238 19.6109 12.9512 18.2921C12.3787 16.9732 12.2289 15.522 12.5207 14.1219C12.8126 12.7218 13.5331 11.4357 14.591 10.4263C15.6489 9.41691 16.9968 8.72949 18.4642 8.45099C19.9316 8.1725 21.4526 8.31543 22.8349 8.86172C24.2171 9.40801 25.3985 10.3331 26.2297 11.5201C27.061 12.707 27.5046 14.1025 27.5046 15.53C27.5023 17.4436 26.7046 19.2782 25.2865 20.6313C23.8683 21.9844 21.9456 22.7455 19.94 22.7477ZM15.8138 13.8896C15.8138 13.695 15.8743 13.5047 15.9877 13.3428C16.101 13.1809 16.2621 13.0548 16.4506 12.9803C16.6391 12.9058 16.8465 12.8863 17.0466 12.9243C17.2467 12.9623 17.4305 13.056 17.5748 13.1937C17.7191 13.3313 17.8173 13.5067 17.8571 13.6976C17.8969 13.8885 17.8765 14.0864 17.7984 14.2663C17.7203 14.4461 17.5881 14.5998 17.4185 14.708C17.2488 14.8161 17.0494 14.8738 16.8454 14.8738C16.5718 14.8738 16.3094 14.7701 16.116 14.5856C15.9225 14.401 15.8138 14.1506 15.8138 13.8896ZM22.0031 13.8896C22.0031 13.695 22.0636 13.5047 22.1769 13.3428C22.2903 13.1809 22.4514 13.0548 22.6399 12.9803C22.8284 12.9058 23.0358 12.8863 23.2359 12.9243C23.436 12.9623 23.6198 13.056 23.764 13.1937C23.9083 13.3313 24.0065 13.5067 24.0463 13.6976C24.0861 13.8885 24.0657 14.0864 23.9876 14.2663C23.9096 14.4461 23.7773 14.5998 23.6077 14.708C23.4381 14.8161 23.2386 14.8738 23.0346 14.8738C22.761 14.8738 22.4987 14.7701 22.3052 14.5856C22.1118 14.401 22.0031 14.1506 22.0031 13.8896ZM24.1091 19.1388C24.1998 19.2891 24.2244 19.4674 24.1777 19.6349C24.131 19.8024 24.0167 19.9455 23.8598 20.0329C23.7562 20.0928 23.6372 20.124 23.516 20.1231C23.3952 20.1253 23.276 20.0959 23.1714 20.038C23.0669 19.9802 22.9809 19.8961 22.9229 19.795C22.62 19.2961 22.185 18.8819 21.6615 18.5939C21.1379 18.306 20.5443 18.1544 19.94 18.1544C19.3357 18.1544 18.7421 18.306 18.2185 18.5939C17.695 18.8819 17.26 19.2961 16.9571 19.795C16.9161 19.8766 16.8579 19.9492 16.786 20.0083C16.7142 20.0673 16.6303 20.1116 16.5397 20.1383C16.4491 20.1649 16.3537 20.1734 16.2594 20.1632C16.1652 20.153 16.0742 20.1243 15.9922 20.0789C15.9101 20.0335 15.8388 19.9724 15.7827 19.8995C15.7266 19.8266 15.6869 19.7433 15.6661 19.655C15.6453 19.5668 15.6439 19.4753 15.6619 19.3865C15.68 19.2977 15.717 19.2133 15.7709 19.1388C16.1933 18.4405 16.801 17.8606 17.5329 17.4574C18.2647 17.0542 19.0949 16.8419 19.94 16.8419C20.7851 16.8419 21.6153 17.0542 22.3471 17.4574C23.079 17.8606 23.6867 18.4405 24.1091 19.1388Z" fill="#FF0000"/>
            </svg>
            `,
			className: 'marker_div',
			iconSize: [40, 40],
			iconAnchor: [20, 40],
		});
		return markerIcon;
	}
};
