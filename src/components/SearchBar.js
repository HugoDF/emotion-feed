import React from 'react';
import { connect } from 'react-redux';
import { setFilteredTransactions, resetTransactions } from '../actions';
import Fuse from 'fuse.js';

import searchIcon from '../search-icon.png';

import './SearchBar.css';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(e) {
        const { value } = e.target;
        if (!value) {
            return this.props.resetTransactions();
        }
        if (value.includes(':')) {
            const emotionSearchTerm = value.replace(/:/g, '');
            if (emotionSearchTerm.length < 3) {
                return this.props.resetTransactions();
            }
            return this.props.setFilteredTransactions(
                this.props.transactions
                    .filter(({ emotion }) => emotion === emotionSearchTerm)
                    .map(({ id }) => id)
            );
        }
        // Fall back to fuzzy search over transactions
        this.props.setFilteredTransactions(
            this.searchEngine.search(e.target.value)
        );
    }
    render() {
        const { transactions } = this.props;
        if (Array.isArray(transactions) && !this.searchEngine) {
            this.searchEngine = new Fuse(transactions, {
                keys: ['description'],
                id: 'id'
            });
        }
        return (<div className="c-search-bar">
            <img alt="search" src={searchIcon} className="c-search-bar__icon" />
            <input
                className="c-search-bar__input"
                disabled={!transactions}
                type="text"
                placeholder="Search transactions"
                onChange={this.onInputChange}
            />
        </div>);
    }
};

const mapStateToProps = ({ transactions }) => {
    return {
        transactions
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setFilteredTransactions(transactionIds) {
            dispatch(setFilteredTransactions(transactionIds));
        },
        resetTransactions() {
            dispatch(resetTransactions());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);