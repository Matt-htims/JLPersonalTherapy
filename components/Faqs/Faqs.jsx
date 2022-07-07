import { useState } from 'react';
import Link from 'next/link';

//  Components
import IndivQ from './IndivQ';

function Faqs() {
	const [aOpen, setAOpen] = useState(false);

	return (
		<div className="lg:flex justify-between items-center">
			<div className="flex-none lg:w-60">
				<Link href="/faqs">
					<a>
						<h2 className="md:text-4xl text-3xl hover:scale-105 transition-all text-center lg:mb-0 mb-8">
							FAQs
						</h2>
					</a>
				</Link>
			</div>
			<div className="space-y-2 flex-3 flex-initial">
				<IndivQ
					question="How long is each session and how many will I need ?"
					answer="Sessions are 50 mins and we aim for them to be at the same time each week. 
					How many sessions will depend on what you are wanting to work on. We will contract to do regular reviews ( usually six weeks ), this is an opportunity to see how you feel the sessions are going and if you wish to continue.
					"
				/>
				<IndivQ
					question="What will happen when I contact you?"
					answer="We will arrange to have a short consultation to discuss what you would like to do in counselling. This will give you the opportunity to see if you are happy to work with us.
					The consultation will last approximately half an hour and is FREE with no obligation to commit at that time. 
					We will arrange how you would like to have your counselling sessions ( phone or internet platform) and arrange a convenient time that suits you.
					"
				/>
				<IndivQ
					question="What will happen in my first session?"
					answer="In the first session we will start by going through the contract together so if there is anything you don't understand we can discuss it. 
					We will then give you the time to explore why you have come to counselling. This will involve looking at any expectations you have about the counselling experience and what goals you would like to achieve as a result of the counselling.
					"
				/>
				<IndivQ
					question="How do I pay for sessions and what happens if I want to cancel?"
					answer="Sessions are £40 for individual therapy and they can be paid for via bank transfer. You will receive the information for this in your contract and will be discussed in the consultation. 
					We require payments  48 hours before the session and if you feel you need to cancel for any reason this can be done 24 hours before a session. Any later then unfortunately we can not give a refund. 
					"
				/>
				<IndivQ
					question="What happens if I miss a session?"
					answer="If you have missed a session unfortunately we can not refund any payments unless we have had 24 hours notice. 
					If you have paid for a few sessions in advance and have missed a session, we will attempt to contact you about the next session booked. If we cannot contact you for any reason then we will assume the next will go ahead as normal. If you have missed 3 sessions in a row that are paid for and we have not been able to make contact with you, we will assume you no longer wish to engage in the counselling process. This is so we can offer the next person on our waiting list the time allocated for sessions. ( although if you are paying for the sessions it is unlikely this will happen).
					"
				/>
				<IndivQ
					question="Are counselling sessions confidential?"
					answer="Yes they are. The only exceptions to that is if there are any concerns about safeguarding such as revealing you are drug trafficking, or part of a terrorist group ect. We will also have to break confidentiality if you are at risk to yourself or others or if children are at risk. 
					This can sound daunting but we would like to assure you that we DO NOT go behind your back to inform other services or professions about these matters, we will discuss what comes up and work with you to support you in getting any help you may need.
					"
				/>
				<IndivQ
					question="Do you take notes or record sessions?"
					answer="We do not take notes during our sessions or record them. If this is something you would like then we can discuss the reasons for this, but as we comply with GDPR we keep the information we have about you to a minimum and as securely as we can. 
					We respectfully ask that when working via an internet platform that you do not record anything too."
				/>
				<IndivQ
					question="What if I want to finish my counselling experience before the time we have agreed?"
					answer="Although endings are an important part of the process you can finish counselling any time you like. We do require at least 24 hours notice to make refunds. 
					If you feel you would like to end counselling all you have to do is let us know either in a session, by phone, internet platform or email.
					"
				/>
			</div>
		</div>
	);
}

export default Faqs;
