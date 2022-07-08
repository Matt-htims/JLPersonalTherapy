import React from 'react';
import Head from 'next/head';

// Components
import TextBlock from '../components/Agreements/TextBlock';

function agreements() {
	return (
		<>
			<Head>
				<title>Agreements</title>
			</Head>
			<div className="min-h-screen my-16 max-w-7xl m-auto md:px-8 px-5">
				<h2 className="md:text-5xl text-3xl text-center md:mb-14 mb-8">
					Agreements
				</h2>
				<div className="space-y-6">
					<TextBlock
						title="Emails"
						content={
							<p>
								The content of emails received from you are not communicated to
								a third party. My email address is encrypted and to the best of
								my knowledge my phone line is secure. Security of information is
								of utmost importance and we will appreciate consideration of the
								technology you prefer to use. we would like you to feel safe and
								secure concerning all correspondence between us. With this in
								mind we would like to share a free and secure email provider
								with you:{' '}
								<a
									className="hover:underline text-textGreen-light"
									href="https://www.hushmail.com/"
								>
									www.hushmail.com
								</a>
								. It is your choice and not a mandatory requirement, as we are
								not responsible for any outgoing providers communicating to
								third parties.
							</p>
						}
					/>
					<TextBlock
						title="Online platforms and telephone contact"
						content={
							<>
								<p>
									Our preferred online platform is Zoom, which is encrypted and
									can be used at no additional cost. Skype is another option.
									Both platforms require that you have an email address and we
									cannot guarantee or be held responsible concerning software
									security. We would suggest that you do not reveal your full
									name or any personal details such as address etc, whilst we
									are engaged in online appointments as this helps maintain the
									privacy of your sessions.
								</p>
								<p>
									It is your choice whether you wish to have telephone or online
									support.
								</p>
								<p>
									Please take the time to read through the guidance for setting
									yourself up safely ensuring privacy and security of your
									online and telephone communication with us. The guidance may
									be found at the bottom of the Our services page.
								</p>
							</>
						}
					/>
					<TextBlock
						title="Regulation"
						content={
							<>
								<p>
									We attend regular supervision (as part of BACP requirement)
									and we might bring aspects of our counselling session to
									supervision which helps ensure that we are working within our
									level of proficiency and to the best of our ability, thus
									ensuring that we are providing the best service to you. Be
									assured that no names or any other personal information is
									revealed during supervision.
								</p>
								<p>
									We are legally bound to make disclosures to the Police and
									relevant Authorities should you reveal any criminal acts such
									as terriorism, drug trafficking, money laundering etc. If we
									thought you are at risk to yourself or others we would also
									have to involve the Police and other relevant Authorities. We
									will try to involve you in the process ensuring you are safe
									and have the best support possible. If at any point during
									counselling you are in need of emergency support, we would
									request consent to contact your GP, or recommend alternative
									avenues of support other than counselling.
								</p>
							</>
						}
					/>
					<TextBlock
						title="Data Protection"
						content={
							<p>
								All personal information will be stored securely offline, such
								as name, address, email etc. We are required to hold these for 5
								years when they will be destroyed by shredding. We are
								registered with ICO for data protection and abide by the
								regulations imposed by their procedures. We can provide our
								registration numbers on request. Please refer to the Data
								Protection Act (1998) for more information.
							</p>
						}
					/>
				</div>
			</div>
		</>
	);
}

export default agreements;
