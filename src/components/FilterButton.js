import React from 'react';

function FilterButtons({ currentFilter, setFilter }) {
  const filters = ['all', 'not-started', 'in-progress', 'done'];
  
  const formatFilterName = (name) => {
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button 
          key={filter}
          className={currentFilter === filter ? 'active' : ''}
          onClick={() => setFilter(filter)}
        >
          {formatFilterName(filter)}
        </button>
      ))}
    </div>
  );
}

  

export default FilterButtons;
