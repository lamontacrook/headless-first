import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../utils/context';

const Image = ({ src }) => {
  const context = useContext(AppContext);
  const srcset = [
    `${context.url.replace(/\/$/, '') + src} 1900w`,
    `${context.url.replace(/\/$/, '') + src.replace('width=1900', 'width=1200')} 1200w`,
    `${context.url.replace(/\/$/, '') + src.replace('width=1900', 'width=900')} 900w`,
    `${context.url.replace(/\/$/, '') + src.replace('width=1900', 'width=')} 600w`
  ];
 
  return (
    <picture>
      <img src={`${context.url.replace(/\/$/, '')}${src}` }
        srcSet={srcset.join(',')}
      />
    </picture>
  );
};

export default Image;

Image.propTypes = {
  src: PropTypes.string
};
