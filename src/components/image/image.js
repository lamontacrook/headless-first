import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../utils/context';

const Image = ({ src }) => {
  const context = useContext(AppContext);
  const srcset = context.url.replace(/\/$/, '') + src.replace('width=1900', 'width=');
 
  return (
    <picture>
      <img src={`${context.url.replace(/\/$/, '')}${src}` }
        srcSet={`${srcset}1900 1900w, ${srcset}1200 1200w, ${srcset}900 900w, ${srcset}600 600w`}
      />
    </picture>
  );
};

export default Image;

Image.propTypes = {
  src: PropTypes.string
};