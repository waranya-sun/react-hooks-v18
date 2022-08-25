import { useEffect, useState } from 'react';

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  // useEffect is where you want to create side-effect for your particular component
  // Do things that they are outside of your normal render cycle
  // The point of useEffect is to contain the side-effect
  // In our case, we want to run after every render so we don't give it this second parameter.

  useEffect(() => {
    const timeValue = setTimeout(() => setTime(new Date(), 1000));

    // To prevent the memory leak, have to retuen the function
    return () => clearTimeout(timeValue);
  });
  return (
    <div>
      <h2>2. useEffect Example : {time.toLocaleTimeString()}</h2>
      <hr />
    </div>
  );
};

export default EffectComponent;
