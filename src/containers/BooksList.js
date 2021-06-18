import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

function BooksList({
  books, removeBook, filter, changeFilter,
}) {
  const handleRemoveBook = (e) => {
    removeBook(e.id);
  };

  const filteredBooks = filter !== 'All' ? books.filter((book) => book.category === filter) : books;

  return (
    <>
      <nav className="header">
        <h1 className="book-app">Bookstore CMS</h1>
        <p className="booklist-nav">BOOKS</p>
        <CategoryFilter
          handleFilterChange={(e) => changeFilter(e.target.value)}
        />
      </nav>
      <div>
        <div className="books-cms">
          {filteredBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </div>
      </div>
    </>
  );
}
const mapState = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatch = {
  removeBook,
  changeFilter,
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(BooksList);
