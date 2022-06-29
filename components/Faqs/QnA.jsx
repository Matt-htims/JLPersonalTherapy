import { useState } from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';

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
					? 'cursor-pointer mb-8'
					: 'cursor-pointer border-b border-gray mb-8'
			}
		>
			<div className="flex justify-between items-center mb-8 pr-6">
				<h3 className="text-xl">{q}</h3>
				{open ? <FiMinus /> : <FiPlus />}
			</div>
			{open ? (
				<div className="pb-6 leading-7 text-base text-justify leading-8">
					{a}
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default QnA;
