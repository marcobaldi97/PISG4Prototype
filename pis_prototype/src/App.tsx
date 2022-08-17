import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Route as RouteType } from "./types";
import Teachers from "./pages/Teachers/Teachers";
import NavBar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const queryClient = new QueryClient();

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
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<NavBar routes={routes} />

					<Routes location={"/teachers"}>
						<Route path="/teachers" element={<Teachers />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</div>
	);
}

export default App;
