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
    'data-aue-model': content._model._path
  };

  return (
    <div className='imagelist' {...editorProps}>
      <div className='cards'>
        {content.listItems && content.listItems.map((items) => (
          <Cards key={items._path} card={items} />
        ))}
      </div>
    </div>
  );
};

const Cards = ({ card }) => {
  const editorProps = {
    'data-aue-type': 'reference',
    'data-aue-behavior': 'component',
  };
  console.log(card);
  return (
    <div className='card' data-aue-label={parseName(card)} key={card._path} data-aue-resource={`urn:aemconnection:${card._path}/jcr:content/data/master`} {...editorProps}>
      <Image asset={card.asset} />
      <h3>{card._metadata && parseName(card)}</h3>
      <div data-aue-prop='description' data-aue-type='richtext'>{mapJsonRichText(card.description.json)}</div>
    </div>
  );
};

Cards.propTypes = {
  card: PropTypes.object
};

const parseName = ({ _metadata }) => {
  if (!_metadata) return;
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