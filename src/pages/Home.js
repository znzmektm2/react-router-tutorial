import React, { useEffect } from 'react';

const Home = ({history}) => {
  
  useEffect(() => {
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?');
    return () => {
      unblock();
    };
  }, [history]);
  return (
    <div>
      <h2>홈</h2>
      <button onClick={() => {
        history.push('/about/javascript')
      }}>자바스크립트를 사용하여 이동</button>
    </div>
  );
};

export default Home;