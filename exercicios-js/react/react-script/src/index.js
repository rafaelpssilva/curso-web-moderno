import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/primeiro'
// import BomDia from './componentes/bom-dia'

import Multi from './componentes/multiplos'


ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Rafa" />
        <Multi.BoaNoite nome="Rafael" /> 
    </div>
, document.getElementById('root'))
