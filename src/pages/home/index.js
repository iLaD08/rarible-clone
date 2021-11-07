import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./style";

const Home = () => (
  <HomeContainer>
    <img
      src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:58567/3c0b56bc"
      alt="API"
      title="API"
    />
    <div>
      <h1>
        NAG its first API to fetch all data displayed of rarible NFTs
        marketplace.
      </h1>
      <span>We offer many endpoints to use as restful API:</span>
      <ul>
        <li>
          <Link to="/top-collections">Top Collections</Link>
        </li>

        <li>
          <Link to="/hot-collections"> Hot Collection</Link>
        </li>
        <li>Hot Bids</li>
        <li>Top Sellers</li>
        <li>Top Buyers</li>
        <li>Auctions</li>
      </ul>
      <h3>
        For all those Data you can take touch with Nfts world to create new
        businesses, cause its first Api five you all needed of Rarible
        marketplace to create and sell digital collectibles secured with
        blockchain.
      </h3>
    </div>
  </HomeContainer>
);

export default Home;
