import React from "react";
import { useState } from "react";
import InputBox from "./InputBox";




const Body = ({ items, output, setOutput}) => {
    const outputFunction = (itemid,value) =>
    {
        setOutput((prev)=>{
            return {...prev,[itemid]:value}
        })
        // console.log(output);
    }
  return (
    <>
        <h1>My forms</h1>
        
        {items.map((item) => {
            return (
            <div key={item.id}>
                <h4>{item.label}</h4>
                <InputBox type={item.type} placeholder={item.placeholder} onChange={(e)=>outputFunction(item.id,e.target.value)}/>
            </div>
            );
        })}
    </>
    );
};

export default Body;

