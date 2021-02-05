import * as ActionTypes from "../constants";

export const getTransactions = () => {
	return {
		type: ActionTypes.GET_TRANSACTIONS,
	};
};
export const setTransactions = (transactions) => {
	return {
		type: ActionTypes.SET_TRANSACTIONS,
		transactions,
	};
};
