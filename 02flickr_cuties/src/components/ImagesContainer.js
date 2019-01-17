import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import styled from 'styled-components';

import ImageCard from './ImageCard';

const FlexSection = styled.section`
  display: flex;
  max-width: 1200px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const API_URL =
  '/services/feeds/photos_public.gne?tags=cat&format=json&nojsoncallback=true';

class ImagesContainer extends React.Component {
  state = { images: [] };

  componentDidMount() {
    axios
      .get(API_URL)
      .then(res => {
        const items = this.getRandoms(res.data.items, 10);
        this.setState({ images: items });
      })
      .catch(err => {
        console.warn(err);
      });
  }
  getRandoms = (arr, numWanted) => {
    let result = new Array(numWanted);

    if (numWanted > arr.length) {
      throw new RangeError('getRandoms: More numbers wanted then available');
    }
    for (let i = 0; i < numWanted; i++) {
      let randIndex = Math.floor(Math.random() * arr.length);
      result[i] = _.pullAt(arr, randIndex);
    }
    return result;
  };

  render() {
    const { images } = this.state;
    return (
      <FlexSection>
        {images.length !== 0
          ? images.map((img, index) => (
              <ImageCard
                key={img[0].media.m.slice(-16,-6)}
                imgUrl={img[0].media.m}
                imgTitle={img[0].title}
              />
            ))
          : null}
      </FlexSection>
    );
  }
}

export default ImagesContainer;
