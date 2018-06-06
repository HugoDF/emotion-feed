import { RESET_TRANSACTIONS, SET_FILTERED_TRANSACTIONS } from '../actions';

import transactions from '../data/transactions.json';
const defaultState = transactions.map(({ id }) => id);

export default (state = defaultState, action) => {
    switch (action.type) {
        case RESET_TRANSACTIONS:
            return defaultState;
        case SET_FILTERED_TRANSACTIONS:
            return action.transactionIds;
        default:
            return state;
    }
};