import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const QnA = ({ q, a, last }) => {
	const [open, setOpen] = useState(false);

	// Handlers
	function handleOpen() {
		setOpen(!open);
	}

	return (
		<div
			onClick={handleOpen}
			className={
				last
					? 'cursor-pointer pb-8 mt-8'
					: 'cursor-pointer border-b border-gray pb-8 mt-8'
			}
		>
			<div className="flex justify-between items-center md:pr-6 pr-2 z-10 bg-back">
				<h3 className="md:text-xl text-lg md:p-0 pr-5 font-semibold">{q}</h3>
				{open ? (
					<FiMinusCircle
						className="stroke-2 flex-none md:h-8 h-5"
						size="25px"
					/>
				) : (
					<FiPlusCircle className="stroke-2 flex-none md:h-8 h-5" size="25px" />
				)}
			</div>
			<div className="overflow-hidden">
				<AnimatePresence>
					{open ? (
						<motion.div
							initial={{ y: -150 }}
							animate={{ y: 0 }}
							exit={{ y: -150 }}
							transition={{ ease: 'easeInOut' }}
							className="pt-3 text-base text-justify text-gray-light md:pr-20 pr-10 font-light"
						>
							{a}
						</motion.div>
					) : (
						''
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default QnA;
