import React from "react";
import {v4} from 'uuid';
import InputBox from "./InputBox";

const Header = ({
    label,
    setLabel,
    type,
    setType,
    placeholder,
    setPlaceholder,
    items,
    setItems,
}) => {

    const addItem = () => {
        setItems((prev) => [
            ...prev,
            {
                id: v4(),
                label: label,
                type: type,
                placeholder: placeholder,
            },

        ]);
        setLabel("");
        setPlaceholder("");
        setType("")

    };

    return (

        <>
            <h1> Form</h1>
            <div>
                <InputBox
                    type="text"
                    placeholder="Enter a Label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    />
                <select value={items.type} onChange={(e) => setType(e.target.value)}>
                    <option value="text">text</option>
                    <option value="email">email</option>
                    <option value="password">password</option>
                    <option value="date">date</option>
                    <option value="tel">mobile</option>
                </select>

                <InputBox
                    type="text"
                    placeholder="Enter a placeholder value"
                    value={placeholder}
                    onChange={(e) => setPlaceholder(e.target.value)}
                />
                <button onClick={addItem}>Create Element</button>
            </div>
       
        </>

    );

};

export default Header;