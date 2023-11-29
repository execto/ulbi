import { useState } from "react";

import classes from "./style.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button className={classes.button} onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  );
};
