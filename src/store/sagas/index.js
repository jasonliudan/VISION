import { all, fork } from "redux-saga/effects";

import watchTransactionSaga from "./transactionSaga";

export default function* root() {
	yield all([fork(watchTransactionSaga)]);
}
