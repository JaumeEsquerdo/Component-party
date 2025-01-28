import { TarjetaUsuario } from './components/TarjetaUsuario';

const lista = [
  { id: 1, nombre: "Antonio", edad: 29, ocupacion: "fontanero" },
  { id: 2, nombre: "Juan" },
  { id: 1, nombre: "Antonia", edad: 49, ocupacion: "administradora" },

];


const usuarios = {
  nombre:"Marta",
  edad: 15,
  ocupacion: "estudiante"
}

const App = () => {
  return (<>
    <TarjetaUsuario nombre={lista[0].nombre} edad={lista[0].edad} ocupacion={lista[0].ocupacion}/>
    <TarjetaUsuario nombre={lista[1].nombre} edad={lista[1].edad} ocupacion={"no tiene trabajo"} />
    <TarjetaUsuario nombre={lista[2].nombre} edad={lista[2].edad} ocupacion={lista[2].ocupacion}/>
  </>);
}



export default App
