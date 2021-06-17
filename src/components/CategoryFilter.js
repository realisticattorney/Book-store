import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryFilter = ({ filter, handleFilterChange }) => (
  <select onChange={handleFilterChange} name="filter">
    {filter.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapState = (state) => ({ filter: state.filter });

export default connect(mapState)(CategoryFilter);
