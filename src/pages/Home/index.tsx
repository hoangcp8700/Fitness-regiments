import { useState } from 'react';
import { Button } from 'antd';

import reactLogo from '@/assets/images/react.svg';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='wrapper-logo mb-10 rounded-full '>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <Button type='primary'>Button</Button>
      </div>
      <h1 className='text-3xl font-bold text-red-500 underline text-center'>Vite + React</h1>
      <div className='card'>
        <button type='button' onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default Home;
