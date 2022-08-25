import { useState, useEffect, useCallback, memo } from 'react';

// Still have to use React.memo because the time state is updated every 1 seconds, make this component to re-render too, but when you put React.memo, this component is only updated when expensiveFunction or count change
const ExpensiveComputationComponent = memo(({ expensiveFunction, count }) => {
  return (
    <div>
      <div>Result of Expensive Function : {expensiveFunction(count)}</div>
      <p>Last update : {new Date().toLocaleTimeString()}</p>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timeValue = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timeValue);
  });

  // Everytime the component re-renders, the function will re-create too, as the result the value of expensiveFunction props is changed everytime, so ExpensiveComputationComponent component is re-rendered too.
  const fibonacci = n => {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h2>7. useCallback Example</h2>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={() => setCount(count + 1)}>
        Current count : {count}
      </button>
      <br />
      <br />
      <ExpensiveComputationComponent
        // Empty array means the fibonacci will always be the same, never change
        expensiveFunction={useCallback(fibonacci, [])}
        count={count}
      />
      <hr />
    </div>
  );
};

export default CallbackComponent;
