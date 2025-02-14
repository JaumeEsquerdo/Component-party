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

import '@/css/styles.css';
import './css/App.css'
// import '@/css/menus.css'
import '@/css/menu-categorias.css'
import '@/css/act-extras.css'


//importar componentes
import { Contador } from './components/estados/Contador'
import { Interruptor } from './components/estados/Interruptor'
import FormRegistro from './components/estados/FormRegistro'
import { useState } from 'react';


//importar componentes useEffect
import Consolelog from './components/useeffect/Consolelog';
import TiempoVida from './components/useeffect/Tiempo';
import ConsultaAPI from './components/useeffect/ConsultaAPI';
import Resize from './components/useeffect/Resize';
import Montar from './components/useeffect/Montar';
import { SliderImg } from '@/modulos/Carousel';

//menus
import { MenuHorizontal } from './menus/MenuHorizontal';
import { MenuDropDown } from './menus/MenuDropdown';
import { MenuCategorias } from './menus/MenuCategorias';
import {MenuVerticalProfe}  from './menus/MenuVerticalProfe';

//ACTIVIDADES EXTRAS
import { ListaProductos } from './components/act-extras/ListaProductos';
import { Testimonios } from './components/act-extras/Testimonios';
import {EventosCalendario} from './components/act-extras/EventosCalendario';


const menuItems = [
  { label: "Home", url: "./" },
  { label: "Configuración", url: "/config" },
  { label: "Ayuda", url: "./support" }
];

const menuCategorias = [
  {
    name: "Home",
    icon: "fa-tachometer-alt",
    items:[
      {label:"Dashboard", url:"./dashboard"},
      {label:"Reportes", url:"./reports"},
    ]
  },
  {
    name: "Configuración",
    icon: "fa-cog",
    items:[
      {label:"Perfil", url:"./profile"},
      {label:"Tu Cuenta", url:"./account"},
    ]
  },
  {
    name: "Ayuda",
    icon: "fa-question-circle",
    items:[
      {label:"FAQ", url:"./faq"},
      {label:"Soporte", url:"./support"},
    ]
  }
];

