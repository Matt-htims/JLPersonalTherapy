import React from 'react';

const QnA = ({ q, a }) => {
	return (
		<div>
			<h3 className="text-xl pb-6">{q}</h3>
			<p className="pb-6 leading-7 text-base">{a}</p>
		</div>
	);
};

export default QnA;
