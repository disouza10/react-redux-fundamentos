/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

export default () =>
  <div className='app'>
    <h1>Fundamentos React</h1>

    <div className='cards'>
      <Card titulo='#05 - Componente com Filhos' color='#00C8F8'>
        <Familia sobrenome='Santos'>
          <FamiliaMembro nome='Diego' />
          <FamiliaMembro nome='Aline' />
          <FamiliaMembro nome='Barbara' />
        </Familia>
      </Card>

      <Card titulo='#04 - Desafio Aleatório' color='#FA6A900'>
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo='#03 - Fragmento' color='#E94C6F'>
        <Fragmento />
      </Card>

      <Card titulo='#02 - ComParametro' color='#E8B71A'>
        <ComParametro
          titulo='Situação do Aluno'
          aluno='Pedro Silva' nota={9.3} />
      </Card>

      <Card titulo='#01 - Primeiro' color='#588C73'>
        <Primeiro />
      </Card>
    </div>

  </div>
