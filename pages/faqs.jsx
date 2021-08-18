import React from 'react';

//	Components
import QnA from '../components/Faqs/QnA';

function faqs() {
	return (
		<div className="min-h-screen my-16 max-w-7xl m-auto md:px-8 px-5 space-y-16">
			<h1 className="md:text-5xl text-3xl text-center">FAQs</h1>
			<div>
				<QnA q="How long are the sessions?" a="50 minutes" />
				<QnA q="Are counselling sessions confidential?" />
				<QnA q="How many sessions will I need?" />
				<QnA q="What happens in my first session?" />
				<QnA q="How much does a session Cost?" />
				<QnA q="What happens if I cancel a session with you?" />
			</div>
		</div>
	);
}

export default faqs;
