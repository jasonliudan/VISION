import React from "react";
export const MENUITEMS = [
	{
		title: "Home",
		icon: <i className="pe-7s-home pe-lg"></i>,
		path: `${process.env.PUBLIC_URL}/landing`,
		type: "sub",
		active: true,
		bookmark: true,
	},
	{
		title: "LP Royale",
		icon: <i className="pe-7s-cup pe-lg"></i>,
		path: `${process.env.PUBLIC_URL}/landing`,
		type: "sub",
		active: false,
		bookmark: true,
	},
	{
		title: "All Pools",
		icon: <i className="pe-7s-graph3 pe-lg"></i>,
		path: `${process.env.PUBLIC_URL}/landing`,
		type: "sub",
		active: false,
		bookmark: true,
	},
	{
		title: "About / FAQs",
		icon: <i className="pe-7s-more pe-lg"></i>,
		path: `${process.env.PUBLIC_URL}/landing`,
		type: "sub",
		active: false,
		bookmark: true,
	},
	{
		title: "Pro",
		icon: <i className="pe-7s-portfolio pe-lg"></i>,
		path: `${process.env.PUBLIC_URL}/landing`,
		type: "sub",
		active: false,
		bookmark: true,
	},
];
