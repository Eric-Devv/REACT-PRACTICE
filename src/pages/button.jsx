
function Button(){

//const handle_click = () =>console.log("ouch")
    function handleClicking(event){
        event.target.textContent = "hallo"
    }

    
return(
    <>
    
        <button onClick={(event) =>handleClicking(event)}>Clik me!!</button>
    
    </>
)
}

export default Button;