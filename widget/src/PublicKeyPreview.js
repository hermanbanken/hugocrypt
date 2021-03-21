import PropTypes from 'prop-types';
import React from 'react';

export default function Preview({ value }) {
  console.log("PublicKeyPreview", this);
  if (value) {
    return <div>{ value }</div>;
  } else {
    return <div>empty</div>;
  }
}

Preview.propTypes = {
  value: PropTypes.node,
};