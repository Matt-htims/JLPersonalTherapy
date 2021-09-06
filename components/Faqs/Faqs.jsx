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
					<h2 className="md:text-4xl text-3xl hover:scale-105 transition-all lg:text-left text-center lg:mb-0 mb-8">
						FAQs
					</h2>
				</a>
			</Link>
			<div className="space-y-6">
				<IndivQ
					question="How long are the sessions?"
					answer="Answer goes here..."
				/>
				<IndivQ
					question="Are counselling sessions confidential?"
					answer="Answer goes here..."
				/>
				<IndivQ
					question="How many sessions will I need?"
					answer="Answer goes here..."
				/>
				<IndivQ
					question="What happens in my first session?"
					answer="Answer goes here..."
				/>
				<IndivQ
					question="How much does a session Cost?"
					answer="Answer goes here..."
				/>
				<IndivQ
					question="What happens if I cancel a session with you?"
					answer="Answer goes here..."
				/>
			</div>
		</div>
	);
}

export default Faqs;
