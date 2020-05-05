import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'component/Menu';

const App = () => {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path='/about' component={About}/> */}
      <Route path='/about/:name?' component={About}/>
      <Route path='/posts' component={Posts}/>
    </div>
  );
};

export default App;