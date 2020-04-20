import React,{useState} from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Careers from "./views/Careers/careers"
import Classroom from "./views/Classroom/classroom"
import Profile from "./views/Profile/profile"
import Rewards from "./views/Rewards/rewards"
import Chat from "./views/Chat/chat"
import Login from "./views/Login/login"
import Search from "./views/Search/search_result"
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import Ban from "./components/Banner/Titlebanner";
import careerpage from './views/Careers/careerpage';
import EditAvatar from './views/EditAvatar/editavatar';
import { StateProvider } from "./state/globalState"; /*provider for global context*/
import axios from 'axios';


const App = () => {

    const [loaded,setloaded] = useState(false);

// we need a solution to this
/*
    if(!loaded){
        axios.post('/api/career/fill')
      .then(response => {
    
      setloaded(true);
      
          })  
      }
*/


    return (
        <div>
            <StateProvider>
                <NavBar/>
                <Ban/>
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Careers" component={Careers} />
                    <Route exact path="/Classroom" component={Classroom} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/Rewards" component={Rewards} />
                    <Route exact path="/Chat" component={Chat} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/careerpage" component={careerpage} />                    
                    <Route exact path="/Search" component={Search}/>
                    <Route exact path="/EditAvatar" component={EditAvatar}/>
                      <Redirect to="/Home" />
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </StateProvider>
        </div>
  );
}

export default App;
