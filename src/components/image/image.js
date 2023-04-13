import React from 'react';
import PropTypes from 'prop-types';

let renditions = {
  '1900': 'web-optimized-xlarge.webp',
  '1200': 'web-optimized-large.webp',
  '900': 'web-optimized-medium.webp',
  '600': 'web-optimized-medium.webp'
};

const SrcSet = (src) => {
  const srcset = Object.keys(renditions).map((key) => (
    `${src}/jcr:content/renditions/${renditions[key]} ${key}w`
  ));

  return (srcset.join(', '));
};

const Image = ({ asset, context }) => {
  const width = asset.width;
  const height = asset.height;

  return (
    <picture>
      <img src={`${context.url}/jcr:content/renditions/${renditions[Object.keys(renditions).pop()]}`} width={width} height={height} srcSet={SrcSet(context.url)} />
    </picture>
  );
};

export default Image;

Image.propTypes = {
  asset: PropTypes.object,
  config: PropTypes.object,
  context: PropTypes.object
};

SrcSet.propTypes = {
  src: PropTypes.string,
};
