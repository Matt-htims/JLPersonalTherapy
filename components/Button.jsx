import Link from 'next/link';

function Button({ text, link }) {
	return (
		<>
			<Link href={link}>
				<a>
					<button className="bg-ctaGreen hover:bg-ctaGreen-light hover:text-textGreen w-max px-8 transition-all py-4 mb-5 rounded-xl text-textGreen-lightest md:text-lg text-base drop-shadow-lg">
						{text}
					</button>
				</a>
			</Link>
		</>
	);
}

export default Button;
