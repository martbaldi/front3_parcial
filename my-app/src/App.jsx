import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Formulario'
import Card from './Card'

function App() {
  const [dato,setDato] = useState('')
  const [error,setError] = useState(false)


  const handleDatos=(datos)=>{
    setDato(datos);
   // console.log(datos.error)
   // console.log(datos.auto)
   // console.log(datos.patente)
   setError(datos.error)
  }
  
  console.log(dato.error)
   return (
    <>
      <h1>MODELO DE AUTO Y PATENTE
      </h1>
      <Formulario onDatos = {handleDatos} />
      { dato.error== false || error == false ?  <Card auto= {dato.auto} patente = {dato.patente}/> : <p> {dato.error}</p>  }
      
    </>
  )
}

export default App
