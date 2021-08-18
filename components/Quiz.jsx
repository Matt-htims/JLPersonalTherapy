import { useState } from 'react';
import { useRouter } from 'next/router';

import questions from '../helperData/questions';

function Quiz() {
	const router = useRouter();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

	function handleAnswerButtonClick(isYes) {
		if (isYes) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	}

	function restartQuizHandler() {
		setCurrentQuestion(0);
		setShowResult(false);
		setScore(0);
	}

	if (showResult) {
		return (
			<div className="rounded-xl shadow-inner overflow-hidden">
				<h2 className="text-center bg-back-dark p-3 md:text-lg text-base font-semibold">
					Is Person Centred Therapy for you?
				</h2>
				<div className="py-8 px-4 md:h-56">
					<p className="text-center md:text-xl text-sm">
						You said yes to <span className="font-bold">{score}</span>{' '}
						{score == 1 ? 'question' : 'questions'}
					</p>
					<div className="pt-8 text-center md:text-2xl text-lg">
						{score > 0 ? (
							<>
								<p>You would likely benefit from person centred therapy.</p>
								<p className="md:text-base text-sm pt-6">
									Therapy takes time and commitment. It is no quick fix
									solution, but just like many things the slower option has
									longer lasting results.
								</p>
							</>
						) : (
							<>
								<p>
									It seems you do not need person centred therapy but if you
									have any questions please do not hesitate to ask.
								</p>
							</>
						)}
					</div>
				</div>
				<div className="flex justify-around pb-2">
					<button
						onClick={() => router.push('/contact')}
						className="bg-textGreen-light rounded-xl p-3 text-back md:text-xl text-base font-bold w-1/2 mx-2 hover:bg-back hover:text-textGreen-light border border-black/0 hover:border-black/50 "
					>
						Contact Us
					</button>
					<button
						onClick={restartQuizHandler}
						className="bg-black/40 rounded-xl p-3 text-back md:text-xl text-base font-bold w-1/2 mx-2 hover:bg-back hover:text-textGreen-light border border-black/0 hover:border-black/50"
					>
						Restart
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="rounded-xl shadow-inner overflow-hidden">
			<h2 className="text-center bg-back-dark p-3 md:text-lg text-base font-semibold">
				Is Person Centred Therapy for you?
			</h2>
			<div className="py-2 px-4 h-56">
				<p className="text-right text-sm">Q {currentQuestion + 1}/7</p>
				<p className="text-center py-14 md:text-3xl text-xl font-thin">
					{questions[currentQuestion].questionText}
				</p>
			</div>
			<div className="flex justify-around pb-2">
				<button
					className="bg-textGreen-light rounded-xl p-3 text-back md:text-xl text-base font-bold w-1/2 mx-2 hover:bg-back hover:text-textGreen-light border border-black/0 hover:border-black/50 "
					onClick={() => handleAnswerButtonClick(true)}
				>
					Yes
				</button>
				<button
					className="bg-black/40 rounded-xl p-3 text-back md:text-xl text-base font-bold w-1/2 mx-2 hover:bg-back hover:text-textGreen-light border border-black/0 hover:border-black/50"
					onClick={() => handleAnswerButtonClick(false)}
				>
					No
				</button>
			</div>
		</div>
	);
}

export default Quiz;
