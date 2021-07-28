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
        rooms: [],
        sortedRooms: [],
        type: 'All',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0
    });

    //format data into array
    const formatData = (items) => {
        return items.map(item => {
            let id = item.sys.id;
            return {...item.fields, id}
        })
    };

    useEffect( () => {
        setForm({...form, rooms: formatData(data), sortedRooms: form.rooms,
            maxPrice: Math.max(...form.rooms.map(item => item.price))})
    },[]);

    //filter rooms
    useEffect( () => {
        if (form.rooms.length === 0) {
            return
        }
        let tempRooms = [...form.rooms]
        //filter by type
        if (form.type !== 'All') {
            tempRooms = tempRooms.filter(item => item.type === form.type)
        }
        //filter by capacity
        if (form.capacity !== 1) {
            tempRooms = tempRooms.filter(item => item.capacity >= form.capacity)
        }
        //filter by price
        if (form.price !== 0) {
            tempRooms = tempRooms.filter(item => item.price <= form.price)
        }

        setForm({...form, sortedRooms: tempRooms })
    },[form.type, form.capacity, form.price]);

    //change form value
    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    };

    return (
      <RoomContext.Provider value={{...form, handleChange}}>
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
