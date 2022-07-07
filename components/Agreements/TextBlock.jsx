import React from 'react';

const TextBlock = ({ title, content }) => {
	return (
		<div>
			<h3 className="md:text-3xl text-2xl md:pb-8 pb-4 font-semibold">
				{title}
			</h3>
			<div className="leading-7 text-base space-y-2 mb-10 text-justify">
				{content}
			</div>
		</div>
	);
};

export default TextBlock;
