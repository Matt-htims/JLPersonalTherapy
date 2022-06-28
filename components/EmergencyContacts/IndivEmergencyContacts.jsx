import React from 'react';
import Link from 'next/link';

// Icons
import { FiGlobe, FiMail } from 'react-icons/fi';

const IndivEmergencyContacts = ({
	name,
	number,
	numbertwo,
	description,
	email,
	website,
}) => {
	return (
		<div>
			<h4 className="md:text-lg text-base font-bold">{name}</h4>
			<div className="md:flex flex-row-reverse justify-between">
				<div className="number md:flex flex-reverse flex-col items-end text-lg flex-none">
					{number ? (
						<div className="hover:scale-105 transition-all max-w-max">
							<Link href={`tel:${number}`}>
								<a>{number}</a>
							</Link>
						</div>
					) : (
						''
					)}
					{numbertwo ? (
						<div className="flex flex-row space-x-1 hover:scale-105 transition-all max-w-max">
							{name === 'Mind' ? <p>Text:</p> : <p>or</p>}
							<Link href={`tel:${numbertwo}`}>
								<a>{numbertwo}</a>
							</Link>
						</div>
					) : (
						''
					)}
				</div>
				<div className="text space-y-1 text-sm md:mr-16">
					<p>{description}</p>
					{email ? (
						<div className="flex space-x-1">
							<div className="flex items-center space-x-1">
								<FiMail />
								<p>:</p>
							</div>
							<Link href={`mailto:${email}`}>
								<a>{email}</a>
							</Link>
						</div>
					) : (
						''
					)}
					{website ? (
						<div className="flex space-x-1">
							<div className="flex items-center space-x-1">
								<FiGlobe />
								<p>:</p>
							</div>
							<Link href={`https://${website}`}>
								<a>{website}</a>
							</Link>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default IndivEmergencyContacts;
