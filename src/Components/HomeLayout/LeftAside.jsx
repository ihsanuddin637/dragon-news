import React, { use } from "react";
import { NavLink } from "react-router";

const LeftAside = ({ categoryPromise }) => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1>All category</h1>
      <div className="grid grid-cols-1 mt-4 gap-3">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} className={'btn btn-primary'} key={category.id}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
