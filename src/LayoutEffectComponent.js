import { useLayoutEffect, useState, useRef } from 'react';

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const textareaRef = useRef();

  // useLaytoutEffect will be guaranteed that it is called after render which it is synchronous, while useEffect is asynchronous
  useLayoutEffect(() => {
    setWidth(textareaRef.current.clientWidth);
    setHeight(textareaRef.current.clientHeight);
  });

  return (
    <div>
      <h2>8. useLayotEffect Example</h2>
      <p>Textarea Width : {width}px</p>
      <p>Textarea Height : {height}px</p>
      <br />
      <textarea
        onClick={() => {
          setWidth(0);
        }}
        ref={textareaRef}
      />
      <br />
      <br />
      <hr />
    </div>
  );
};

export default LayoutEffectComponent;
