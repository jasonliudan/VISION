import React, { Fragment } from "react";
import Header from "./component/common/header/header";
import Sidebar from "./component/common/sidebar/sidebar";

const App = ({ children }) => {
	const isMobile = window.innerWidth < 600 ? true : false;
	return (
		<Fragment>
			<div className="page-wrapper">
				<div className="page-body-wrapper">
					<Header />
					{!isMobile && <Sidebar />}
					<div className="page-body">{children}</div>
				</div>
			</div>
		</Fragment>
	);
};

export default App;
