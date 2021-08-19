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
		<div>
			<img src={image} alt={name} />
			<div>
				<div>
					<div>
						<h2>{name}</h2>
						<h3>{title}</h3>
					</div>
					<div className="icons">
						{icons.map(icon => (
							<div>
								<img src={icon.name} label={icon.alt} />
								<p>{icon.label}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<p>{b1}</p>
					<p>{b2}</p>
				</div>
				<div>
					<p>{training}</p>
					<ul>
						{addTraining.map(add => (
							<li key={add}>{add}</li>
						))}
					</ul>
				</div>
				<div>
					<p>{f1}</p>
					<p>{f2}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPersonLong;
