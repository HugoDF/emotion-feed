import React from 'react';
import { connect } from 'react-redux';
import FeedItem from './FeedItem';
import { transactionEmotionChange } from '../actions';

const Feed = ({ transactions, onTransactionEmotionChange }) => (
    <div>
        {transactions && transactions.map((transaction, i) =>
            <FeedItem
                key={i}
                transaction={transaction}
                onEmotionChange={(emotion) => onTransactionEmotionChange(transaction, emotion)}
            />
        )}
    </div>
);

const mapStateToProps = ({ transactions, activeTransactionIds }) => {
    return {
        transactions: transactions
            .filter(({ id }) => activeTransactionIds.includes(id))
            .sort(
                (a, b) => activeTransactionIds.indexOf(a.id) > activeTransactionIds.indexOf(b.id)
                    ? 1
                    : -1
            )
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTransactionEmotionChange(transaction, emotion) {
            dispatch(transactionEmotionChange(transaction, emotion));
        }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
