import { useState } from 'react'
import style from './Formulario.module.css'

function Formulario (props) {

    const [auto,setAuto] = useState('');
    const [patente,setPatente]=useState('');
    const [error,setError] = useState(false);
    
    const validarAuto =(auto)=>{
        const sinEspacios = auto.trim();

if (sinEspacios.length > 3) {
return true;
} else {
return false;
}
};

    
    const validarPatente =(patente)=>{
        const sinEspacios = patente.trim();

if (sinEspacios.length > 6) {
return true;
} else {
return false;
}

    }
    
    const onChangeAuto=(e)=>{
        setAuto(e.target.value);
    }
    const onChangePatente=(e)=>{
        setPatente(e.target.value);
    }
    const handlerSubmit=(e)=>{
        e.preventDefault();
        const esAutoValido = validarAuto(auto);
        const esPatenteValido = validarPatente(patente);
       
        if( !esAutoValido || !esPatenteValido)
        {
            setError('Por favor chequea que la información sea correcta')
            //console.log('Por favor chequea que la información sea correcta')
        }
        setError('');
        const datos = {
            auto,
            patente,
            error
        }
       
      props.onDatos(datos)
    }
   
    return (
         <>     
        <form className={style.form}   onSubmit={(e)=>{ handlerSubmit(e)}}>
        <input className={style.input} onChange={(e) => onChangeAuto(e)} value={auto || '' } type="text" placeholder="Ingrese modelo de auto" />
        <input className={style.input} onChange={(e)=> onChangePatente(e)} value={patente || ''} type="text" placeholder="Ingrese la patente"/>
      
        <button className={style.button} type='submit'  >Enviar</button>
         
        </form>
        
        
        </>
    )

}
export default Formulario;