import React from "react";
import Teachers from "./pages/teachers/teachers";

import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Teachers />
			</header>
		</div>
	);
}

export default App;
