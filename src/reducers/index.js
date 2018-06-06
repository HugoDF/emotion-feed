import transactions from './transactions';
import activeTransactionIds from './activeTransactionIds';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    transactions,
    activeTransactionIds
});

export default rootReducer;