import React, {useEffect, useState} from "react";
import './App.scss';
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
import {RoomContext} from "./Layout/Context/RoomContext";
import data from "./data";

const App = () => {

    const [form, setForm] = useState({
        rooms: {},
        type: 'All',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 100
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    };

    const formatData = (items) => {
        return items.map(item => {
            let id = item.sys.id;
            return {...item.fields, id}
        })
    };

    useEffect( () => {
        setForm({...form, rooms: formatData(data)})
        // console.log(form.rooms)
    },[]);


    const roomContextValue = {...form, handleChange}

  return (
      <RoomContext.Provider value={roomContextValue}>
   <HashRouter>
       <>
       <Switch>
           <Route exact path='/' component={Home}/>
           <Route path='/booking' component={Booking}/>
           <Route path='/*' component={NotFound}/>
       </Switch>
       </>
   </HashRouter>
      </RoomContext.Provider>
  );
}

export default App;
