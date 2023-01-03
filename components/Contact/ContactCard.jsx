import React from 'react';

//  Components
import ContactSection from './ContactSection';

//  Icons
import { FiPhone, FiMail, FiFacebook } from 'react-icons/fi';

import info from '../../helperData/info';

function ContactCard() {
	const { jen } = info;
	return (
		<div className="bg-back-dark rounded-2xl shadow-md md:w-140 w-11/12 m-auto md:py-10 p-4 md:space-y-16 space-y-8">
			<div className="md:flex items-center md:space-x-16 md:space-y-0 space-y-4">
				<FiPhone className="stroke-1 flex-none md:h-16 h-10" size="3rem" />
				<div className="space-y-6">
					<ContactSection value={jen.number} link={`tel:${jen.number}`} />
				</div>
			</div>
			<div className="md:flex items-center md:space-x-16 md:space-y-0 space-y-4">
				<FiMail className="stroke-1 flex-none md:h-16 h-10" size="3rem" />
				<div className="space-y-6">
					<ContactSection value={jen.email} link={`mailto:${jen.email}`} />
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
