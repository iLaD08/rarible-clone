import React from "react";

const Collection = ({ collection }) => (
  <div className="collection">
    <a href={collection.shortURL} target="_blank" rel="noreferrer">
      <img src={collection.pic} alt={collection.name} title={collection.name} />
    </a>
    <h2>{collection.name}</h2>
  </div>
);

export default Collection;
