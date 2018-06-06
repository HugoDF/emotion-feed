export const TRANSACTION_EMOTION_CHANGE = 'ON_TRANSACTION_EMOTION_CHANGE';

export function transactionEmotionChange(transaction, emotion) {
    return {
        type: TRANSACTION_EMOTION_CHANGE,
        transactionId: transaction.id,
        newEmotion: emotion
    };
}

export const RESET_TRANSACTIONS = 'RESET_TRANSACTIONS';

export function resetTransactions() {
    return {
        type: RESET_TRANSACTIONS
    };
}

export const SET_FILTERED_TRANSACTIONS = 'SET_FILTERED_TRANSACTIONS';

export function setFilteredTransactions(transactionIds) {
    return {
        type: SET_FILTERED_TRANSACTIONS,
        transactionIds
    };
}