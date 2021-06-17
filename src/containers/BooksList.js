/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
// eslint-disable-next-line import/no-cycle
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

// eslint-disable-next-line react/prop-types
function BooksList({ books, removeBook }) {
  const handleRemoveBook = (e) => {
    removeBook(e.id);
  };

  const handleFilterChange = (e) => {
    changeFilter(e.category);
  };

  return (
    <div>
      <h2>Books List</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </div>
  );
}
const mapState = (state) => ({
  books: state.books,
});

const mapDispatch = {
  removeBook,
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapState, mapDispatch)(BooksList);
