import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/DashBoard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;