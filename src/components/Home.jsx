import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({state}) => {

    const navegarHacia = useNavigate()

    // const temporal = 79845616516;

    const apuntarPersonaje = () => {
        console.log("la funcion si se ejecuta");
       
        navegarHacia(`/about/${state}`);  // redireccionamiento
    }

  return (
    <>
    <div>Componente Home</div>
    <button onClick={apuntarPersonaje}> Ir hacia personaje</button>
    </>
  )
}

export default Home