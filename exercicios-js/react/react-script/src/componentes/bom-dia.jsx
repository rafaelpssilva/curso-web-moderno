import React from 'react'

// Envolvidos em um fragment (separados no document)
export default props => 
    <React.Fragment>
        <h1>Bom dia {props.nome} {props.idade}</h1>
        <h2>Até breve</h2>
    </React.Fragment>


// Envolvidos em uma div
// export default props => 
//     <div>
//         <h1>Bom dia {props.nome} {props.idade}</h1>
//         <h2>Até breve</h2>
//     </div>

// Envolvidos em um array
// export default props => [
//      <h1>Bom dia {props.nome} {props.idade}</h1>,
//      <h2>Até breve</h2> 
// ]