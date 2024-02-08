import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ brand, items }) {
	const [activeIndex, setActiveIndex] = useState(-1);
	const [active, setActive] = useState(false);

	const [onHome, setOnHome] = useState(true);

	useEffect(() => {
		if (Router.pathname !== '/') {
			setOnHome(false);
		} else {
			setOnHome(true);
		}
	});

	useEffect(() => {
		const handleRouteChange = (url) => {
			const newActiveIndex = items.findIndex((item) => item.url === url);

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
		<div className="sticky top-0 w-full z-50">
			<nav
				className={`navbar md:py-5 py-3 text-textGreen-dark z-50 ${
					onHome ? 'bg-back' : 'bg-back-dark'
				}`}
			>
				<div className="flex justify-between items-center max-w-7xl m-auto md:px-8 px-5">
					<Link href="/">
						<a>
							<div className="brand md:text-2xl text-lg hover:scale-105 transition-all">
								{brand}
							</div>
						</a>
					</Link>
					<div
						onClick={handleTray}
						className="hamburger lg:hidden cursor-pointer"
					>
						{!active ? <FiMenu size="1.5em" /> : <FiX size="1.5em" />}
					</div>
					<div className="items hidden lg:block space-x-10">
						{items.map((item, index) => (
							<Link
								href={item.url}
								active={activeIndex === index ? 'active' : undefined}
								key={item.id}
								className="items"
							>
								{!onHome && item.id === 'laskfj23f' ? (
									<a className="text-base p-3 rounded-lg bg-ctaGreen hover:bg-ctaGreen-light hover:text-textGreen text-back font-light">
										{item.title}
									</a>
								) : (
									<a className="text-base p-3 rounded-lg hover:bg-back-dark font-light">
										{item.title}
									</a>
								)}
							</Link>
						))}
					</div>
				</div>
			</nav>
			<AnimatePresence>
				{active && (
					<motion.div
						onClick={closeTray}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'easeOut' }}
						className={`w-screen h-screen bg-black bg-opacity-50 flex justify-center absolute lg:hidden z-30 overflow-hidden`}
					>
						<motion.div
							variants={animateModal}
							initial="initial"
							animate="animate"
							exit="exit"
							className="relative w-96 top-4 h-52 flex flex-col items-center rounded-lg bg-back mx-4 z-10"
						>
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
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default Navbar;

const animateModal = {
	initial: {
		y: -400,
	},
	animate: {
		y: 0,
		transition: {
			duration: 0.4,
			ease: 'easeOut',
		},
	},
	exit: {
		y: -400,
		transition: {
			duration: 0.4,
			ease: 'easeOut',
		},
	},
};
