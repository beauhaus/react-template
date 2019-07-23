import React, { useState } from "react";
import styled from "styled-components";
import { imageFeed } from "./data/images.json";
import Card from "./Card";

const StyledGallery = styled.div`
  border: 2px solid goldenrod;
  width: 100%;
  height: 100%;
`;
const ImageGallery = () => {
  // console.log("imgFeed: ", imageFeed);
  // const searchTerm = "bread";
  // const imageFeed = imageFeed.
  return (
    <StyledGallery>
      {imageFeed.map((photo, idx) => (
        <Card key={idx} photo={photo} />
      ))}
    </StyledGallery>
  );
};

export default ImageGallery;
