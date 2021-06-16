import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th>Book ID</th>
        <th>title</th>
        <th>category</th>
      </tr>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </table>
  </div>
);

const mapState = (state) => ({
  books: state.books,
});

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.array),
};
export default connect(mapState)(BooksList);
