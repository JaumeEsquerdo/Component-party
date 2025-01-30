import Menu from './components/Menu'
import './css/App.css'
import Productos from './components/ListaProductos'
import Comentarios from './components/ListaComentarios';

function App() {

  // JSON de Restaurante
  const restaurant = {
    "menu": {
      "entrantes": [
        {
          "id": 1,
          "nombre": "Ensalada César",
          "precio": 8.99,
          "descripcion": "Lechuga romana, crutones, queso parmesano y aderezo César."
        },
        {
          "id": 2,
          "nombre": "Sopa de tomate",
          "precio": 6.99,
          "descripcion": "Sopa casera de tomate con albahaca fresca."
        }
      ],
      "principales": [
        {
          "id": 3,
          "nombre": "Filete de salmón",
          "precio": 18.99,
          "descripcion": "Salmón a la parrilla con salsa de limón y eneldo, acompañado de verduras al vapor."
        },
        {
          "id": 4,
          "nombre": "Pasta Alfredo",
          "precio": 14.99,
          "descripcion": "Fettuccine en salsa cremosa de queso parmesano."
        }
      ],
      "postres": [
        {
          "id": 5,
          "nombre": "Tiramisú",
          "precio": 7.99,
          "descripcion": "Clásico postre italiano con capas de bizcocho, café y crema de mascarpone."
        },
        {
          "id": 6,
          "nombre": "Tarta de manzana",
          "precio": 6.99,
          "descripcion": "Tarta casera de manzana servida con helado de vainilla."
        }
      ]
    }
  };

  // JSON de Productos
  const productos = [
    {
      "id": 1,
      "name": "Smartphone XYZ",
      "price": 599.99,
      "description": "Último modelo con cámara de alta resolución y batería de larga duración.",
      "image": "https://example.com/smartphone-xyz.jpg"
    },
    {
      "id": 2,
      "name": "Laptop UltraBook",
      "price": 1299.99,
      "description": "Potente y ligera, perfecta para profesionales en movimiento.",
      "image": "https://example.com/laptop-ultrabook.jpg"
    },
    {
      "id": 3,
      "name": "Auriculares NoiseCancel",
      "price": 249.99,
      "description": "Experimenta un sonido inmersivo con cancelación de ruido activa.",
      "image": "https://example.com/auriculares-noisecancel.jpg"
    }
  ];

    // Json de Comentarios
    const comentarios= [
      {
        "id": 1,
        "author": "María García",
        "date": "2024-07-01T10:30:00Z",
        "content": "¡Excelente artículo! Me ha ayudado mucho a entender el tema.",
        "replies": [
          {
            "id": 2,
            "author": "Juan Pérez",
            "date": "2024-07-01T11:15:00Z",
            "content": "Totalmente de acuerdo, María. El autor ha explicado todo de manera muy clara."
          },
          {
            "id": 6,
            "author": "Juan ",
            "date": "2024-07-01T11:15:00Z",
            "content": "Totalmente de vuelta de acuerdo, . El autor ha explicado todo de manera muy clara."
          }
        ]
      },
      {
        "id": 3,
        "author": "Carlos Rodríguez",
        "date": "2024-07-02T09:45:00Z",
        "content": "Me gustaría ver más ejemplos prácticos en futuros artículos.",
        "replies": [
          {
            "id": 4,
            "author": "Ana Martínez",
            "date": "2024-07-02T10:30:00Z",
            "content": "Buena sugerencia, Carlos. Yo también creo que más ejemplos serían útiles."
          }
        ]
      }
    ];

  return (
    <>
    <Menu menu={restaurant.menu} />
    <Productos listaproductos={productos} />
    <Comentarios listacomentarios={comentarios} />

    </>
  )
}

export default App
