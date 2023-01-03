import React from 'react';
import Head from 'next/head';

//	Components
import AboutPersonLong from '../components/About/AboutPersonLong';

function aboutus() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<div className="min-h-screen my-16 max-w-7xl m-auto md:px-8 px-3">
				<h2 className="md:text-5xl text-3xl text-center">About</h2>
				<div className="md:mt-16 mt-10 md:mb-32 mb-18 space-y-16">
					<AboutPersonLong
						image="Jen.png"
						name="Jennifer Schaub"
						title="Qualified Counsellor and Psychotherapist"
						b1="In the years before my training I have adopted many caregiving roles, including carer and learning support assistant. To me, community is everything and I do as much as possible to support my own (between being a mum and work). I currently volunteer with We Are With You (formally known as Addaction), Victims of Crime and West Country Association for Counselling."
						b2={
							<>
								I understand that counselling is a personal experience that
								needs to be tailored to my client. I feel the autonomy of the
								client should be respected at all times, as they are the most
								qualified person to know what they want from the counselling
								experience. I use my expertise to guide clients through a
								journey of exploration to know themselves better and achieve
								their desired goals. I work in the modality of{' '}
								<strong>person centred/ humanistic approach</strong>, although I
								draw upon other modalities depending on what is appropriate for
								each client.
							</>
						}
						training={
							<>
								I am trained in counselling/psychotherapy (L5), with experience
								in{' '}
								<strong>
									domestic abuse, sexual violence, addiction and suicide
									awareness.
								</strong>{' '}
								I am also able to manage any of following issues;
							</>
						}
						addTraining={[
							'Common life issues',
							'Depression',
							'Anxiety',
							'Stress',
							'Low self worth',
							'Emotional abuse',
							'Grief/ Bereavement/ Loss',
						]}
						icons={[
							{ name: 'services/Abuse.svg', label: 'Abuse' },
							{
								name: 'services/SuicideAwareness.svg',
								label: 'Suicide Awareness',
							},
							{ name: 'services/Addiction.svg', label: 'Addiction' },
						]}
						f1={
							<>
								I am <strong>DASH</strong> trained to level 3 standard, trained
								in Mental health first aid as well as being a member of the{' '}
								<strong>BCAP</strong> and <strong>WAC</strong>. I currently work
								as a learning support assistant for Adult Education and will be
								training as a tutor for level 2 counselling.
							</>
						}
						f2="If you feel you would like to work with me please contact me at the email and telephone number provided in the ‘contact us button’ - this can also be found with the green icon on the top right hand corner of each page."
					/>
				</div>
			</div>
		</>
	);
}

export default aboutus;
