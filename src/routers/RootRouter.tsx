import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../redux/store";

import Map from "../components/pages/Map";
import NotFound from "../components/pages/NotFound";
import Home from "../components/pages/Home";

const RootRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/map">
					<Provider store={store}>
						<Map />
					</Provider>
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default RootRouter;
