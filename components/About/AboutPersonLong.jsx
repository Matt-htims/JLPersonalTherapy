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
		<div className="lg:flex lg:space-x-12 lg:space-y-0 space-y-8 items-start  rounded-2xl overflow-hidden shadow">
			<div className="space-y-10">
				<div className="lg:flex lg:space-x-8 lg:space-y-0 space-y-8 bg-back-dark md:p-8 px-4 py-8">
					<div className="w-36 h-36 rounded-full lg:m-0 m-auto overflow-hidden flex justify-center items-center flex-none">
						<img src={image} alt={name} />
					</div>
					<div className="flex lg:flex-row w-full lg:text-left text-center flex-col lg:space-y-0 space-y-6 justify-between items-center">
						<div className="space-y-3">
							<h2 className="md:text-3xl font-semibold text-xl">{name}</h2>
							<h3 className="md:text-base text-sm font-thin">{title}</h3>
						</div>
						<div className="icons flex lg:space-x-10 md:space-x-28 space-x-5">
							{icons.map(icon => (
								<div className="flex flex-col items-center space-y-2">
									<img
										className="w-14"
										src={icon.name}
										label={icon.alt}
										alt={icon.alt}
									/>
									<p className="text-center text-xs">{icon.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="space-y-10 md:px-8 px-4 pb-8">
					<div className="space-y-10 leading-relaxed md:text-base  md:text-justify">
						<p>{b1}</p>
						<p>{b2}</p>
					</div>
					<div className="space-y-10 leading-relaxed md:text-base  md:text-justify">
						<p>{training}</p>

						<ul className="list-disc pl-10 space-y-1 md:grid grid-cols-2">
							{addTraining.map(add => (
								<li key={add}>{add}</li>
							))}
						</ul>
					</div>
					<div className="space-y-10 leading-relaxed md:text-base  md:text-justify">
						<p>{f1}</p>
						<p>{f2}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPersonLong;
