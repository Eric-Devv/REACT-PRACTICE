/* eslint-disable react/prop-types */
import propTypes from "prop-types"

function Info(props){

return(
<>
    <ul>
        <li>Name: {props.char.name}</li>
        <li>class: {props.char.class}</li>
        <li>Status: {props.char.isActive ? "active" : "not-active"}</li>

    </ul>
</>

)

}

/*Info.propTypes = {
    name: propTypes.string,
    class: propTypes.string,
    isActive: propTypes.bool
}
*/

function Student(){

    const detail = {
        name: "Eric",
        class: "Form1",
        isActive:false,
    }

return(
    <>
    <h2> Student Details:</h2>
    <Info char={detail} />

    </>
)

}

export default Student








