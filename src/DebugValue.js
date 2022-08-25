import { useState, useDebugValue, useEffect } from 'react';

const DebugValueComponent = () => {
  const [isGoodWeather, setIsGoodWeather] = useState(true);

  useEffect(() => {
    setIsGoodWeather(Math.random() > 0.5);
  }, []);
  useDebugValue(isGoodWeather ? 'It is a good day' : 'Weather is bad today');
  return (
    <div>
      <h2>10. UseDebugValue Example</h2>
      <p>
        How is weather today? :{' '}
        <span style={{ fontWeight: 'bold' }}>
          {isGoodWeather ? 'Good' : 'Bad'}
        </span>
      </p>

      <hr />
    </div>
  );
};

export default DebugValueComponent;
