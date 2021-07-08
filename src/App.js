import React, {Component} from "react";
import './App.css';
import {Home} from "./views/Home/Home";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {Booking} from "./views/Booking/Booking";
import {NotFound} from "./views/NotFound/NotFound";

const App = () => {
  return (
   <HashRouter>
       <Switch>
           <Route exact path='/' component={Home}/>
           <Route path='/booking' component={Booking}/>
           <Route path='/*' component={NotFound}/>
       </Switch>
   </HashRouter>
  );
}

export default App;
