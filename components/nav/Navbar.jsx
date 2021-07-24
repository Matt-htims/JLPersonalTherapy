import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

function Navbar({ brand, items }) {
	const [activeIndex, setActiveIndex] = useState(-1);
	const [active, setActive] = useState(false);

	useEffect(() => {
		const handleRouteChange = url => {
			const newActiveIndex = items.findIndex(item => item.url === url);

			setActiveIndex(newActiveIndex);
		};

		Router.events.on('routeChangeComplete', handleRouteChange);

		// Force first update
		handleRouteChange(Router.route);

		return () => Router.events.off('routeChangeComplete', handleRouteChange);
	}, [items]);

	function handleTray() {
		setActive(!active);
	}

	function closeTray() {
		setActive(false);
	}

	return (
		<div className="sticky top-0">
			<nav className="navbar flex justify-between py-8 px-8 text-textGreen-dark bg-back">
				<Link href="/">
					<a>
						<div className="brand text-2xl hover:scale-110 transition-all">
							{brand}
						</div>
					</a>
				</Link>
				<div
					onClick={handleTray}
					className="hamburger lg:hidden cursor-pointer"
				>
					<img
						src={active ? 'menuOpen.svg' : 'menuClosed.svg'}
						alt="navigation menu"
					/>
				</div>
				<div className="items hidden lg:block">
					{items.map((item, index) => (
						<Link
							href={item.url}
							active={activeIndex === index ? 'active' : undefined}
							key={item.id}
							className="items"
						>
							<a className="text-base px-5 py-3 rounded-lg hover:bg-back-dark">
								{item.title}
							</a>
						</Link>
					))}
				</div>
			</nav>
			<div
				className={`w-96 h-60 absolute left-1/2 transition-all lg:hidden ${
					!active ? 'opacity-0 -inset-80' : 'opacity-100'
				}`}
			>
				<div className="relative -left-1/2 flex flex-col items-center rounded-lg bg-back border ">
					{items.map((item, index) => (
						<Link
							href={item.url}
							active={activeIndex === index ? 'active' : undefined}
							key={item.id}
							className="items"
						>
							<a
								onClick={closeTray}
								className="text-base px-5 py-2 w-full text-center hover:bg-back-dark transition-all rounded-xl "
							>
								{item.title}
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
