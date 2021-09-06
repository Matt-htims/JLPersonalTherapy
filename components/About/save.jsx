import React from 'react';

const AboutPersonLong = ({
	name,
	image,
	title,
	b1,
	b2,
	training,
	addTraining,
	icons,
	f1,
	f2,
}) => {
	return (
		<div className="lg:flex lg:space-x-12 lg:space-y-0 space-y-8 items-start">
			<img
				className="lg:w-36 lg:h-36 md:w-44 md:h-44 w-36 h-36 rounded-full lg:m-0 m-auto"
				src={image}
				alt={name}
			/>
			<div className="space-y-8">
				<div className="flex md:flex-row md:text-left text-center flex-col md:space-y-0 space-y-6 justify-between items-center">
					<div className="space-y-3">
						<h2 className="md:text-3xl font-semibold text-xl">{name}</h2>
						<h3 className="md:text-base text-sm font-thin">{title}</h3>
					</div>
					<div className="icons flex space-x-10">
						{icons.map(icon => (
							<div className="flex flex-col items-center space-y-2">
								<img className="w-14" src={icon.name} label={icon.alt} />
								<p className="text-center text-xs">{icon.label}</p>
							</div>
						))}
					</div>
				</div>
				<div className="space-y-5 leading-relaxed md:text-base md:text-justify">
					<p>{b1}</p>
					<p>{b2}</p>
				</div>
				<div className="space-y-5 leading-relaxed md:text-base md:text-justify">
					<p>{training}</p>

					<ul className="list-disc pl-10 space-y-1">
						{addTraining.map(add => (
							<li key={add}>{add}</li>
						))}
					</ul>
				</div>
				<div className="space-y-5 leading-relaxed md:text-base md:text-justify">
					<p>{f1}</p>
					<p>{f2}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPersonLong;
