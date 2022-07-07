import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Dropdown = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpen() {
		setIsOpen(!isOpen);
	}
	return (
		<div>
			<div
				onClick={handleOpen}
				className="bg-back-dark cursor-pointer rounded-xl shadow-md py-4 px-6 flex justify-between items-center"
			>
				<h3 className="md:text-3xl text-xl font-light">{title}</h3>
				{!isOpen ? (
					<FiChevronDown className="flex-none" size="1.5rem" />
				) : (
					<FiChevronUp className="flex-none" size="1.5rem" />
				)}
			</div>
			<div className="overflow-hidden px-2 pb-1">
				<AnimatePresence>
					{isOpen ? (
						<motion.div
							initial={{ y: -1100 }}
							animate={{ y: 0 }}
							exit={{ y: -1100 }}
							transition={{ ease: 'easeOut' }}
							className="p-3 space-y-5 shadow-md rounded-xl"
						>
							<div className="space-y-6 py-4">{content}</div>
						</motion.div>
					) : (
						''
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Dropdown;
