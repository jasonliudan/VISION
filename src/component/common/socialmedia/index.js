import React from "react";

const SocialMedia = () => {
	return (
		<div className="ml-3 share-ctr mobile-hide">
			<p
				style={{
					color: "rgb(0, 123, 255)",
					marginBottom: "0px",
					textAlign: "center",
				}}
			>
				Subscribe To Updates!
			</p>
			<div
				className="socials"
				style={{
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<div>
					<a
						href="/"
						classNames="nav-link"
						style={{ color: "rgb(0, 123, 255)", textAlign: "center" }}
					>
						<img
							src={require("../../../assets/images/icons/twitter.svg")}
							alt="twitter"
						/>
					</a>
				</div>
				<div>
					<a
						href="/"
						classNames="nav-link"
						style={{ color: "rgb(0, 123, 255)", textAlign: "center" }}
					>
						<img
							src={require("../../../assets/images/icons/message.svg")}
							alt="twitter"
						/>
					</a>
				</div>
				<div>
					<a
						href="/"
						classNames="nav-link"
						style={{ color: "rgb(0, 123, 255)", textAlign: "center" }}
					>
						<img
							src={require("../../../assets/images/icons/mail.svg")}
							alt="twitter"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SocialMedia;
