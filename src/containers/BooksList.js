import React from 'react';
import { connect } from 'react-redux';

const BooksList = () => (
  <div>
    <table>
      <tr>
        <th>Book ID</th>
        <th>title</th>
        <th>category</th>
      </tr>
      {books.map((item) => <Book key={book.id} {...book} />)}
    </table>
  </div>
);

const mapState = (state, ownProps) => {
  console.log(ownProps);
  const { id, amount } = ownProps;
  return {};
};

export default connect(mapState)(BooksList);
