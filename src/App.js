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

    const filteredRooms = (form) => {
        let { rooms,
            type,
            capacity,
            price } = form

        let tempRooms = [...rooms]
        console.log(tempRooms)
        capacity = parseInt(capacity)
        price = parseInt(price)

        //filter by type
        if (type !== 'All') {
            tempRooms = tempRooms.filter(item => item.type === type)
        }

        //filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(item => item.capacity >= capacity)
        }

        //filter by price
        tempRooms = tempRooms.filter(item => item.price <= price);

        setForm({...form, sortedRooms: tempRooms})
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
        // filteredRooms({form});
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
