import React, {useContext} from "react";
import '../../App.scss'
import {H2} from "../H2/H2";
import {ButtonForm} from "../Button/Button";
import {FormStyled} from "./Form.styles";
import {CalendarPicker} from "../Calendar/Calendar";
import {RoomContext} from "../../Layout/Context/RoomContext";
import {FormImages} from "./FormImages";

export const Form = () => {
    const context = useContext(RoomContext);
    const {rooms, sortedRooms, type, capacity, price, minPrice, maxPrice, handleChange} = context;
    // console.log(rooms)
    console.log(context)

    // get items from data
    const getItems = (items, value) => {
        return items.map(el => el[value])
    };

    // get all types
    let types = getItems(rooms, 'type');
    types = ['All', ...types];

    // //get all capacity
    let guests = getItems(rooms, 'capacity');
    guests = [1, ...guests];

    return (
        <section>
            <H2 title={'book room'} color={({theme}) => theme.colors.title}/>
            <hr/>
            <FormStyled>
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
                    <CalendarPicker id={'date'}/>
                </div>
                <ButtonForm text={'SUBMIT'}/>
            </FormStyled>
            <FormImages rooms={sortedRooms} getItems={getItems}/>
        </section>
    )
}