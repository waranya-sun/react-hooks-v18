import { useState } from 'react';

const StateComponent = () => {
  const [isBlue, setIsBlue] = useState(true);

  const handleColor = () => {
    setIsBlue(!isBlue);
  };

  return (
    <div>
      <h2
        style={{
          display: 'inline-block',
          marginRight: '15px',
          color: `${isBlue ? 'blue' : 'hotpink'}`,
        }}
      >
        <span style={{ color: 'black' }}>1. </span>useState Example
      </h2>
      <button onClick={handleColor}>
        {isBlue ? 'Set to Pink' : 'Set to Blue'}
      </button>
      <hr />
    </div>
  );
};

export default StateComponent;
