import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Careers from "./views/Careers/careers"
import Classroom from "./views/Classroom/classroom"
import Profile from "./views/Profile/profile"
import Rewards from "./views/Rewards/rewards"
import Chat from "./views/Chat/chat"
import Login from "./views/Login/login"
import Register from "./views/Register/register"
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Careers" component={Careers} />
        <Route exact path="/Classroom" component={Classroom} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Rewards" component={Rewards} />
        <Route exact path="/Chat" component={Chat} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
