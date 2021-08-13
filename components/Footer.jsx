import React from 'react';
import Link from 'next/link';

import { FiPhone, FiMail, FiFacebook } from 'react-icons/fi';

function Footer() {
	return (
		<div className="h-60 bg-black/30 flex flex-col justify-center items-center space-y-6">
			<div className="flex space-x-4">
				<Link href="#">
					<a>
						<div className="bg-back hover:bg-textGreen-light hover:text-back p-2 rounded-full w-max">
							<FiPhone className="" size="1.5rem" />
						</div>
					</a>
				</Link>
				<Link href="#">
					<a>
						<div className="bg-back hover:bg-textGreen-light hover:text-back p-2 rounded-full w-max">
							<FiMail className="" size="1.5rem" />
						</div>
					</a>
				</Link>
				<Link href="#">
					<a>
						<div className="bg-back hover:bg-textGreen-light hover:text-back p-2 rounded-full w-max">
							<FiFacebook className="" size="1.5rem" />
						</div>
					</a>
				</Link>
			</div>
			<div className="space-x-5">
				<Link href="/">
					<a className="text-back hover:text-textGreen">Home</a>
				</Link>
				<Link href="/services">
					<a className="text-back hover:text-textGreen">Services</a>
				</Link>
				<Link href="/aboutus">
					<a className="text-back hover:text-textGreen">About</a>
				</Link>
			</div>
			<div className="space-x-5">
				<Link href="/faqs">
					<a className="text-back hover:text-textGreen">FAQs</a>
				</Link>
				<Link href="/contact">
					<a className="text-back hover:text-textGreen">Contact</a>
				</Link>
			</div>
		</div>
	);
}

export default Footer;
