import { useState, useMemo } from 'react';

const fibonacci = n => {
  console.log("I'm also updated");
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [num, setNum] = useState(1);

  // useMemo, takes a function and array of dependencies
  // This help to avoid expensive calculations on every render
  const computedExpensiveValue = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <h2 style={{ color: isGreen ? 'black' : 'green' }}>6. useMemo Example</h2>
      <button onClick={() => setIsGreen(!isGreen)}>
        Change Text Color State
      </button>
      <p>
        When the color state changes then component is re-rendered but the
        Fibonacci function (Expensive calculation) will not get re-calculate
        because of useMemo memoized the value for us.
      </p>
      <br />
      <div>
        Fibonacci of {num} is {computedExpensiveValue}
      </div>
      <br />
      <button onClick={() => setNum(num + 1)}>Add Num of Fibonacci</button>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default MemoComponent;
