import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import API from "../../api/api";
import { HotCollectionsContainer } from "./style";

const HotCollections = () => {
  const [data, setData] = useState([]);

  const GetHotCollections = () => {
    API.get("https://rarible-data-scraper.p.rapidapi.com/hot_collection")
      .then((res) => setData(res.data.list))
      .catch((err) => console.error(err));
  };

  useEffect(() => GetHotCollections(), []);

  return (
    <HotCollectionsContainer>
      <h1 className="title">Hot Collections</h1>
      <div className="grid-list">
        {data.map((collection, key) => (
          <div key={key} className="collection">
            <img
              src={
                collection.pic
                  ? collection.pic
                  : "https://www.colorhexa.com/f5f5f5.png"
              }
              alt={collection.name}
            />
            <h2>{collection.name}</h2>
            <CurrencyFormat
              value={collection.sum}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        ))}
      </div>
    </HotCollectionsContainer>
  );
};

export default HotCollections;
