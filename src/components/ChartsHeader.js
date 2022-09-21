import React from "react";

const ChartsHeader = ({ category, title }) => (
  <div>
    <div>
      <p>Chart</p>
      <p>{category}</p>
    </div>
    <p>{title}</p>
  </div>
);

export default ChartsHeader;
