import React from 'react';

// Nav Items
import navItems from '../helperData/navItems';

//  Components
import Navbar from './Navbar';
import Footer from './Footer';
import ContactPill from './ContactPill';

const Layout = ({ children }) => {
	return (
		<div className="font-nunito text-textGreen bg-back">
			<Navbar
				brand={
					<h1>
						J&L Personal Therapy
						<span className="hidden">Counselling Cornwall, Newquay</span>
					</h1>
				}
				items={navItems}
			/>
			<ContactPill />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
