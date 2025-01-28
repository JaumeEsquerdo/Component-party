import { TarjetaUsuario } from './components/TarjetaUsuario';
import { ListaTareas } from './components/tareas/ListaTareas';



const lista = [
  { id: 1, nombre: "Antonio", edad: 29, ocupacion: "fontanero" },
  { id: 2, nombre: "Juan" },
  { id: 1, nombre: "Antonia", edad: 49, ocupacion: "administradora" },

];

// Lista de tareas antes de invierno
const tareas = [
  { id: 1, nombre: 'Estudiar React', completada: true },
  { id: 2, nombre: 'Leer un libro', completada: false },
  { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
  { id: 4, nombre: 'Aprender a cocinar', completada: true },
  { id: 5, nombre: 'Ver series', completada: false },
  { id: 6, nombre: 'ir un día a la nieve', completada: false}
  ];


const App = () => {
  return (<>
    <TarjetaUsuario nombre={lista[0].nombre} edad={lista[0].edad} ocupacion={lista[0].ocupacion}/>
    <TarjetaUsuario nombre={lista[1].nombre} edad={lista[1].edad} ocupacion={"no tiene trabajo"} />
    <TarjetaUsuario nombre={lista[2].nombre} edad={lista[2].edad} ocupacion={lista[2].ocupacion}/>

    {/* pasamos aqui el array de tareas a ListaTareas */}
    <ListaTareas  tareas={tareas} />
  </>);
}



export default App
