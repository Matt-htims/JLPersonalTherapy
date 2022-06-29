import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';

import { FiPhone, FiMail, FiFacebook } from 'react-icons/fi';

function ContactPill() {
	const [hover, setHover] = useState(false);
	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="fixed right-5 top-40 z-30 md:flex cursor-pointer hidden overflow-hidden rounded-2xl"
		>
			<AnimatePresence>
				{hover ? (
					<motion.div
						initial={{ x: 200 }}
						animate={{ x: 0 }}
						exit={{ x: 200 }}
						transition={{ ease: 'backInOut', duration: '0.1' }}
						className="py-1 px-2 space-y-1 text-sm transition-all bg-back border border-r-0 border-black/10 rounded-l-2xl z-10"
					>
						<div className="flex space-y-1 flex-col items-end">
							<Link href="tel:07710447929">
								<a className="hover:text-ctaGreen">
									<p>07710447929</p>
								</a>
							</Link>
							<Link href="tel:07710447929">
								<a className="hover:text-ctaGreen">
									<p>07710447929</p>
								</a>
							</Link>
						</div>
						<div className="flex flex-col space-y-1 py-1 items-end">
							<Link href="mailto:jen@jlpersonaltherpay.com">
								<a className="hover:text-ctaGreen">
									<p>jen@jlpersonaltherapy.com</p>
								</a>
							</Link>
							<Link href="mailto:lorna@jlpersonaltherpay.com">
								<a className="hover:text-ctaGreen">
									<p>lorna@jlpersonaltherapy.com</p>
								</a>
							</Link>
						</div>
						<div className="flex justify-end hover:text-ctaGreen">
							<Link href="#">
								<a>
									<p>JLPersonalTherapy</p>
								</a>
							</Link>
						</div>
					</motion.div>
				) : (
					''
				)}
			</AnimatePresence>
			<div
				className={`${
					hover ? 'rounded-r-2xl' : 'rounded-full'
				} bg-textGreen-light space-y-7 p-2 z-20`}
			>
				<div>
					<Link href="/contact">
						<a className="text-textGreen-lightest ">
							<FiPhone size="1.2rem" />
						</a>
					</Link>
				</div>
				<div>
					<Link href="/contact">
						<a className="text-textGreen-lightest">
							<FiMail size="1.2rem" />
						</a>
					</Link>
				</div>
				<div>
					<Link href="/contact">
						<a className="text-textGreen-lightest">
							<FiFacebook size="1.2rem" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ContactPill;
