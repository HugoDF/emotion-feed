import { TRANSACTION_EMOTION_CHANGE } from '../actions';

import transactions from '../data/transactions.json';
const defaultState = transactions;

export default (state = defaultState, action) => {
    switch (action.type) {
        case TRANSACTION_EMOTION_CHANGE:
            return state.map((transaction) => transaction.id === action.transactionId
                ?
                {
                    ...transaction,
                    emotion: action.newEmotion
                }
                : transaction
            );
        default:
            return state;
    }
}