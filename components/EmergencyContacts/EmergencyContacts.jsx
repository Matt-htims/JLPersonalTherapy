import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Components
import IndivEmergencyContacts from './IndivEmergencyContacts';

const EmergencyContacts = () => {
	const [emergencyContactsOpen, setEmergencyContactsOpen] = useState(false);

	function handleOpen() {
		setEmergencyContactsOpen(!emergencyContactsOpen);
	}
	return (
		<div className="md:w-140 w-11/12 m-auto pt-8">
			<div
				onClick={handleOpen}
				className="bg-back-dark cursor-pointer rounded-xl shadow-md py-4 px-6 flex justify-between items-center"
			>
				<h3 className="md:text-3xl text-xl font-light">Emergency Contacts</h3>
				{!emergencyContactsOpen ? (
					<FiChevronDown className="flex-none" size="1.5rem" />
				) : (
					<FiChevronUp className="flex-none" size="1.5rem" />
				)}
			</div>
			<div className="overflow-hidden px-2 pb-1">
				<AnimatePresence>
					{emergencyContactsOpen ? (
						<motion.div
							initial={{ y: -800 }}
							animate={{ y: 0 }}
							exit={{ y: -800 }}
							transition={{ ease: 'easeOut' }}
							className="p-3 space-y-5 shadow-md rounded-xl"
						>
							<div className="space-y-5 py-4">
								<IndivEmergencyContacts
									name="Values Lives"
									number="0800 2606759"
									description="Booking line for 24hr mental health crisis support"
								/>
								<IndivEmergencyContacts
									name="NHS 24hr"
									number="08000 385300"
									description="Booking line for 24hr mental health crisis support"
								/>
								<IndivEmergencyContacts
									name="The Samaritans"
									number="116 123"
									numbertwo="08457 90 90 90"
									description="Confidential support 24/7 for people in distress or despair"
									email="jo@samaritans.org"
									website="www.samaritans.org"
								/>
								<IndivEmergencyContacts
									name="Calm"
									number="0800 585858"
									description="Male suicide support 5-midnight"
								/>
								<IndivEmergencyContacts
									name="Papyrus"
									number="0800 4684141"
									description="UK charity to address auicidality for children and young adults 9-midnight"
									website="www.papyrus-uk.org"
								/>
								<IndivEmergencyContacts
									name="National Domestic violence helpline"
									number="0808 2000 247"
									description="Domestic violence helpline open 24/7"
								/>
								<IndivEmergencyContacts
									name="First Light Cornwall"
									number="03007774777"
									description="Domestic abuse and sexual violence recovery service"
								/>
								<IndivEmergencyContacts
									name="LGBTQ+"
									number="0800 999 5428"
									description="Domestic abuse helpline"
								/>
								<IndivEmergencyContacts
									name="Men's Advice Line"
									number="0808 801 0327"
									description="Domestic abuse helpline for men"
								/>
								<IndivEmergencyContacts
									name="Befrienders Worldwide"
									description="Emotional support to prevent suicide"
									website="www.befrienders.org"
								/>
								<IndivEmergencyContacts
									name="Mind"
									number="0200 123 3393"
									numbertwo="86463"
									description="General mental health advice and information"
								/>
								<IndivEmergencyContacts
									name="SARC"
									number="0300 303 4626"
									description="Sexual assualt referal centre. Supports immediate trauma, gives forensics medical examination and tests for STI + pregnancy. Holds evidence for when you are ready to go to the police in your own time - 24/7"
								/>
							</div>
						</motion.div>
					) : (
						''
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default EmergencyContacts;
