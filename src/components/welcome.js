import React from 'react';
import Counter from '../container/counter';
import Controls from '../container/controls';


// function based "dumb" component with no state
const Welcome = () => {
  return (
    <div>
      <Counter />
      <Controls />
    </div>
  );
};


export default Welcome;
