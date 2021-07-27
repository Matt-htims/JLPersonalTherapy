import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';

function IconLabel({ text, image, link }) {
	if (link) {
		return (
			<div className="">
				<Link href={link}>
					<a className="flex flex-col justify-center items-center space-y-5 lg:w-28 w-16 text-center">
						<FiArrowRight className="stroke-0.5 text-textGreen-light hover:scale-110 transition-all xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 w-16 h-16" />
						<p className="md:text-base text-xs">{text}</p>
					</a>
				</Link>
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
