import React from 'react'
const nombres= [
    'Meli',
    'Jorge',
    'Cata',
    'Erik',
    'Mario',
    'Luis'
]

const Lista = () => {
    const nombre= "Melissa";

  return (
    <div>
    <h1>Hola {nombre} </h1>
        <h2 className='fw-lighter'>Lista de amigos</h2>
        {
            nombres.map((nombre, index)=> {
                return <li key={index}>{nombre}</li>
            })
        }

    </div>
  )
}

export default Lista