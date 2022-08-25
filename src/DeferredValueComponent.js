import { useState, useDeferredValue, useMemo } from 'react';

const List = ({ input }) => {
  // const num = 20000;
  const num = 20;
  const deferredInput = useDeferredValue(input);

  const createList = () => {
    const listArr = [];
    for (let i = 0; i < num; i++) {
      listArr.push(<div key={i}>{deferredInput}</div>);
    }
    return listArr;
  };

  const longList = useMemo(createList, [deferredInput]);

  // Return an array of <div>s to the Parent Component
  return longList;
};

const DeferredValueComponent = () => {
  const [input, setInput] = useState();

  return (
    <div>
      <h2>11. useDeferredValue Example</h2>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <List input={input} />
      <br />
      <hr />
    </div>
  );
};

export default DeferredValueComponent;
