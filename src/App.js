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
    const [rooms, setRooms] = useState([]);
    const type = 'all';
    const capacity = 1;
    const [price, setPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const formatData = (items) => {
        return items.map(item => {
            let id = item.sys.id;
            return {...item.fields, id}
        })
    };

    useEffect( () => {
        setRooms(formatData(data))
    },[]);

    console.log(rooms)

    const roomContextValue = {rooms, type, capacity, price, minPrice, maxPrice}

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
