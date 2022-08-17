import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Route as RouteType } from "./types";
import Teachers from "./pages/Teachers/Teachers";
import NavBar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
	const routes: RouteType[] = [
		{
			name: "Teachers",
			path: "/teachers",
		},
		{
			name: "Students",
			path: "/",
		},
	];

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar routes={routes} />

				<Routes location={"/teachers"}>
					<Route path="/teachers" element={<Teachers />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
