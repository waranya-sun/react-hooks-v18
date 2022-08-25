import { useState, useTransition } from 'react';

const TransitionComponent = () => {
  // const ARRAY_SIZE = 20000;
  const ARRAY_SIZE = 20;
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = e => {
    setInput(e.target.value);

    startTransition(() => {
      const listArray = [];
      for (let i = 0; i < ARRAY_SIZE; i++) {
        listArray.push(e.target.value);
      }
      setList(listArray);
    });
  };

  return (
    <div>
      <h2>12. useTransition Example</h2>
      <input
        type='text'
        value={input}
        onChange={handleChange}
        style={{ marginRight: '20px' }}
      />
      {isPending
        ? 'Loading...'
        : list.map((l, i) => {
            return <div key={i}>{l}</div>;
          })}
      <br />
      <br />
      <hr />
    </div>
  );
};

export default TransitionComponent;
