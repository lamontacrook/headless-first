import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image/image';
import { mapJsonRichText } from '../../utils/renderRichText';

import './imagelist.css';

const ImageList = ({ content }) => {

  const editorProps = {
    'data-aue-resource': `urn:aemconnection:${content._path}/jcr:content/data/master`,
    'data-aue-type': 'container',
    'data-aue-label': 'ImageList',
    'data-aue-behavior': 'component',
  };

  return (
    <div className='imagelist' {...editorProps}>
      {content.items && content.items.map((items) => (
        <Cards key={items} card={items.listItems} />
      ))}
    </div>
  );
};

const Cards = ({ card }) => {
  
  const editorProps = {
    'data-aue-resource': `urn:aemconnection:${card._path}/jcr:content/data/master`,
    'data-aue-type': 'reference',
    'data-aue-label': parseName(card),
    'data-aue-behavior': 'component',
  };

  return (
    <div className='cards'>
      <div className='card' key={card._path} {...editorProps}>
        <Image asset={card.asset} />
        <h3>{card._metadata && parseName(card)}</h3>
        <div data-aue-prop='description' data-aue-type='richtext'>{mapJsonRichText(card.description.json)}</div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  card: PropTypes.array
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