const SubmitButton = ({display,setDisplay,output,items}) =>
{
    const setDisplayFunc=()=>{
        setDisplay(!display);
    }
    return (
        <>
        <div>
            <button onClick={setDisplayFunc}>Submit</button>
            {(display) && items.map((item)=>{
                return(
                    <div key={item.id}>
                        <h1>{output[item.id]}</h1>
                    </div>
                )
            })}
        
        </div>
        </>
    )
}
export default SubmitButton;