import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  const getData = (day) => {
    const headers = {
      "x-rapidapi-host": "rarible-data-scraper.p.rapidapi.com",
      "x-rapidapi-key": "62f1e07a06mshb58178b98356480p135ff4jsnbcfab5493d0e",
    };

    axios
      .get(
        `https://rarible-data-scraper.p.rapidapi.com/top_collection/${day}/100`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        const filtredData = [];

        res.data.list.forEach((item) => {
          if (item.pic) {
            const Newitem = {
              id: item.id,
              name: item.name,
              link: `https://rarible.com/collection/${item.id}`,
              pic: item.pic.replace("ipfs://", ""),
            };

            filtredData.push(Newitem);
          }
        });

        setData(filtredData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => getData(1), []);

  return (
    <div className="App">
      <h1 className="title">Top collections</h1>
      <div className="filter">
        <span>
          Day <output id="output">0</output>
        </span>
        <input
          type="range"
          onInput={(e) => {
            var number = e.target.value;

            document.getElementById("output").value = number;
            getData(number);
          }}
          name="vol"
          default="1"
          min="1"
          max="30"
        />
      </div>
      <div className="list">
        {data.map((nft, key) => (
          <div className="nft" key={key}>
            <a href={nft.link} target="_blank" rel="noreferrer">
              <img
                src={`https://ipfs.io/${nft.pic.replace("ipfs://", "")}`}
                alt={nft.name}
                title={nft.name}
              />
            </a>
            <h2>{nft.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
