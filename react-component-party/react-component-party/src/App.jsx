import { TarjetaUsuario } from './components/TarjetaUsuario';
import { ListaTareas } from './components/tareas/ListaTareas';
import PerfilUsuario from './components/PerfilUsuario';
import GaleriaImagenes from './components/GaleriaImagenes';
import BlogPost from './components/BlogPost';



const lista = [
  { id: 1, nombre: "Antonio", edad: 29, ocupacion: "fontanero" },
  { id: 2, nombre: "Juan", edad: null, ocupacion: "" },
  { id: 3, nombre: "Antonia", edad: 49, ocupacion: "administradora" },

];

// Lista de tareas antes de invierno
const tareas = [
  { id: 1, nombre: 'Estudiar React', completada: true },
  { id: 2, nombre: 'Leer un libro', completada: false },
  { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
  { id: 4, nombre: 'Aprender a cocinar', completada: true },
  { id: 5, nombre: 'Ver series', completada: false },
  { id: 6, nombre: 'ir un día a la nieve', completada: false }
];


const App = () => {

  // PerfilUsuario (Objeto Anidado)
  const userData = {
    nombre: 'El Barto',
    email: 'elbarto@fox.com',
    img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
    direccion: {
      calle: 'Calle Falsa 123',
      ciudad: 'Springfield',
      codigoPostal: '12345'
    }
  };


  // GaleriaImagenes (Array de Objetos)
  // https://rickandmortyapi.com/
  const imageList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];

  //children es como un espacio en blanco dentro de un componente donde puedes poner lo que quieras y sirve para pasarle contenido a un componente
  // los props son fijos y los children son variables
  // children se escribe dentro de las etiquetas de apertura y cierre de un componente y se pasa como un prop más

  return (<>
    <TarjetaUsuario nombre={lista[0].nombre} edad={lista[0].edad} ocupacion={lista[0].ocupacion} />
    <TarjetaUsuario nombre={lista[1].nombre} edad={lista[1].edad} ocupacion={"no tiene trabajo"} />
    <TarjetaUsuario nombre={lista[2].nombre} edad={lista[2].edad} ocupacion={lista[2].ocupacion} />

    {/* pasamos aqui el array de tareas a ListaTareas */}
    <ListaTareas tareas={tareas} />

    <div><PerfilUsuario userData={userData} /></div>
    <GaleriaImagenes imageList={imageList} />

    {/* Componente con children */}
    <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01" >
      <p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </BlogPost>
  </>);
}



export default App
