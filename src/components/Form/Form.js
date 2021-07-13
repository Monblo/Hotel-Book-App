import React, {useState, useContext} from "react";
import '../../App.scss'
import {H2} from "../../components/H2/H2";
import {ButtonForm} from "../../components/Button/Button";
import {FormStyled} from "./Form.styles";
import {FormImages} from "./FormImages";
import {CalendarPicker} from "../../components/Calendar/Calendar";
import {RoomContext} from "../../context";

export const Form = ({rooms}) => {
    //hooks
    const context = useContext(RoomContext);
    const {
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        handleChange
    } = context;

    // //get items from data
    // const getItems = (items, value) => { return [...new Set(items.map(el => el.value))]
    // };
    //
    // //add all to types
    // let types = getItems(rooms, type);
    // types = ['all', ...types];
    // console.log(types)


    return (
        <section>
            <H2 title={'book room'} color={({theme}) => theme.colors.title}/>
            <hr />
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
                        {/*{rooms[type].map((item, index) => <option key={index} value={item}>{item}</option>)}*/}
                        {/*<option value="all">All</option>*/}
                        {/*<option value="standard">STANDARD ROOM</option>*/}
                        {/*<option value="suite">SUITE DELUXE</option>*/}
                    </select>
                </div>
                {/*guests number*/}
                <div>
                    <label htmlFor={'guests'}>guests</label>
                    <select
                        name='capacity'
                        id='capacity'
                        value={capacity}
                        onChange={handleChange}>
                        {/*<option value="one">1</option>*/}
                        <option value="two">2</option>
                        <option value="three">3</option>
                    </select>
                </div>
                {/*price slider*/}
                <div>
                    <label htmlFor={'price'}>price</label>
                    <input type='range' name='price' id='price' min='0' max='100'
                    className={'form__input'}/>
                </div>
                {/*date calendar*/}
                <div>
                    <label htmlFor={'date'}>date</label>
                    <CalendarPicker id={'date'}/>
                </div>
                <ButtonForm text={'SUBMIT'}/>
            </FormStyled>

            <FormImages />
        </section>
    )
}