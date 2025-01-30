// const testimonios = [
//     {
//       "id": 1,
//       "name": "Laura Sánchez",
//       "position": "Directora de Marketing",
//       "company": "TechCorp",
//       "testimonial": "El servicio al cliente es excepcional. Siempre están dispuestos a ayudar y resolver cualquier problema.",
//       "image": "https://example.com/laura-sanchez.jpg"
//     },
//     {
//       "id": 2,
//       "name": "Pedro Gómez",
//       "position": "Desarrollador Senior",
//       "company": "WebSolutions",
//       "testimonial": "La plataforma es intuitiva y fácil de usar. Ha mejorado significativamente nuestra productividad.",
//       "image": "https://example.com/pedro-gomez.jpg"
//     },
//     {
//       "id": 3,
//       "name": "Isabel Torres",
//       "position": "CEO",
//       "company": "InnovateNow",
//       "testimonial": "Gracias a este producto, hemos podido escalar nuestro negocio de manera eficiente y sostenible.",
//       "image": "https://example.com/isabel-torres.jpg"
//     }
//   ]





const ListaTestimonios = ({ listatestimonios }) => {
    return (
        <div className="Testimonios">
            {
                listatestimonios.map(({ id, name, position, company, testimonial, image }) => (
                    <div key={id} className="Testimonios-item">
                        <h3>{name}</h3>
                        <img src={image} alt={`Imagen de ${name}`} />
                        <p>Posición: {position}</p>
                        <p>Empresa: {company}</p>
                        <p>{testimonial}</p>
                    </div>
                )
                )}

        </div>

    );
}

export default ListaTestimonios;