import React from "react";
import { CollectionContainer } from "./style.js";

const Collection = ({ collection }) => (
  <CollectionContainer>
    <a href={collection.shortURL} target="_blank" rel="noreferrer">
      <img src={collection.pic} alt={collection.name} title={collection.name} />
    </a>
    <h2>{collection.name}</h2>
  </CollectionContainer>
);

export default Collection;
