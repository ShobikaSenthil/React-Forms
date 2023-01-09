import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import SubmitButton from "./SubmitButton";

function MainForm() {

  const[label,setLabel]=useState("");
  const [type, setType] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [items, setItems] = useState([]);
  const [output,setOutput] = useState({});
  const[display,setDisplay]=useState(false);

  return (

    <div>
    
    <Header label={label} 
    setLabel={setLabel} 
    type={type} 
    setType={setType} 
    placeholder={placeholder}
    setPlaceholder={setPlaceholder} 
    items={items}
    setItems={setItems}
    />

    <Body items={items} output={output} setOutput={setOutput}/>
    <SubmitButton display={display} setDisplay={setDisplay} output={output} items={items}/>
    </div>

  );

}



export default MainForm;