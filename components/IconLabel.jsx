import Link from 'next/link';

import { IoAdd } from 'react-icons/io5';

function IconLabel({ text, image, link }) {
	if (link) {
		return (
			<div className="">
				<div className="flex flex-col justify-center items-center space-y-5 lg:w-28 w-16 text-center">
					<IoAdd className="stroke-0.5 text-black/70 xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 w-16 h-16" />
					<p className="md:text-base text-xs">{text}</p>
				</div>
			</div>
		);
	}
	return (
		<div className="flex flex-col justify-center items-center space-y-5 lg:w-28 w-16 text-center">
			<img
				className="xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 w-16 h-16"
				src={image}
				alt={text}
			/>
			<p className="md:text-base text-xs">{text}</p>
		</div>
	);
}

export default IconLabel;
