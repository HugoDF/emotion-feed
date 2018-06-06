export const TRANSACTION_EMOTION_CHANGE = 'ON_TRANSACTION_EMOTION_CHANGE';

export function transactionEmotionChange(transaction, emotion) {
    return {
        type: TRANSACTION_EMOTION_CHANGE,
        transactionId: transaction.id,
        newEmotion: emotion
    };
}

export function searchQueryUpdate(query) {

}