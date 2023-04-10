
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Video from '../video';
import { Link } from 'react-router-dom';
import './teaser.css';
import { AppContext } from '../../utils/Context';


const Teaser = ({ content }) => {
  const context = useContext(AppContext);
  content = content.component && content.component.item;
  
  useEffect(() => {

  }, []);
  
  return (
    <React.Fragment>
      <section className={'teaser ' + content.style} data-model={content.title} data-fragment={content._path}>

        <div className='container'>
          {content.asset && Object.prototype.hasOwnProperty.call(content.asset, 'format') &&
            (<Video content={content.asset} context={context} />)}

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

            {/* {content.callToAction && content.callToActionLink && content.style === 'featured' && (
              <Link to={LinkManager(content.callToActionLink._path, config, context)} className='button'>{content.callToAction}</Link>
            )} */}
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
