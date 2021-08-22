import React, {useContext, useState} from "react";
import '../../App.scss'
import {H2} from "../H2/H2";
import {ButtonForm} from "../Button/Button";
import {FormStyled} from "./Form.styles";
import {RoomContext} from "../../Layout/Context/RoomContext";
import {FormImages} from "./FormImages";
import {db} from "../../firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Form = () => {
    const {
        rooms,
        sortedRooms,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        handleChange
    } = useContext(RoomContext);
    const [bookingDate, setBookingDate] = useState(new Date());
    const [hidden, setHidden] = useState(false);

    // get items from data
    const getItems = (items, value) => {
        return items.map(el => el[value])
    };

    // get all types
    let types = getItems(rooms, 'type');
    types = ['All', ...types];

    //get all capacity
    let guests = getItems(rooms, 'capacity');
    guests = [1, ...guests];

    const handleData = (date) => {
        setBookingDate(date)
    };

    const handleSubmit = () => {
        addNewGiveawayData()
        setHidden(true);
    };

    //add data to firestore from state
    const addNewGiveawayData = () => {
        db.collection('booking')
            .add({
                type: type,
                capacity: capacity,
                date: bookingDate
            })
            .then(r => console.log(r))
            .catch(err => console.log(err))
    };

    return (
        <section>
            <H2 title={'book room'} color={({theme}) => theme.colors.title}/>
            <hr/>
            {hidden ? '' : <FormStyled onSubmit={handleSubmit}>
                {/*select type*/}
                <div>
                    <label htmlFor={'type'}>room type</label>
                    <select
                        name='type'
                        id='type'
                        value={type}
                        onChange={handleChange}
                    >
                        {types.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                {/*guests number*/}
                <div>
                    <label htmlFor={'guests'}>guests</label>
                    <select
                        name='capacity'
                        id='capacity'
                        value={capacity}
                        onChange={handleChange}
                    >
                        {guests.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                {/*price slider*/}
                <div>
                    <label htmlFor={'price'}>price ${price}</label>
                    <input
                        type='range'
                        name='price'
                        id='price'
                        step='50'
                        min={minPrice}
                        max={maxPrice}
                        onChange={handleChange}
                        className={'form__input'}
                    />
                </div>
                {/*date picker*/}
                <div>
                    <label htmlFor={'date'}>date</label>
                    <DatePicker
                        placeholderText="select date"
                        selected={bookingDate}
                        value={bookingDate}
                        onChange={handleData}
                    />
                </div>
                <ButtonForm text={'SUBMIT'} type='submit'/>
            </FormStyled>}
            {hidden ? '' : <FormImages rooms={sortedRooms} getItems={getItems}/>}
            {hidden ? <h3 style={{
                position: 'absolute',
                top: '260px',
                left: '50%',
                transform: 'translate(-50%)'
            }}>YOUR RESERVATION IS COMPLETE</h3> : ''}
        </section>
    )
}