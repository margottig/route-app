import React from 'react'
import { useParams } from 'react-router-dom';

const About = ({state}) => {

    const {numero} = useParams();
    console.log(numero);

  return (
    <div>
        <h1> Sobre mi</h1>
        <p> El numero que buscas es el: {numero} </p>
        <p> El personaje al que apuntas es: {state[numero].personaje}</p>
    </div>
  )
}

export default About