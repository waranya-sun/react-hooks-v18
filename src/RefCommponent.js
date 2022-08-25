import { useState, useRef, forwardRef } from 'react';

const AnotherComponent = forwardRef((props, ref) => {
  return (
    <div
      style={{
        borderRadius: '5px',
        padding: '15px',
        backgroundColor: 'lightgoldenrodyellow',
      }}
    >
      <h2 style={{ margin: 0 }}>UseRef Example #2</h2>
      <p>{props.detail}</p>
      <p>Get the focus() by clicking button from Parent component</p>
      <input type='text' ref={ref} />
    </div>
  );
});

const RefComponent = () => {
  const [detail, setDetail] = useState(
    'Another way of using useRef + forwardRef'
  );
  const inputRef = useRef();
  const btnRef = useRef();
  return (
    <div>
      <h2>4. UseRef Example #1</h2>
      <button onClick={() => inputRef.current.focus()}>
        Click here to set the focus() on input in the same component
      </button>
      <br />
      <br />
      <button onClick={() => btnRef.current.focus()}>
        Set focus() of input on a Child Component
      </button>
      <br />
      <br />
      <div>
        Name : <input type='text' ref={inputRef} />
      </div>
      <br />
      <AnotherComponent ref={btnRef} detail={detail} />
      <br />
      <hr />
    </div>
  );
};

export default RefComponent;
