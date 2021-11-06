import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";
import { HotCollectionsContainer } from "./style";

const HotCollections = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  const GetHotCollections = () => {
    API.get("/hot_collection")
      .then((res) => setData(res.data.list))
      .catch((err) => console.error(err));
  };

  useEffect(() => GetHotCollections(), []);

  return (
    <HotCollectionsContainer>
      <img
        className="back-arrow"
        onClick={() => navigate("/")}
        src="https://raw.githubusercontent.com/iLaD08/react-weather-app/3b701388e5f3932506f652780eee0378d38a512e/src/assets/arrow.svg"
        alt=""
      />
      <h1 className="title">Hot Collections</h1>
      {data.length ? (
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
      ) : (
        <div className="loading">
          <span>loading....</span>
        </div>
      )}
    </HotCollectionsContainer>
  );
};

export default HotCollections;
