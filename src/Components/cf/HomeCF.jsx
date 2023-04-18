import React from 'react'
import Lista from './Lista'
import Contador from './Contador'
import Formulario from './Formulario'


const HomeCF = (ev) => {
    
/*     const saludo = idioma === 'es' ? 'hola' : 'hello'
 */  

    return (
    <div className='container border mt-4 border-secondary bg-dark text-white shadow-lg p-3 mb-5  rounded'>
  <div className='row'></div>
 <div className="accordion bg-dark" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <span className='bold'> Lista</span>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <Lista/>
      </div>
    </div>
  </div>


  
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <span className="">Contador</span>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <Contador/>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        Formulario
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div className="accordion-body">
        <Formulario/>
      </div>
    </div>
    
  </div>
  </div>

  </div>

  )
}

export default HomeCF