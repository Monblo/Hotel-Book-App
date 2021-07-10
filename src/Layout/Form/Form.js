import React from "react";
import './form.scss';
import {H2} from "../../components/H2/H2";
import {P} from "../../components/P/P";
import {ButtonForm} from "../../components/Button/Button";
import {FormStyled} from "./Form.styles";
import {FormImages} from "./FormImages";

export const Form = () => {
    return (
        <div>
            <H2 title={'book room'} color={({theme}) => theme.colors.title}/>

            <FormStyled>
                <div>
                    <P text={'ROOM TYPE'} color={({theme}) => theme.colors.title} align={'none'}/>
                    <select value={''} onChange={''}>
                        <option value="standard">STANDARD ROOM</option>
                        <option value="suite">SUITE DELUXE</option>
                    </select>
                </div>
                <div>
                    <P text={'GUESTS'} color={({theme}) => theme.colors.title} align={'none'}/>
                    <select value={''} onChange={''}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                    </select>
                </div>
                <div>
                    <P text={'DATE'} color={({theme}) => theme.colors.title} align={'none'}/>
                    <select value={''} onChange={''}>
                        <option value=""> </option>
                    </select>
                </div>
                <ButtonForm text={'SUBMIT'}/>
            </FormStyled>

            <FormImages />
        </div>
    )
}