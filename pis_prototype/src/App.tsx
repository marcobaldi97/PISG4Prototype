import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Teachers from "./pages/Teachers/Teachers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes location={"/teachers"}>
					<Route path="/teachers" element={<Teachers />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
