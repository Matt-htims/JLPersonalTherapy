import React from 'react';
import Link from 'next/link';

const IndivEmergencyContacts = ({
	name,
	number,
	numbertwo,
	description,
	email,
	website,
}) => {
	return (
		<div className="flex justify-between">
			<div className="text space-y-1 text-sm mr-16">
				<h4 className="md:text-lg text-base font-bold">{name}</h4>
				<p>{description}</p>
				{email ? (
					<div className="flex space-x-1">
						<p>Email: </p>
						<Link href={`mailto:${email}`}>
							<a>{email}</a>
						</Link>
					</div>
				) : (
					''
				)}
				{website ? (
					<div className="flex space-x-1">
						<p>Website: </p>
						<Link href={`https://${website}`}>
							<a>{website}</a>
						</Link>
					</div>
				) : (
					''
				)}
			</div>
			<div className="number flex flex-col items-end text-lg mt-6 flex-none">
				{number ? (
					<div className="hover:scale-105 transition-all">
						<Link href={`tel:${number}`}>
							<a>{number}</a>
						</Link>
					</div>
				) : (
					''
				)}
				{numbertwo ? (
					<div className="flex flex-row space-x-1 hover:scale-105 transition-all">
						{name === 'Mind' ? <p>Text:</p> : <p>or</p>}
						<Link href={`tel:${numbertwo}`}>
							<a>{numbertwo}</a>
						</Link>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default IndivEmergencyContacts;
