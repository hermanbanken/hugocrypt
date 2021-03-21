import PropTypes from 'prop-types';
import React from 'react';

export default function Preview(props) {
  console.log("UsersPreview", props);
  if (props.value) {
    return <div>{ props.value }</div>;
  } else {
    return <div>empty</div>;
  }
}

// Preview.propTypes = {
//   value: PropTypes.node,
// };