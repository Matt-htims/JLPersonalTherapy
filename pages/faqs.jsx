import React from 'react';
import Head from 'next/head';

//	Components
import QnA from '../components/Faqs/QnA';

function faqs() {
	return (
		<>
			<Head>
				<title>FAQs</title>
			</Head>
			<div className="min-h-screen my-16 max-w-7xl m-auto md:px-8 px-5 space-y-16">
				<h2 className="md:text-5xl text-3xl text-center">
					Frequently asked questions
				</h2>
				<div>
					<QnA
						q="How long is each session and how many will I need ?"
						a="Sessions are 50 mins and we aim for them to be at the same time each week. 
					How many sessions will depend on what you are wanting to work on. We will contract to do regular reviews (usually six weeks), this is an opportunity to see how you feel the sessions are going and if you wish to continue.
					"
					/>
					<QnA
						q="What will happen when I contact you?"
						a={
							<p>
								We will arrange to have a short consultation to discuss what you
								would like to do in counselling. This will give you the
								opportunity to see if you are happy to work with us. The
								consultation will last approximately half an hour and is{' '}
								<strong>FREE</strong> with no obligation to commit at that time.
								<br />
								We will arrange how you would like to have your counselling
								sessions (phone or internet platform) and arrange a convenient
								time that suits you.
							</p>
						}
					/>
					<QnA
						q="What will happen in my first session?"
						a={
							<p>
								In the first session we will start by going through the contract
								together so if there is anything you don't understand we can
								discuss it.
								<br /> We will then give you the time to explore why you have
								come to counselling. This will involve looking at any
								expectations you have about the counselling experience and what
								goals you would like to achieve as a result of the counselling.
							</p>
						}
					/>
					<QnA
						q="How do I pay for sessions and what happens if I want to cancel?"
						a={
							<p>
								Sessions are £40 for individual therapy and they can be paid for
								via bank transfer. You will receive the information for this in
								your contract and will be discussed in the consultation.
								<br /> We require payments 48 hours before the session and if
								you feel you need to cancel for any reason this can be done 24
								hours before a session. Any later then unfortunately we can not
								give a refund.
							</p>
						}
					/>
					<QnA
						q="What happens if I miss a session?"
						a={
							<p>
								If you have missed a session unfortunately we can not refund any
								payments unless we have had 24 hours notice.
								<br />
								If you have paid for a few sessions in advance and have missed a
								session, we will attempt to contact you about the next session
								booked. If we cannot contact you for any reason then we will
								assume the next will go ahead as normal. If you have missed 3
								sessions in a row that are paid for and we have not been able to
								make contact with you, we will assume you no longer wish to
								engage in the counselling process. This is so we can offer the
								next person on our waiting list the time allocated for sessions.
								( although if you are paying for the sessions it is unlikely
								this will happen).
							</p>
						}
					/>
					<QnA
						q="Are counselling sessions confidential?"
						a={
							<p>
								Yes they are. The only exceptions to that is if there are any
								concerns about safeguarding such as revealing you are drug
								trafficking, or part of a terrorist group ect. We will also have
								to break confidentiality if you are at risk to yourself or
								others or if children are at risk.
								<br />
								This can sound daunting but we would like to assure you that we{' '}
								<strong>DO NOT</strong> go behind your back to inform other
								services or professions about these matters, we will discuss
								what comes up and work with you to support you in getting any
								help you may need.
							</p>
						}
					/>
					<QnA
						q="Do you take notes or record sessions?"
						a={
							<p>
								We do not take notes during our sessions or record them. If this
								is something you would like then we can discuss the reasons for
								this, but as we comply with GDPR we keep the information we have
								about you to a minimum and as securely as we can.
								<br />
								We respectfully ask that when working via an internet platform
								that you do not record anything too.
							</p>
						}
					/>
					<QnA
						q="What if I want to finish my counselling experience before the time we have agreed?"
						a="Although endings are an important part of the process you can finish counselling any time you like. We do require at least 24 hours notice to make refunds. 
					If you feel you would like to end counselling all you have to do is let us know either in a session, by phone, internet platform or email.
					"
						last={true}
					/>
				</div>
			</div>
		</>
	);
}

export default faqs;
