import { TarjetaUsuario } from './components/TarjetaUsuario';
import { ListaTareas } from './components/tareas/ListaTareas';
import PerfilUsuario from './components/PerfilUsuario';
import GaleriaImagenes from './components/GaleriaImagenes';
import BlogPost from './components/BlogPost';
import AlertBox from './components/AlertBox';
import Header from './components/Header';
import Gallery from './components/Gallery';

import GaleriaImagens from './components/estados/GaleriaImagens';

import ListaDeTareas from './components/estados/ListaDeTareas';
import Calculadora from './components/estados/Calculadora';
import Temporizador from './components/estados/Temporizador';
import JuegoAdivinanza from './components/estados/JuegoAdivinanza';
import EditorTexto from './components/estados/EditorTexto';
import Calcular from './components/estados/Calcular';
import Temporizar from './components/estados/Temporizar';

import ImgLogo from './assets/img/logo.png';

import './css/App.css'

//importar componentes
import { Contador } from './components/estados/Contador'
import { Interruptor } from './components/estados/Interruptor'
import FormRegistro from './components/estados/FormRegistro'
import { useState } from 'react';



// utilizar export común con {} para mandar más de una cosa { TarjetaUsuario, Avatar }

//ACTIVIDAD 1
const lista = [
  { id: 1, nombre: "Antonio", edad: 29, ocupacion: "fontanero" },
  { id: 2, nombre: "Juan", edad: null, ocupacion: "" },
  { id: 3, nombre: "Antonia", edad: 49, ocupacion: "administradora" },
];

// Lista de tareas antes de invierno ACTIVIDAD 2
const tareas = [
  { id: 1, nombre: 'Estudiar React', completada: true },
  { id: 2, nombre: 'Leer un libro', completada: false },
  { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
  { id: 4, nombre: 'Aprender a cocinar', completada: true },
  { id: 5, nombre: 'Ver series', completada: false },
  { id: 6, nombre: 'ir un día a la nieve', completada: false }
];


const App = () => {
  const [nombre, setNombre] = useState("Jaume")



  // PerfilUsuario (Objeto Anidado) ACTIVIDAD 3
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


  // GaleriaImagenes (Array de Objetos) ACTIVIDAD 4
  // https://rickandmortyapi.com/
  const imageList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];

  // ACTIVIDAD 5
  //children es como un espacio en blanco dentro de un componente donde puedes poner lo que quieras y sirve para pasarle contenido a un componente
  // los props son fijos y los children son variables
  // children se escribe dentro de las etiquetas de apertura y cierre de un componente y se pasa como un prop más




  return (<>

    <h3>Ejemplos con useState</h3>

    < Contador />
    < Contador />

    Un botón que haga de interruptor entre encendido y apagado y también cambie su color.
    <Interruptor />


    {/* Crear una lista de tareas, utilizando un input. El input debe tener el atributo onChange={(e)=> {setVariableInteligente(e.target.value)}} */}

    <ListaDeTareas />

    <FormRegistro />

    <input type='text' placeholder='Escribe tu nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
    <p>Tu nombre es : {nombre}</p>

    <GaleriaImagens />
    <Calculadora />
    <Temporizador/>
    <JuegoAdivinanza />
    <EditorTexto />
    <Calcular />
    <Temporizar/>





    {/* ACTIVIDAD 1 */}
    <TarjetaUsuario nombre={lista[0].nombre} edad={lista[0].edad} ocupacion={lista[0].ocupacion} />
    <TarjetaUsuario nombre={lista[1].nombre} edad={lista[1].edad} ocupacion={"no tiene trabajo"} />
    <TarjetaUsuario nombre={lista[2].nombre} edad={lista[2].edad} ocupacion={lista[2].ocupacion} />

    {/* ACTIVIDAD 2 pasamos aqui el array de tareas a ListaTareas */}
    <ListaTareas tareas={tareas} />

    {/* ACTIVIDAD 3 */}
    <div><PerfilUsuario userData={userData} /></div>

    {/* ACTIVIDAD 4 */}
    <GaleriaImagenes imageList={imageList} />

    {/* Componente con children ACTIVIDAD 5 */}
    <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01" >
      <p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </BlogPost>
    {/* si es contenido se manda como children, si son datos se mandan como props */}

    {/* ACTIVIDAD 10 */}
    <AlertBox status="success">
      Perfecto!
    </AlertBox>
    <AlertBox status="warning">
      ¡Atención!
    </AlertBox>
    <AlertBox status="error">
      ERRRRRRRRROR
    </AlertBox>

    {/* ACTIVIDAD 1 EXTRAS */}
    <Header logo={ImgLogo} />

    {/* Actividad 2 extras */}
    <Gallery images={images} />

  </>);
}



export default App


//Actividad 2 extras

const images = [
  { "src": "image1.jpg", "alt": "Image 1", "title": "Image 1" },
  { "src": "image2.jpg", "alt": "Image 2", "title": "Image 2" }
]