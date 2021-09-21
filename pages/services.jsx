import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

//	Components
import Quiz from '../components/Quiz';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function services() {
	const [considerationsOpen, setConsiderationsOpen] = useState(false);
	const [helpfulOpen, setHelpfulOpen] = useState(false);

	function handleConsid() {
		setConsiderationsOpen(!considerationsOpen);
	}
	function handleHelp() {
		setHelpfulOpen(!helpfulOpen);
	}

	return (
		<>
			<Head>
				<title>Our services</title>
			</Head>
			<div className="min-h-screen my-16 max-w-7xl m-auto md:px-8 px-5 leading-7">
				<h2 className="md:text-5xl text-3xl text-center">What to Expect</h2>
				<div className="md:pt-16 pt-10 pb-14">
					<h2 className="md:text-3xl text-2xl pb-8 font-semibold">
						Person Centred Therapy
					</h2>
					<h3 className="text-xl pb-6">
						You are the most qualified to know what's right for you
					</h3>
					<p className="pb-6 leading-7 text-base">
						As a therapist we facilitate and encourage self exporation in your
						experiences with life. We offer a safe non judgemental, empathic
						space for you to be completely genuine. A therapist will always
						offer their genuine self and positive regard to help you feel heard
						and understood. We will work by abiding by an ethical framework
						which is regulated by an ethical governing body to ensure your
						safety.
					</p>
					<p className="leading-7 text-base">
						Many people have experienced cognitive behavioural therapy (CBT).
						Person centred therapy does not require you to fill out lots of
						pages or do homework, although we may incorporate some CBT methods
						in our work if you feel that it will be helpful. We do not expect
						you to explore your childhood if you feel it is not relevant to the
						‘here and now’ situation you find yourself in.
					</p>
				</div>
				<Quiz />
				<div className="mt-20 mb-14 flex space-x-8 items-center">
					<div className="space-y-10">
						<h2 className="md:text-3xl text-2xl">
							Therapy via telephone and online
						</h2>
						<div className="space-y-5">
							<h3 className="text-xl">Telephone therapy</h3>
							<p>
								This can be a convenient way to do a therapy session for some as
								it allows you to be anonymous and can be done anywhere you wish.
								It is possible to pick up on how you feel by the tone of voice
								and expressions used verbally by a therapist.
							</p>
							<p>
								This can be a convenient way to do a therapy session for some as
								it allows you to be anonymous and can be done anywhere you wish.
								It is possible to pick up on how you feel by the tone of voice
								and expressions used verbally by a therapist.
							</p>
						</div>
						<div className="space-y-6">
							<h3 className="text-xl">Online: Zoom or Skype</h3>
							<p>
								This can be an alternative if you prefer to see the therapist
								and the therapist can benefit from seeing you, but can also be
								used with the webcam turned off it makes you uncomfortable being
								seen by the therapist. You have the control to do this the way
								that suits you. The advantage of being able to see each other or
								just see the counselor is it allows you to feel a connection
								with seeing who you are talking to.
							</p>
							<p>
								Many platforms use video calls but as security is so important
								to confidentiality the prefered platform is ‘Zoom’ as it is
								already encrypted. If other platforms are your prefered choice
								the security can not be guaranteed. Much like the telephone you
								will need to be aware of who can listen into your session.
							</p>
						</div>
					</div>
					<div className="flex-none w-4/12 lg:block hidden">
						<img
							className="rounded-3xl"
							src="ManPhone.png"
							alt="Man on phone"
						/>
					</div>
				</div>
				<div className="space-y-2">
					<div
						onClick={handleConsid}
						className="bg-back-dark cursor-pointer rounded-xl shadow-md p-3 pr-5 flex justify-between items-center"
					>
						<h3>Considerations for therapy online and by telephone</h3>
						{!considerationsOpen ? (
							<FiChevronDown className="flex-none" size="1.5rem" />
						) : (
							<FiChevronUp className="flex-none" size="1.5rem" />
						)}
					</div>
					<div className="overflow-hidden px-1 pb-1">
						<AnimatePresence>
							{considerationsOpen ? (
								<motion.div
									initial={{ y: -800 }}
									animate={{ y: 0 }}
									exit={{ y: -800 }}
									transition={{ ease: 'easeOut' }}
									className="p-3 space-y-5 shadow-md rounded-xl"
								>
									<div className="space-y-3">
										<p className="font-semibold">Benefits</p>
										<ul className="list-disc list-outside pl-4 font-light space-y-2">
											<li>
												Attend sessions at a time that is convenient for you.
											</li>
											<li>You choose where to have your sessions.</li>
											<li>
												You won't have to go to a specific space labelled as a
												therapy room.
											</li>
											<li>
												Correspondence does not have to be sent to an address.
											</li>
											<li>
												You choose to express your feelings the way you are more
												comfortable with.
											</li>
											<li>Reduced waiting times/lists.</li>
											<li>
												Messages/emails allow you to view what you are sending.
											</li>
											<li>Online platform will have encryption technology.</li>
											<li>You can remain anonymous if you wish.</li>
											<li>
												You can use the technology you feel most comfortable
												with.
											</li>
										</ul>
									</div>
									<div className="space-y-3">
										<p className="font-semibold">Considerations</p>
										<ul className="list-disc list-outside pl-4 font-light space-y-2">
											<li>
												Will you get more from the session if you are seen by
												the therapist.
											</li>
											<li>It is a lot easier to misinterpret messages.</li>
											<li>
												Do you have a safe space to have a session for 50
												minutes.
											</li>
											<li>
												Can anyone hear you (from the next room or window open).
											</li>
											<li>
												If there is no non-verbal communication visible things
												could be misinterpreted.
											</li>
											<li>
												Is your present situation too complex for sessions to be
												done in these ways.
											</li>
											<li>
												{' '}
												Will going to a room and seeing a therapist help any
												misunderstandings, or help you to feel focused and
												safer.
											</li>
											<li>Are you comfortable using technology.</li>
											<li>
												How will it make you feel if the technology goes wrong/
												breaks down.
											</li>
										</ul>
									</div>
								</motion.div>
							) : (
								''
							)}
						</AnimatePresence>
					</div>
					<div
						onClick={handleHelp}
						className="bg-back-dark cursor-pointer rounded-xl shadow-md p-3 pr-5 flex justify-between items-center"
					>
						<h3 className="">Helpful tips to set up a safe session space</h3>
						{!helpfulOpen ? (
							<FiChevronDown className="flex-none" size="1.5rem" />
						) : (
							<FiChevronUp className="flex-none" size="1.5rem" />
						)}
					</div>
					<div className="overflow-hidden px-1 pb-1">
						<AnimatePresence>
							{helpfulOpen ? (
								<motion.div
									initial={{ y: -800 }}
									animate={{ y: 0 }}
									exit={{ y: -800 }}
									transition={{ ease: 'easeOut' }}
									className="p-3 space-y-5 shadow-md rounded-xl"
								>
									<div className="space-y-1">
										<p className="font-semibold">Set up a specific room</p>
										<p className="pl-3 font-light">
											If it is possible set up a specific room for your session.
											If you share a house can you have a room upstairs while
											others are downstairs, or if you are in a flat could the
											other people be in another room watching a film or having
											background noise to make you feel confident they cannot
											overhear you. Maybe having headphones in the
											laptop/computer will make you feel better about not having
											what the therapist says overheard.
										</p>
									</div>
									<div className="space-y-1">
										<p className="font-semibold">Reduce Interruptions</p>
										<p className="pl-3 font-light">
											Locking doors/windows can ensure you are not interrupted
											and it is better to have phones on silent or well out of
											sight from yourself to prevent being distracted by
											messages from social media if you are not using them for
											the session.
										</p>
									</div>
									<div className="space-y-1">
										<p className="font-semibold">Leave a note on your door</p>
										<p className="pl-3 font-light">
											Some people find it helps to have a note on the door of a
											room to remind any family member or roommate that you
											cannot be disturbed for a hour.
										</p>
									</div>
									<div className="space-y-1">
										<p className="font-semibold">Have a clear space</p>
										<p className="pl-3 font-light">
											When using a webcam consider that things around you can be
											seen, some platforms allow you to blur out the background.
											Make sure you do not have any personal information in view
											if you can help it such as bills or calendar in sight even
											family pictures in the background, this can give you extra
											confidence in the security of inviting someone in your
											home using the webcam.
										</p>
									</div>
								</motion.div>
							) : (
								''
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</>
	);
}

export default services;
