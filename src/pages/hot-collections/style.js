import styled from "styled-components";

export const HotCollectionsContainer = styled.div`
  .back-arrow {
    cursor: pointer;
    position: fixed;
    top: 6vh;
    left: 15px;
    width: 25px;
    height: auto;
    border: none;
  }

  .title {
    margin-top: 6vh;
    text-align: center;
    font-size: 2.5rem;
  }

  .grid-list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin: 50px auto;
  }

  .collection {
    text-align: center;
  }

  .collection span {
    color: #5aff36;
  }

  img {
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    background-color: #f5f5f550;
    border: 2px solid #f5f5f5;
  }

  .loading {
    font-size: 20px;
    text-align: center;
    margin-top: 25vh;
  }
`;
