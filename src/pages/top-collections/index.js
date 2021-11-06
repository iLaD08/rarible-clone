import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getTopCollection from "../../actions/getTopCollection";
import Collection from "../../components/collection/index.js";
import { TocollectionsContainer } from "./style";

const TopCollections = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    var day = 1;

    getTopCollection({ day, setData });
  }, []);

  return (
    <TocollectionsContainer>
      <img
        className="back-arrow"
        onClick={() => navigate("/")}
        src="https://raw.githubusercontent.com/iLaD08/react-weather-app/3b701388e5f3932506f652780eee0378d38a512e/src/assets/arrow.svg"
        alt=""
      />
      <h1 className="title">Top collections</h1>
      <div className="filter">
        <span>
          Day <output id="output">1</output>
        </span>
        <input
          type="range"
          onInput={(e) => {
            var day = e.target.value;

            setData([]);
            document.getElementById("output").value = day;
            getTopCollection({ day, setData });
          }}
          name="vol"
          default="1"
          min="1"
          max="30"
        />
      </div>
      {data.length ? (
        <div className="collections-list">
          {data.map((collection, key) => (
            <Collection key={key} collection={collection} />
          ))}
        </div>
      ) : (
        <div className="loading">
          <span>loading....</span>
        </div>
      )}
    </TocollectionsContainer>
  );
};

export default TopCollections;
