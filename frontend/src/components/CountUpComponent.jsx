import React from 'react';
import CountUp from 'react-countup';

const CountUpComponent = () => {
  return (
    <div>
      <h1>Custom CountUp Example</h1>
      <CountUp className='mycounter'
        start={0}
        end={100}
        duration={3}
        suffix="+"
      />
    </div>
  );
};

export default CountUpComponent;
