import React from 'react';

//  Components
import ContactSection from './ContactSection';

//  Icons
import { FiPhone, FiMail, FiFacebook } from 'react-icons/fi';

function ContactCard() {
	return (
		<div className="bg-back-dark rounded-2xl shadow-md md:w-140 w-11/12 m-auto md:p-10 md:p-4 p-3 space-y-16">
			<div className="md:flex md:space-x-16 md:space-y-0 space-y-4">
				<FiPhone className="stroke-1 flex-none md:h-16 h-10" size="3rem" />
				<div className="space-y-6">
					<ContactSection
						name="Jennifer Schaub"
						value="+44 7710 441400"
						link="tel:+447710441400"
					/>
					<ContactSection
						name="Lorna Sandry"
						value="+44 7789 456200"
						link="tel:+447710441400"
					/>
				</div>
			</div>
			<div className="md:flex md:space-x-16 md:space-y-0 space-y-4">
				<FiMail className="stroke-1 flex-none md:h-16 h-10" size="3rem" />
				<div className="space-y-6">
					<ContactSection
						name="Jennifer Schaub"
						value="jennifer@jlpersonaltherapy.co.uk"
						link="mailto:jennifer@jlpersonaltherapy.co.uk"
					/>
					<ContactSection
						name="Lorna Sandry"
						value="lorna@jlpersonaltherapy.co.uk"
						link="mailto:lorna@jlpersonaltherapy.co.uk"
					/>
				</div>
			</div>
			<div className="md:flex md:space-x-16 items-end flex-none md:space-y-0 space-y-4">
				<FiFacebook className="stroke-1 flex-none md:h-16 h-10" size="3rem" />
				<p className="md:text-3xl text-xl tracking-widest font-light hover:scale-105 transition-all">
					J&amp;L Counselling
				</p>
			</div>
		</div>
	);
}

export default ContactCard;
