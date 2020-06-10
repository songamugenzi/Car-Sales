import React from 'react';

const Total = props => {
  const totalAmount = props.car.price + props.additionalPrice;
  return (
    <div className="content">
      <h4>{`Total Amount: $${totalAmount}`}</h4>
    </div>
  );
};

export default Total;
