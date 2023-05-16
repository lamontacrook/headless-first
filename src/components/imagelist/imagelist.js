import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image/image';
import { mapJsonRichText } from '../../utils/renderRichText';

import './imagelist.css';

const ImageList = ({ content }) => {

  return (
    <div className='imagelist'>
      {content.items && content.items.map((items) => (
        <Cards key={items} content={items.listItems} />
      ))}

    </div>
  );
};

const Cards = ({ content }) => {
  return (
    <div className='cards'>
      {content && content.map((card) => (
        <div className='card' key={card._path}>
          <Image src={card.asset._dynamicUrl} />
          <h3>{card._metadata && parseName(card)}</h3>
          <div>{mapJsonRichText(card.description.json)}</div>
        </div>
      ))}
    </div>
  );
};

Cards.propTypes = {
  content: PropTypes.array
};

const parseName = ({ _metadata }) => {
  let cardName = '';
  _metadata.stringMetadata.map((item) => {
    if (item.name === 'title') {
      cardName = item.value;
    }
  });
  return cardName;
};

ImageList.propTypes = {
  content: PropTypes.object
};

export default ImageList;