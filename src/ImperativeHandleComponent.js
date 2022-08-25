import { useState, useRef, useImperativeHandle, forwardRef } from 'react';

const AnotherComponent = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
    };
  });
  return (
    <div>
      <p>
        <input type='text' ref={inputRef} /> (This input will get the focus from
        Parent component)
      </p>
    </div>
  );
});

const ImperativeHandleComponent = () => {
  const passRef = useRef();

  return (
    <div>
      <h2>9. useImperativeHandle Example</h2>
      <button onClick={() => passRef.current.focus()}>
        Set focus() on input child component
      </button>
      <AnotherComponent ref={passRef} />
      <br />
      <hr />
    </div>
  );
};

export default ImperativeHandleComponent;
