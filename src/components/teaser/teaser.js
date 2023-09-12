
import React from 'react';
import PropTypes from 'prop-types';
import { mapJsonRichText } from '../../utils/renderRichText';
import Image from '../image/image';
import './teaser.css';


const Teaser = ({ content }) => {
  const editorProps = {
    itemID: `urn:aemconnection:${content._path}/jcr:content/data/master`,
    itemfilter: 'cf',
    itemType: 'reference',
    'data-editor-itemlabel': 'Hero'
  };

  return (
    <React.Fragment>
      <section className={'teaser ' + content.style} {...editorProps} itemScope>
        <div className='container'>
       
          {content.asset.__typename === 'ImageRef' &&
            (<Image asset={content.asset} />)}

          <div className='content-block'>
            {content.title && content.style === 'hero' && (
              <h1 itemProp='title' itemType='text' data-editor-itemlable='Title'>{content.title}</h1>
            )}

            {content.title && content.style === 'featured' && (
              <h2 itemProp='title' itemType='text' data-editor-itemlable='Title'>{content.title}</h2>
            )}

            <span className='seperator'></span>

            {content.preTitle && content.style === 'hero' && (
              <h2 itemProp='preTitle' itemType='text' data-editor-itemlable='Pre-Title'>{content.preTitle}</h2>
            )}

            {content.preTitle && content.style === 'featured' && (
              <h5 itemProp='preTitle' itemType='text' data-editor-itemlable='Pre-Title'>{content.preTitle}</h5>
            )}


            {content.description && content.style === 'featured' && (
              <p itemProp='description' itemType='richtext'>{mapJsonRichText(content.description.json)}</p>
            )}     
          </div>
        </div>

        <div className='arrow'></div>

      </section>

    </React.Fragment>
  );
};

Teaser.propTypes = {
  content: PropTypes.object
};

export default Teaser;
