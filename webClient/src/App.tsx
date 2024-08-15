import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/app.css";
import Mainview from "./components/mainPage/Mainview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/mainPage/Navbar";
import "C:/Users/IAF/1400Work/webClient/src/css/Nav.css";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="main-app-view">
			<div className="navigation-bar">
				<Navbar />
			</div>

			<Router>
				<Routes>
					<Route path="/kahoot/Mainview" element={<Mainview />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
