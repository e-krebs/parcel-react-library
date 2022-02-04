import { FC, useState } from 'react';

export const IncrementButton: FC = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => { setCounter(counter + 1); };

  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>Increment counter</button>
    </div>
  )
};
