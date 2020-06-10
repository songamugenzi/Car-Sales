import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      <ol type="1">
        {props.features.length ? (
          props.features.map(item => {
            return (
              <AddedFeature key={item.id} feature={item} />
            )
          })
        ) : (
            <p>You can purchase items from the store.</p>
          )}
      </ol>
    </div>
  );
};

const mapToStateProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(
  mapToStateProps,
  {}
)(AddedFeatures)