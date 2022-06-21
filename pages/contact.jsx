import React from 'react';
import Head from 'next/head';

//	Components
import ContactCard from '../components/Contact/ContactCard';
import EmergencyContacts from '../components/EmergencyContacts/EmergencyContacts';

function contact() {
	return (
		<>
			<Head>
				<title>Contact us</title>
			</Head>
			<div className="min-h-screen mb-10">
				<div className="space-y-8 text-center md:py-16 py-8 px-2">
					<h2 className="md:text-5xl text-3xl">Get in touch!</h2>
					<p className="md:text-xl text-base text font-light">
						Contact us with any questions about our services, or to book a
						session.
					</p>
				</div>
				<ContactCard />
				<EmergencyContacts />
			</div>
		</>
	);
}

export default contact;
