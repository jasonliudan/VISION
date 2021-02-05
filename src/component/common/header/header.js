import React from "react";

import { Link } from "react-router-dom";

import SocialMediaButtons from "../socialmedia";

const Header = () => {
	const isMobile = window.innerWidth < 600 ? true : false;
	return (
		<div className="page-main-header">
			<div
				className="main-header-right"
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<div style={{ display: "flex" }}>
					<div className="main-header-left text-center">
						<div className="logo-wrapper">
							<Link to={`${process.env.PUBLIC_URL}/landing`}>
								<img
									width={50}
									src="https://s3-us-west-2.amazonaws.com/acf-uploads/apyvisionlogo400x400circle.png"
									alt="apy.vision logo"
								/>
							</Link>
							<span
								style={{
									color: "#8f51dd",
									fontWeight: 800,
									fontSize: "2rem",
									margin: "20px",
								}}
							>
								APY.vision
							</span>
						</div>
					</div>
					{!isMobile && <SocialMediaButtons />}
				</div>
				{!isMobile && (
					<div>
						<button
							className="btn btn-outline-info"
							style={{ margin: "0px 10px" }}
						>
							ETH 1669 USD
						</button>
						<button
							className="btn btn-outline-info"
							style={{ margin: "0px 10px" }}
						>
							75 gwei
						</button>
						<button
							className="btn btn-pill btn-info input-form-button"
							style={{ margin: "0px 40px" }}
						>
							PRO Log In
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
