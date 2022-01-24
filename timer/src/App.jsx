import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000);
  }, [count]);
  
  return (
    <p>Timer: {count}</p>
  );
}

export default App;
