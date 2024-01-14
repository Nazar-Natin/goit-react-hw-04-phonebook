import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">Filter by Name:</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
