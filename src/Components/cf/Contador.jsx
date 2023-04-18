import React, {useState} from 'react'

const Contador = () => {
    const [conteo, setConteo]= useState(0)
    const [name, setName]= useState('')
    /* const [title, setTitle] =useState('')
    const [body, setBody] =useState('') */
    
    const disminuir =()=>{
        setConteo(conteo-1)
    }
  return (
    <div>
         
         <h2>Contador</h2>
        <p className='font-monospace'>Precionado: {conteo}</p>
        <button className='btn btn-success' onClick={ ()=> setConteo(conteo+1)}>Aumentar</button>
        <button className='btn btn-secondary' onClick={disminuir}>disminuir</button><br />
        <hr />
        {/* sintaticEvent */}
        <input type="text" onChange={(ev)=> setName(ev.target.value)} />
        <p>Hola {name}</p>

    </div>
  )
}

export default Contador