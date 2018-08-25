import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index.js'
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="languageItem">{book.title}</li>
            );
        });
    }

    render(){
        return(
            <ul className="languageList">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    return {
        books: state.books
    };
}


// Anything returned from this function will end up as props on the LanguageList container
function mapDispatchToProps(dispatch) {
    // Whatever selectLanguage is called, it result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
