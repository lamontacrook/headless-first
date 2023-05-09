
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Video from '../video';
import Image from '../image/image';
import './teaser.css';
import { AppContext } from '../../utils/context';


const Teaser = ({ content }) => {
  const context = useContext(AppContext);
  
  return (
    <React.Fragment>
      <section className={'teaser ' + content.style}>

        <div className='container'>
          {content.asset.__typename === 'MultimediaRef' &&
            (<Video content={content.asset} context={context} />)}

          {content.asset.__typename === 'ImageRef' &&
            (<Image content={content.asset} context={context} />)}

          <div className='content-block'>
            {content.title && content.style === 'hero' && (
              <h1>{content.title}</h1>
            )}

            {content.title && content.style === 'featured' && (
              <h2>{content.title}</h2>
            )}

            <span className='seperator'></span>

            {content.preTitle && content.style === 'hero' && (
              <h2>{content.preTitle}</h2>
            )}

            {content.preTitle && content.style === 'featured' && (
              <h5>{content.preTitle}</h5>
            )}


            {content.description && content.style === 'featured' && (
              <p>{content.description.plaintext}</p>
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