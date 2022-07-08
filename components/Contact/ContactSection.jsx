import React from 'react';

import Link from 'next/link';

function ContactSection({ name, value, link }) {
	return (
		<div>
			<Link href={link}>
				<a>
					<p className="font-light text-lg  tracking-wide text-textGreen-light mb-1">
						{name}
					</p>
					<p className="md:text-3xl text-2xl md:tracking-widest tracking-wide font-light hover:scale-105 transition-all">
						{value}
					</p>
				</a>
			</Link>
		</div>
	);
}

export default ContactSection;
