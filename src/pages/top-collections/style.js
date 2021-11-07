import styled from "styled-components";

export const TocollectionsContainer = styled.div`
  .back-arrow {
    cursor: pointer;
    position: fixed;
    top: 6vh;
    left: 15px;
    width: 25px;
    height: auto;
    border: none;
    filter: invert(99%) sepia(5%) saturate(2%) hue-rotate(13deg)
      brightness(106%) contrast(100%);
  }

  .title {
    margin-top: 6vh;
    text-align: center;
    font-size: 2.5rem;
  }

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px 20px 20px;
    font-size: 20px;
  }

  .filter span {
    margin-right: 5px;
  }

  .collections-list {
    width: 85vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 50px auto;
  }

  img {
    width: 50vh;
    height: 50vh;
  }

  .loading {
    text-align: center;
    margin-top: 40vh;
  }
`;
