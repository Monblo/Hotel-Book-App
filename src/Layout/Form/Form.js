import React, {useState} from "react";
import './form.scss';
import {H2} from "../../components/H2/H2";
import {ButtonForm} from "../../components/Button/Button";
import {FormStyled} from "./Form.styles";
import {FormImages} from "./FormImages";
import {CalendarPicker} from "../../components/Calendar/Calendar";

export const Form = () => {
    const [title, setTile] = useState();

    const handleTitleChange = (e) => {
        setTile(e.target.value)
    }

    return (
        <section>
            <H2 title={'book room'} color={({theme}) => theme.colors.title}/>
            <hr />
            <FormStyled>
                {/*room type*/}
                <div>
                    <label className={'label'}>room type</label>
                    <select
                        name='type'
                        id='type'
                        value={title}
                        onChange={handleTitleChange}
                        className={'form__control'} >
                        <option value="all">All</option>
                        <option value="standard">STANDARD ROOM</option>
                        <option value="suite">SUITE DELUXE</option>
                    </select>
                </div>
                {/*guests number*/}
                <div>
                    <label className={'label'}>guests</label>
                    <select
                        name='guests'
                        id='type'
                        value={title}
                        onChange={handleTitleChange}
                        className={'form__control'} >
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                    </select>
                </div>
                {/*price slider*/}
                <div>
                    <label className={'label'}>price</label>
                    <input type='range' name='price' id='price' min='0' max='100'
                    className={'form__input'}/>
                </div>
                {/*date calendar*/}
                <div>
                    <label className={'label'}>date</label>
                    <CalendarPicker />
                </div>
                <ButtonForm text={'SUBMIT'}/>
            </FormStyled>

            <FormImages />
        </section>
    )
}