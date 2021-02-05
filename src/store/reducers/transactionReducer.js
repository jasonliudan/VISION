import * as ActionTypes from "../constants";

const initialState = {
	transactions: [],
};

export default function setBrowserInfo(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SET_TRANSACTIONS:
			return {
				...state,
				transactions: action.transactions,
			};
		default:
			return state;
	}
}
