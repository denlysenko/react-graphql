import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import BookDetails from './BookDetails';

import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: null
    };
  }

  displayBooks() {
    const data = this.props.data;

    if (data.loading) {
      return <div>Loading...</div>;
    }

    return data.books.map(book => (
      <li
        key={book.id}
        onClick={() => this.setState({ selectedBook: book.id })}
      >
        {book.name}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ul className="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selectedBook} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
