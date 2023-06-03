import style from './Card.module.css'
function Card(props){
    return(
        <>
        <h2> Auto : {props.auto} </h2>
        <p>Su patente es : {props.patente}</p>
        </>

    )

}
export default Card;