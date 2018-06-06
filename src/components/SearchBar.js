import React from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => (<div>
    <input type="text" placeholder="Search transactions" />
</div>);

const mapStateToProps = (state) => state.search;
const mapDispatchToProps = (dispatch) => {
    return {
        onSearch() {
            dispatch({
                type: 'SEARCH_QUERY_UPDATE'
            });
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);