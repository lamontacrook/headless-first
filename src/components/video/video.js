import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ content, context }) => {
  let poster = content._authorUrl;
  poster += '/jcr%3Acontent/renditions/cq5dam.zoom.2048.2048.jpeg';
  
  return (<video
    autoPlay
    playsInline
    muted
    loop
    src={content._publishUrl}
    poster={poster} />);
};

Video.propTypes = {
  content: PropTypes.object,
  context: PropTypes.object
};

export default Video;
