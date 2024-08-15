import { useState } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
// function click() {
//     console.log('zebi zine');
// }

function Mainview() {
	const navigate = useNavigate();

	const quizes = () => {
		navigate("/home");
	};

	const addQuiz = () => {
		navigate("/home");
	};
	return (
		<>
			<div className="main-hakoot-display-page">
				<div className="join-quiz" onClick={() => quizes()}>
					mainview
				</div>
				<div className="add-quiz" onClick={() => addQuiz()}>
					mainview
				</div>
			</div>
		</>
	);
}

export default Mainview;
