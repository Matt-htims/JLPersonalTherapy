import React from 'react';

// Nav Items
import navItems from '../helperData/navItems';

//  Components
import Navbar from '../components/nav/Navbar';

const Layout = ({ children }) => {
	return (
		<div className="font-nunito text-textGreen bg-back">
			<Navbar brand="Counselling" items={navItems} />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
