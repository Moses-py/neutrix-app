import { useEffect, useState } from "react";
import { useEffectOnce, useUpdateEffect } from "usehooks-ts";

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <p>Hello World</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default Test;
