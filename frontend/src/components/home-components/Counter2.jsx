import "../../styles/Counter.css";
import React, { useState, useEffect } from 'react';

function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the counter automatically
      setCount((prevCount) => prevCount + 1);
    }, 150); // Increment every 1000 milliseconds (1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {
    // Check if the counter has reached a specific value (e.g., 150)
    if (count >= 100) {
      // Reset the counter to 100
      setCount(0);
    }
  }, [count]); // Dependency on the count variable to trigger the effect when count changes

  return (
    <div className='counter-parent'>
      
      <h3 className='mycounter text-center'>{count}+</h3>
      <h5 className='pb-3 m-0 text-center'>100+ SUCCESSFUL COACHING SESSION</h5>
    </div>
  );
}

export default Counter2;



