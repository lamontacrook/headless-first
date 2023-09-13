import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image/image';
import { mapJsonRichText } from '../../utils/renderRichText';

import './imagelist.css';

const ImageList = ({ content }) => {

  return (
    <div className='imagelist'>
      {content.items && content.items.map((items) => (
        <Cards key={items} card={items.listItems} />
      ))}
    </div>
  );
};

const Cards = ({ card }) => {
  const editorProps = {
    itemfilter: 'cf',
    itemType: 'reference',
  };

  return (
    <div className='cards'>
      <div className='card' key={card._path} data-editor-itemlabel={parseName(card)} {...editorProps} itemID={`urn:aemconnection:${card._path}/jcr:content/data/master`} itemScope>
        <Image asset={card.asset} />
        <h3>{card._metadata && parseName(card)}</h3>
        <div itemProp="description" itemType="richtext">{mapJsonRichText(card.description.json)}</div>
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