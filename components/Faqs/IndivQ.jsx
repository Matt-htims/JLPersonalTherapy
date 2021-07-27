import { useState, useEffect } from 'react';

function IndivQ({ question, answer }) {
	const [open, setOpen] = useState(false);

	//  Handlers
	function handleOpen() {
		setOpen(!open);
	}
	return (
		<div
			onClick={handleOpen}
			className="cursor-pointer p-4 transition-all rounded-xl"
		>
			<h5 className="flex-none hover:text-ctaGreen text-textGreen-dark text-lg">
				{question}
			</h5>
			{open ? <p className="font-light p-3">{answer}</p> : ''}
		</div>
	);
}

export default IndivQ;
