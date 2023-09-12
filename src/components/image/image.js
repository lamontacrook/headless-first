import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ asset }) => {

  const {_authorUrl, _dynamicUrl} = asset;
  const url = new URL(_authorUrl);

  const srcset = [
    `${url.origin + _dynamicUrl} 1900w`,
    `${url.origin + _dynamicUrl.replace('width=1900', 'width=1200')} 1200w`,
    `${url.origin + _dynamicUrl.replace('width=1900', 'width=900')} 900w`,
    `${url.origin + _dynamicUrl.replace('width=1900', 'width=')} 600w`
  ];

  return (
    <picture>
      <img src={`${_authorUrl}` }
        srcSet={srcset.join(',')}
      />
    </picture>
  );
};

export default Image;

Image.propTypes = {
  asset: PropTypes.object
};