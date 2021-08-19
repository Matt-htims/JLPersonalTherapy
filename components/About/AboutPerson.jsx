import React from 'react';

function AboutPerson({ name, text, image }) {
	return (
		<div className="md:flex md:space-x-10 md:space-x-4 md:space-y-0 space-y-8 items-center">
			<img
				className="md:w-36 md:h-36 w-36 h-36 rounded-full md:m-0 m-auto"
				src={image}
				alt={`Image of ${name}`}
			/>
			<div className="flex flex-col md:space-y-4 space-y-2">
				<h5 className="md:text-2xl text-xl">{name}</h5>
				<p className="md:text-base text-sm">{text}</p>
			</div>
		</div>
	);
}

export default AboutPerson;
