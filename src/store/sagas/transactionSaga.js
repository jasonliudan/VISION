import { put, takeLatest, call } from "redux-saga/effects";
import * as ActionTypes from "../constants";

import { getTransactions } from "../../api/transactionAPI";
import * as transactionAction from "../actions/transactionActions";

function* workerGetTransactions(action) {
	try {
		const transactions = yield call(getTransactions);
		yield put(transactionAction.setTransactions(transactions.results));
	} catch (error) {
		console.error();
	}
}

export default function* workTransactionSaga() {
	yield takeLatest(ActionTypes.GET_TRANSACTIONS, workerGetTransactions);
}
