import { useState } from 'react';
import Link from 'next/link';

//  Components
import IndivQ from './IndivQ';

function Faqs() {
	const [aOpen, setAOpen] = useState(false);

	return (
		<div className="lg:flex justify-around items-center">
			<Link href="/faqs">
				<a>
					<h2 className="text-4xl hover:scale-105 transition-all lg:text-left text-center">
						FAQs
					</h2>
				</a>
			</Link>
			<div className="space-y-6">
				<IndivQ question="How long are the sessions?" answer="Bout 1 hour" />
				<IndivQ
					question="Are counselling sessions confidential?"
					answer="Yep"
				/>
				<IndivQ question="How many sessions will I need?" answer="Maybe 12" />
				<IndivQ question="What happens in my first session?" answer="We talk" />
				<IndivQ question="How much does a session Cost?" answer="40 gbp" />
				<IndivQ
					question="What happens if I cancel a session with you?"
					answer="If before 48 hours then no worries g but otherwise yaint getting this green back"
				/>
			</div>
		</div>
	);
}

export default Faqs;
