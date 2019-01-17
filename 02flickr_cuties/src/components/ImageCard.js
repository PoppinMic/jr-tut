import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  max-width: 230px;
  margin-bottom: 1rem;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImageCard = props => (
  <ImageWrapper>
    <Image src={props.imgUrl} alt={props.imgTitle} />
  </ImageWrapper>
);
export default ImageCard;
