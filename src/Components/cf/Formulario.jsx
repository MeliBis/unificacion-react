import React, { useState } from 'react'

const Formulario = () => {
    const sendForm =()=>{
        console.log('hola');
    }
    const [body, setBody]=useState('')
    const [title, setTitle]=useState('')

  return (
    <div>
          <h2>formulario</h2>
            <form action="" onSubmit={()=> sendForm()}>
                <div>
                    <label htmlFor="title">Titulo </label>
                    <input type="text" id='title' onChange={(ev)=> setTitle(ev.target.value)}/>
                </div>
                <div>
                    <label htmlFor="body">Publicación </label>
                    <textarea  id='body' onChange={(ev)=> setBody(ev.target.value)} />
                </div>
                <input type="submit" value="enviar" className='btn btn-success'/>
            </form>
    </div>
  )
}

export default Formulario