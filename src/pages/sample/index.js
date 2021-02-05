import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardHeader, CardBody, Input } from "reactstrap";

import { getTransactions } from "../../store/actions/transactionActions";
import "./sample.scss";

const LeaderCard = ({ name, username, percent, rank }) => {
	return (
		<Card className="leader-card" style={{ marginTop: `${(rank - 1) * 40}px` }}>
			<div className="weather-bg rank-image">
				{rank !== 1 ? rank : <i className="pe-7s-cup pe-lg"></i>}
			</div>
			<h2>{name}</h2>
			<p>{username}</p>
			<p>{percent}%</p>
		</Card>
	);
};
const TransactionCard = ({ transaction }) => {
	return (
		<div className="transaction-card">
			<p>{transaction.address}</p>
			<p>{transaction.amount.toFixed(4)}</p>
		</div>
	);
};
const LandingPage = (props) => {
	useEffect(() => {
		props.getTransactions();
	});
	return (
		<Fragment>
			<div className="landing-page">
				<img
					src={require("../../assets/images/royale-lp.png")}
					alt="apy.vision logo"
					style={{ maxWidth: "100%" }}
				/>
				<h1>LP Royale entry tagline/title</h1>
				<h4 style={{ maxWidth: "600px", margin: "auto" }}>
					Some content that explains what this is about, this needs to be
					treated as a landing page
				</h4>
				<button className="btn btn-outline-info" style={{ margin: "40px 0px" }}>
					Read the FAQ
				</button>
				<Card className="weather-bg input-form">
					<CardHeader className="no-border bg-transparent input-form-head">
						<h5>To get started, pick a username and a guild:</h5>
					</CardHeader>
					<CardBody className="input-form-body">
						<Input placeholder="Your cool username" />
						<select className="form-control input-form-select" size="1">
							<option>Pick a guild</option>
							<option>A</option>
							<option>B</option>
							<option>C</option>
							<option>D</option>
						</select>
						<button className="btn btn-pill btn-info input-form-button">
							Get Started
						</button>
					</CardBody>
					<p className="input-form-message">
						Already signed-up? <span>Connect your wallet to login</span>
					</p>
				</Card>
				<h2>Current Leaderboard</h2>
				<div className="leader-board">
					<LeaderCard
						name="Jason"
						username="jasonliudan"
						percent="6.54"
						rank={2}
					/>
					<LeaderCard name="Tom" username="tom" percent="8.54" rank={1} />
					<LeaderCard name="Eddy" username="eddy" percent="4.21" rank={3} />
				</div>
				<Card className="transaction-list ">
					{props.transactions.map((transactions, index) => (
						<TransactionCard transaction={transactions} key={index} />
					))}
				</Card>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	transactions: state.transactionReducer.transactions,
});

const mapDispatchToProps = (dispatch) => ({
	getTransactions: () => dispatch(getTransactions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
