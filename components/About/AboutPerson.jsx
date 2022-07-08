import React from 'react';

function AboutPerson({ name, text, image }) {
	return (
		<div className="lg:flex lg:space-x-10 lg:space-y-0 space-y-2 items-center">
			<div className="lg:w-30 lg:h-30 w-36 h-36 rounded-full lg:m-0 m-auto overflow-hidden flex justify-center items-center flex-none">
				<img src={image} alt={`Image of ${name}`} />
			</div>
			<div className="flex flex-col md:space-y-4 space-y-2">
				<h5 className="md:text-2xl text-xl">{name}</h5>
				<div className="md:text-base text-sm space-y-4 text-justify">
					{text}
				</div>
			</div>
		</div>
	);
}

export default AboutPerson;
