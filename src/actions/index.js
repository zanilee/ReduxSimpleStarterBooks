//import React, { Component } from 'react';
//import { connect } from 'react-redux';

// selectBook is an ActionCreator, it needs to return an action, an object with a type property

function selectBook(book) {
    return {
        type: 'BOOK_SELECTED', // Action always contains a type
        payload: book // Action sometimes contains payload - more information about the action
    };
}

export default selectBook;
