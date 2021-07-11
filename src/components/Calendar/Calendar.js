import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const CalendarPicker = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => setDate(date);

    return (
                <DatePicker
                    placeholderText="select date"
                    selected={date}
                    onChange={onChange}
                />
    )
}