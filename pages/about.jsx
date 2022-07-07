import React from 'react';
import Head from 'next/head';

//	Components
import AboutPersonLong from '../components/About/AboutPersonLong';

function aboutus() {
	return (
		<>
			<Head>
				<title>About us</title>
			</Head>
			<div className="min-h-screen my-16 max-w-7xl m-auto md:px-8 px-3">
				<h2 className="md:text-5xl text-3xl text-center">About us</h2>
				<div className="md:mt-16 mt-10 md:mb-32 mb-18 space-y-16">
					<AboutPersonLong
						image="Help.png"
						name="Jennifer Schaub"
						title="Qualified Counsellor and Psychotherapist"
						b1="In the years before my training I have adopted many caregiving roles, including carer and learning support assistant. To me, community is everything and I do as much as possible to support my own (between being a mum and work). I currently volunteer with We Are With You (formally known as Addaction), True Butterflies and West Country Association for Counselling."
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
					<AboutPersonLong
						image="Lorna.png"
						name="Lorna Sandry"
						title="Qualified Counsellor and Psychotherapist"
						b1="I feel privileged to work with individuals helping them make sense of their world. I pride myself on my ability to listen, and truly enjoy my role working with people on their journey of self-discovery. If you are experiencing distressing or unpleasant thoughts I am here to help."
						b2={
							<>
								The sentiment ‘emotional well-being is just as important as
								breathing’ resonates with how I practice during sessions.
								Understanding oneself is helpful in coping with life’s daily
								disappointments and struggles, along with the highs. My role is
								helping you to re-discover your true self. Psychologist Abraham
								Maslow once said ‘In any given moment, we have two options: to
								step forward into growth or step back into safety’. I want to
								help you to empower yourself and become who you truly are.{' '}
								<br />
								<br />
								Being Cornish, I have witnessed first hand the negative impact
								of isolation and the need for diversity which has adversely
								affected various sections of traditional Cornish rural life,
								particularly the farming community. I am aware that my skills
								are relevant in all areas of Society.
							</>
						}
						training={
							<>
								I have trained in{' '}
								<strong>
									domestic abuse and sexual violence (L1 &amp; 2) and also
									suicide awareness.
								</strong>{' '}
								Most of my experience is in{' '}
								<strong>bereavement/grief/loss and addiction</strong> related
								issues, as I also work with Cruse Bereavement and We are With
								You on a voluntary basis. These areas of work include:
							</>
						}
						addTraining={[
							'Common life issues',
							'Self Harm',
							'Anxiety',
							'Domestic Violence',
							'Low self worth',
							'Child Abuse',
							'Depression',
							'Grief',
							'Stress',
							'Loss, divorce, job loss etc',
							'Emotional Abuse',
							'Family Issues',
						]}
						icons={[
							{ name: 'services/Abuse.svg', label: 'Abuse' },
							{
								name: 'services/SuicideAwareness.svg',
								label: 'Suicide Awareness',
							},
							{ name: 'services/Bereavement.svg', label: 'Bereavement' },
						]}
						f1="I started my counselling journey over 10 years ago - as a client, to help with a challenging family event. I know how helpful the process can be, I also appreciate it can be a difficult decision to talk to a counsellor. A recent client felt very anxious about talking to me, and has subsequently expressed how comfortable and at ease she felt during our sessions."
						f2="If you feel you would like to work with me please make contact by email, text or telephone, details are can be found by pressing ‘contact us’ button - which is the green icon on the top right hand corner of each page."
					/>
				</div>
			</div>
		</>
	);
}

export default aboutus;
