import { useState } from 'react'

import './css/App.css'

import Ej1 from './componentes/Ej1'
import Ej3 from './componentes/Ej3'
import Contador from './componentes/Ej4-contador'
import Pantalla from './componentes/Ej5-pantalla'
import MontadorComponente from './componentes/MontadorComponente'


function App() {


  return (
    <>
      <Ej1 />
      <Ej3 />
      <Contador />
      <Pantalla />
      <MontadorComponente />
    </>
  )
}

export default App
