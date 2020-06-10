import React from 'react';
import { removeFeature } from '../actions/featureActions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => props.removeFeature(props.feature.name)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { removeFeature }
)(AddedFeature);