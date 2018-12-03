import React, { useState, useEffect } from 'react';

const Usual = (props) => {
  console.log('props in Usual', props);
  return (
    <div>
            Usual
    </div>
  );
};

const SimpleHoc = (WrappedComponent) => {
  console.log('simpleHoc', WrappedComponent);
  return () => (
    <div>
      <h1>WrappedComponent</h1>
      <WrappedComponent />
    </div>
  );
};
export default SimpleHoc(Usual);
