import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/LoginForm/Login';
import CreateAccount from './component/CreateAccount/CreateAccount';
import { createContext, useState } from 'react';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import ServiceDetail from './component/ServiceDetail/ServiceDetail';
import Admin from './component/Admin/Admin';

export const UserContext = createContext() 


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/home'>
              <Home />
          </Route>
          <Route path='/login'>
              <Login/>
          </Route>
          <Route path='/createAccount'>
              <CreateAccount/>
          </Route>
          <PrivetRoute path="/serviceDetail">
              <ServiceDetail />
          </PrivetRoute>
          <PrivetRoute path='/admin'>
              <Admin />
          </PrivetRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
