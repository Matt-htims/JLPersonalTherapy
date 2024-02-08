import React from 'react';

import Link from 'next/link';

function ContactSection({ value, link }) {
	return (
		<div>
			<Link href={link}>
				<a>
					<p className="md:text-3xl text-2xl md:tracking-widest tracking-wide font-light hover:scale-105 transition-all">
						{value}
					</p>
				</a>
			</Link>
		</div>
	);
}

export default ContactSection;
