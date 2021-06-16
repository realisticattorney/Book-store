import React from 'react';
import { connect } from 'react-redux';

const Book = ({ id, title, author }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{author}</td>
  </tr>
);
const mapState = (dispatch, ownProps) => {
  const { id, title, author } = ownProps;
  return {
    lol: 'lol',
  };
};
export default connect(mapState)(Book);
