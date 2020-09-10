import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/pai'
import Filho from './componentes/filho'

// import Saudacao from './componentes/saudacao'

// import {BoaTarde, BoaNoite} from './componentes/multiplos'

// import BomDia from './componentes/bomdia'

// import Primeiro from './componentes/primeiro'

// const elemento = <h1>React 2</h1>

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>
    </div>
    , document.getElementById('root'))