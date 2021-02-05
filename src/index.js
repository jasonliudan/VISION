import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./route/route";
import ScrollToTop from "./component/common/ScrollToTop";
import Error400 from "./pages/errors/error400";
import Error404 from "./pages/errors/error404";
import Error500 from "./pages/errors/error500";

const Root = (props) => {
	return (
		<Fragment>
			<Provider store={store}>
				<BrowserRouter basename={`/`}>
					<ScrollToTop />
					<Switch>
						<Route
							path={`${process.env.PUBLIC_URL}/pages/error-400`}
							component={Error400}
						></Route>
						<Route
							path={`${process.env.PUBLIC_URL}/pages/error-404`}
							component={Error404}
						></Route>
						<Route
							path={`${process.env.PUBLIC_URL}/pages/error-500`}
							component={Error500}
						></Route>

						<App>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/`}
								render={() => {
									return <Redirect to={`${process.env.PUBLIC_URL}/landing`} />;
								}}
							/>

							<TransitionGroup>
								{routes.map(({ path, Component }) => (
									<Route
										key={path}
										exact
										path={`${process.env.PUBLIC_URL}${path}`}
									>
										{({ match }) => (
											<CSSTransition
												in={match != null}
												timeout={500}
												classNames="fade"
												unmountOnExit
											>
												<div>
													<Component />
												</div>
											</CSSTransition>
										)}
									</Route>
								))}
							</TransitionGroup>
						</App>
					</Switch>
				</BrowserRouter>
			</Provider>
		</Fragment>
	);
};
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
