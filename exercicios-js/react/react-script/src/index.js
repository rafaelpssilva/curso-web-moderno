import React from 'react'
import ReactDom from 'react-dom'

import Primeiro from './componentes/primeiro'
import BomDia from './componentes/bom-dia'

const elemento = <h1>Reacthchfhfbfbbxbs</h1>

ReactDom.render(<BomDia nome="Rafael" idade={10} />, document.getElementById('root'))