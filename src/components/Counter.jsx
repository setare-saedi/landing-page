import { useState, useEffect } from 'react';

function Counter({ count }) {
  const [loadCounter, setLoadCounter] = useState(0);

  useEffect(() => {
    let interVal = setInterval(() => {
      setLoadCounter(prevCount => prevCount + 1)
    }, 30)

    if (loadCounter === count) {
      clearInterval(interVal)
    }
    return () => clearInterval(interVal)

  }, [loadCounter])

  return (
    <>
      {loadCounter}
    </>
  );
}

export default Counter;