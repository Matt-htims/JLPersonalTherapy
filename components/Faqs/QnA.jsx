import React from 'react';

const QnA = ({ q, a }) => {
	return (
		<div>
			<h3 className="text-xl pb-6 font-semibold">{q}</h3>
			<div className="pb-6 leading-7 text-base text-justify leading-8">{a}</div>
		</div>
	);
};

export default QnA;
