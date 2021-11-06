import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./style";

const Home = () => (
  <HomeContainer>
    <img
      src="https://nftscryptoguide.com/wp-content/uploads/2021/08/rarible-nft-marketplace.png"
      alt="API"
      title="API"
    />
    <div>
      <h1>We offer many endpoints to use as restful API:</h1>
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
