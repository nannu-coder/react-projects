import React from "react";

const Category = ({ filterItems, categoryItem }) => {
  return (
    <div className="btn-container">
      {categoryItem.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
