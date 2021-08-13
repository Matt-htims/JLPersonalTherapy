import React from 'react';

//	Components
import Quiz from '../components/Quiz';

function services() {
	return (
		<div className="min-h-screen my-12 max-w-7xl m-auto md:px-8 px-5">
			<h1 className="md:text-5xl text-3xl text-center">What to Expect</h1>
			<div className="md:pt-16 pt-10 pb-14">
				<h2 className="md:text-3xl text-2xl pb-8 font-semibold">
					Person Centred Therapy
				</h2>
				<h3 className="text-xl pb-6">
					You are the most qualified to know what's right for you
				</h3>
				<p className="pb-6 leading-7 text-base">
					As a therapist we facilitate and encourage self exporation in your
					experiences with life. We offer a safe non judgemental, empathic space
					for you to be completely genuine. A therapist will always offer their
					genuine self and positive regard to help you feel heard and
					understood. We will work by abiding by an ethical framework which is
					regulated by an ethical governing body to ensure your safety.
				</p>
				<p className="leading-7 text-base">
					Many people have experienced cognitive behavioural therapy (CBT).
					Person centred therapy does not require you to fill out lots of pages
					or do homework, although we may incorporate some CBT methods in our
					work if you feel that it will be helpful. We do not expect you to
					explore your childhood if you feel it is not relevant to the ‘here and
					now’ situation you find yourself in.
				</p>
			</div>
			<Quiz />
			<div className="my-14">
				<div>
					<h2>Therapy via telephone and online</h2>
					<div>
						<h3>Telephone therapy</h3>
						<p>
							This can be a convenient way to do a therapy session for some as
							it allows you to be anonymous and can be done anywhere you wish.
							It is possible to pick up on how you feel by the tone of voice and
							expressions used verbally by a therapist.
						</p>
						<p>
							This can be a convenient way to do a therapy session for some as
							it allows you to be anonymous and can be done anywhere you wish.
							It is possible to pick up on how you feel by the tone of voice and
							expressions used verbally by a therapist.
						</p>
					</div>
					<div>
						<h3>Online: Zoom or Skype</h3>
						<p>
							This can be an alternative if you prefer to see the therapist and
							the therapist can benefit from seeing you, but can also be used
							with the webcam turned off it makes you uncomfortable being seen
							by the therapist. You have the control to do this the way that
							suits you. The advantage of being able to see each other or just
							see the counselor is it allows you to feel a connection with
							seeing who you are talking to.
						</p>
						<p>
							Many platforms use video calls but as security is so important to
							confidentiality the prefered platform is ‘Zoom’ as it is already
							encrypted. If other platforms are your prefered choice the
							security can not be guaranteed. Much like the telephone you will
							need to be aware of who can listen into your session.
						</p>
					</div>
				</div>
				<img src="" alt="" />
			</div>
		</div>
	);
}

export default services;
