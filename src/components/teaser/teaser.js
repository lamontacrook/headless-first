
import React from 'react';
import PropTypes from 'prop-types';
import Video from '../video';
import Image from '../image/image';
import './teaser.css';


const Teaser = ({ content }) => {
  
  return (
    <React.Fragment>
      <section className={'teaser ' + content.style}>
        <div className='container' itemID={`urn:aemconnection:${content._path}/jcr:content/data/master`} itemfilter='cf' itemType='reference' itemScope>
          {content.asset.__typename === 'MultimediaRef' &&
            (<Video content={content.asset} />)}

          {content.asset.__typename === 'ImageRef' &&
            (<Image src={content.asset._dynamicUrl} />)}

          <div className='content-block'>
            {content.title && content.style === 'hero' && (
              <h1 itemProp='title' itemType='text'>{content.title}</h1>
            )}

            {content.title && content.style === 'featured' && (
              <h2 itemProp='title' itemType='text'>{content.title}</h2>
            )}

            <span className='seperator'></span>

            {content.preTitle && content.style === 'hero' && (
              <h2 itemProp='preTitle' itemType='text'>{content.preTitle}</h2>
            )}

            {content.preTitle && content.style === 'featured' && (
              <h5 itemProp='preTitle' itemType='text'>{content.preTitle}</h5>
            )}


            {content.description && content.style === 'featured' && (
              <p itemProp='description' itemType='richtext'>{content.description.plaintext}</p>
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