const listaImagenes = [
  { id: 1, src: `https://dummyjson.com/image/400x200/008080/ffffff?text=imagen+1` },
  { id: 2, src: `https://dummyjson.com/image/400x200/008080/ffffff?text=imagen+2` },
  { id: 3, src: `https://dummyjson.com/image/400x200/008080/ffffff?text=imagen+3` }
];





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

  /* ACTIVIDADES EXTRAS */

  const productos = [
    {
      "id": 1,
      "name": "Smartphone XYZ",
      "price": 599.99,
      "description": "Último modelo con cámara de alta resolución y batería de larga duración.",
      "image": "./src/assets/img/img-movil.avif"
    },
    {
      "id": 2,
      "name": "Laptop UltraBook",
      "price": 1299.99,
      "description": "Potente y ligera, perfecta para profesionales en movimiento.",
      "image": "./src/assets/img/auricular.jpg"
    },
    {
      "id": 3,
      "name": "Auriculares NoiseCancel",
      "price": 249.99,
      "description": "Experimenta un sonido inmersivo con cancelación de ruido activa.",
      "image": "./src/assets/img/tablet.png"
    }
  ];


  const testimonios = [
    {
      "id": 1,
      "name": "Laura Sánchez",
      "position": "Directora de Marketing",
      "company": "TechCorp",
      "testimonial": "El servicio al cliente es excepcional. Siempre están dispuestos a ayudar y resolver cualquier problema.",
      "image": "https://example.com/laura-sanchez.jpg",
      "rating": 3
    },
    {
      "id": 2,
      "name": "Pedro Gómez",
      "position": "Desarrollador Senior",
      "company": "WebSolutions",
      "testimonial": "La plataforma es intuitiva y fácil de usar. Ha mejorado significativamente nuestra productividad.",
      "image": "https://example.com/pedro-gomez.jpg",
      "rating": 5
    },
    {
      "id": 3,
      "name": "Isabel Torres",
      "position": "CEO",
      "company": "InnovateNow",
      "testimonial": "Gracias a este producto, hemos podido escalar nuestro negocio de manera eficiente y sostenible.",
      "image": "https://example.com/isabel-torres.jpg",
      "rating": 4.5
    }
  ]

    // Componentes: ListaEventos, Evento, Fecha (Date+time)
    const eventosCalendario = [
      {
        "id": 1,
        "title": "Reunión de equipo",
        "date": "2024-07-05",
        "time": "10:00",
        "location": "Sala de conferencias A"
      },
      {
        "id": 2,
        "title": "Lanzamiento de producto",
        "date": "2024-07-10",
        "time": "14:00",
        "location": "Auditorio principal"
      },
      {
        "id": 3,
        "title": "Taller de desarrollo web",
        "date": "2024-07-15",
        "time": "09:00",
        "location": "Sala de formación B"
      },
      {
        "id": 4,
        "title": "Cena de empresa",
        "date": "2024-07-20",
        "time": "20:00",
        "location": "Restaurante El Mirador"
      }
    ];

  return (<>
    {/* 
    <h3>Ejemplos con useState</h3>

    < Contador />
    < Contador />

    Un botón que haga de interruptor entre encendido y apagado y también cambie su color.
    <Interruptor />


    Crear una lista de tareas, utilizando un input. El input debe tener el atributo onChange={(e)=> {setVariableInteligente(e.target.value)}} 

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





     ACTIVIDAD 1
    <TarjetaUsuario nombre={lista[0].nombre} edad={lista[0].edad} ocupacion={lista[0].ocupacion} />
    <TarjetaUsuario nombre={lista[1].nombre} edad={lista[1].edad} ocupacion={"no tiene trabajo"} />
    <TarjetaUsuario nombre={lista[2].nombre} edad={lista[2].edad} ocupacion={lista[2].ocupacion} />

     ACTIVIDAD 2 pasamos aqui el array de tareas a ListaTareas 
    <ListaTareas tareas={tareas} />

    ACTIVIDAD 3 
    <div><PerfilUsuario userData={userData} /></div>

    ACTIVIDAD 4 
    <GaleriaImagenes imageList={imageList} />

     Componente con children ACTIVIDAD 5 
    <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01" >
      <p>Lorem ipsum dolor,adipisci unde tempora recusandae tenetur numquam reprehenderit id quaerat, iure magni consectetur alias neque amet, quisquam repudiandae? Saepe temporibus inventore ipsa! Praesentium!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </BlogPost>
    si es contenido se manda como children, si son datos se mandan como props 

    ACTIVIDAD 10 
    <AlertBox status="success">
      Perfecto!
    </AlertBox>
    <AlertBox status="warning">
      ¡Atención!
    </AlertBox>
    <AlertBox status="error">
      ERRRRRRRRROR
    </AlertBox>

    ACTIVIDAD 1 EXTRAS 
    <Header logo={ImgLogo} />

    Actividad 2 extras 
    <Gallery images={images} />




  EJERCICIOS: useEffect 


    <Consolelog />
    <TiempoVida/>
    <ConsultaAPI/>
    <Resize/>
    <Montar />



    
    <SliderImg listaImagenes={listaImagenes}/>
    <SliderImg listaImagenes={listaImagenes} autoPlay/> */}

    {/* <h2>Módulos de menus de navegacion</h2> */}
    {/* <MenuHorizontal items={menuItems}/> */}

    {/* <MenuDropDown items={menuItems} /> */}
    
    {/* <MenuCategorias listaItems={menuCategorias} /> */}

    {/* <MenuVerticalProfe listaItems={menuCategorias}/> */}



    {/* ACTIVIDADES EXTRAS */}

    <ListaProductos datosProductos={productos} />

    <Testimonios testimonios={testimonios} />

    <EventosCalendario eventos={eventosCalendario}/>
  </>);
}



export default App


//Actividad 2 extras

const images = [
  { "src": "image1.jpg", "alt": "Image 1", "title": "Image 1" },
  { "src": "image2.jpg", "alt": "Image 2", "title": "Image 2" }
]