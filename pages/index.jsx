//	Components
import Button from '../components/Button';
import IconLabel from '../components/IconLabel';
import AboutPerson from '../components/About/AboutPerson';
import Faqs from '../components/Faqs/Faqs';

export default function Home() {
	return (
		<div className="min-h-screen w-full">
			{/* Top section with cta main header and image */}
			<div className="top bg-gradient-to-b from-back to-black/20">
				<div className="flex lg:flex-row flex-col-reverse max-w-7xl m-auto md:px-8 px-5 pt-5 relative lg:h-100">
					<div className="flex flex-col justify-around lg:w-5/12 md:w-9/12 w-12/12 lg:m-0 m-auto lg:text-left h-64 text-center lg:pr-8 lg:py-6 pt-5 h-full lg:space-y-0 md:space-y-10 space-y-8">
						<p className="xl:text-6xl md:text-5xl text-3xl font-semibold text-textGreen-dark">
							Help us help you
						</p>
						<div className="space-y-2">
							<p className="md:text-xl text-base font-light">
								Thinking of embarking on a journey of self discovery, or looking
								for some support?
							</p>
							<p className=" md:text-xl text-base font-light">
								We can offer you our services from qualified counsellors in the
								comfort of your home, starting from{' '}
								<strong>£50 a session</strong>
							</p>
						</div>
						<div className="flex justify-center pb-6">
							<Button text="Contact Us" link="/contact" cta={true} />
						</div>
					</div>
					<img
						className="lg:w-6/12 lg:absolute lg:right-8 rounded-3xl max-h-128 lg:m-0 m-auto drop-shadow"
						src="Hands.png"
						alt="Person holding up another persons hand"
					/>
				</div>
			</div>
			{/* Services section with icons of common issued helped with */}
			<div className="help max-w-7xl m-auto md:px-8 px-5 lg:mt-36 md:mt-20 mt-10 md:pb-0 pb-10">
				<div className="flex justify-between items-start">
					<h3 className="md:text-3xl text-2xl flex-none lg:mr-20 md:mr-10">
						We can help you with...
					</h3>
					<p className="lg:text-lg text-sm md:block hidden">
						We are experienced counsellors able to offer a large variety of
						services/help with a large variety of issues.
					</p>
				</div>
				<div className="icons md:flex grid grid-cols-3 gap-12 justify-items-center justify-around items-start md:mt-20 mt-10">
					<IconLabel image="services/Anxiety.svg" text="Anxiety" />
					<IconLabel image="services/Depression.svg" text="Depression" />
					<IconLabel image="services/Abuse.svg" text="Abuse" />
					<IconLabel image="services/Addiction.svg" text="Addiction" />
					<IconLabel image="services/Bereavement.svg" text="Bereavement" />
					<IconLabel text="And more" link="/services" />
				</div>
			</div>
			{/* What is Counselling? */}
			<div className="bg-back-dark md:mt-20 mt:10 pb-10">
				<div className="max-w-7xl m-auto md:px-8 px-5 pt-5">
					<h2 className="text-center md:text-4xl text-3xl my-10 lg:mb-16 mb-10">
						What is Counselling?
					</h2>
					<div className="flex lg:flex-row flex-col-reverse">
						<div className="text flex flex-col justify-around lg:mr-14 space-y-8 text-justify">
							<div className="">
								<h4 className="md:text-3xl text-2xl lg:mb-6 mb-4">
									The Basics
								</h4>
								<p className="md:text-base text-sm mb-5">
									Counselling is a form of therapy that is done through talking.
									This can be different from talking to friends or family where
									you may struggle to be truly heard, or someone is just waiting
									for their turn to speak. You may hold back on your true self
									for fear of being judged or criticised for having views and
									opinions different from those close to you.
								</p>
								<p className="md:text-base text-sm">
									You may be trying to navigate your way through a situation
									that everyone has an opinion on how to handle it and you just
									want to find a way that works for you, that feels right for
									you. Or you may be experiencing a stressful time such as
									losing your job, divorce or bereavement and don't know who to
									turn to for support.
								</p>
							</div>
							<div className="">
								<h4 className="md:text-3xl text-2xl lg:mb-6 mb-4">
									How Counselling Can Help
								</h4>
								<p className="md:text-base text-sm mb-5">
									Counselling offers you the opportunity to discover your true
									self in a safe environment without fear of being judged. You
									can explore opinions and feelings to develop how you see the
									world around, and work your way through those introjected
									ideas of others to find your authentic self.
								</p>
								<p className="md:text-base text-sm">
									We can all put on masks to handle different situations we face
									to fit in or avoid confrontation at times in our life.
									Counselling offers you the opportunity to stop hiding behind
									those masks and have confidence in being you..
								</p>
							</div>
						</div>
						<img
							className="w-4/12 lg:block hidden rounded-3xl object-cover drop-shadow-lg"
							src="PhonePerson.png"
							alt="Person standing in kitchen on the phone"
						/>
					</div>
					<div className="flex justify-center md:pt-14 pt-10">
						<Button text="Learn more..." link="/services" />
					</div>
				</div>
			</div>
			{/* About us section */}
			<div className="max-w-7xl m-auto md:px-8 px-5 mt-16 mb-10">
				<h2 className="text-center md:text-4xl text-3xl mb-10">About</h2>
				<div className="space-y-20 pb-16">
					<AboutPerson
						name="Jennifer Schaub"
						image="Jen.png"
						text={
							<>
								<p>
									In the years before my training I have adopted many caregiving
									roles, including carer and learning support assistant. To me,
									community is everything and I do as much as possible to
									support my own (between being a mum and work). I currently
									volunteer with We Are With You (formally known as Addaction),
									Victims of Crime and West Country Association for Counselling.
								</p>
								<p>
									I understand that counselling is a personal experience that
									needs to be tailored to my client. I feel the autonomy of the
									client should be respected at all times, as they are the most
									qualified person to know what they want from the counselling
									experience. I use my expertise to guide clients through a
									journey of exploration to know themselves better and achieve
									their desired goals. I work in the modality of person centred/
									humanistic approach, although I draw upon other modalities
									depending on what is appropriate for each client.
								</p>
							</>
						}
					/>
				</div>
				<div className="flex justify-center">
					<Button text="More about me" link="/about" />
				</div>
			</div>
			{/* FAQs */}
			<div className="bg-back-dark py-16">
				<div className="max-w-7xl m-auto md:px-8 px-5">
					<Faqs />
				</div>
			</div>
		</div>
	);
}
