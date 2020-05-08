import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'component/Menu';
import AsyncSplitMe from 'component/AsyncSplitMe';

const App = () => {
  return (
    <div>
      <Menu/>
      {/* <AsyncSplitMe/> */}
      <Route exact path="/" component={Home}/>
      {/* <Route exact path='/about' component={About}/> */}
      <Route path='/about/:name?' component={About}/>
      <Route path='/posts' component={Posts}/>
    </div>
  );
};

export default App;