// const eventosCalendario = [
//     {
//       "id": 1,
//       "title": "Reunión de equipo",
//       "date": "2024-07-05",
//       "time": "10:00",
//       "location": "Sala de conferencias A"
//     },
//     {
//       "id": 2,
//       "title": "Lanzamiento de producto",
//       "date": "2024-07-10",
//       "time": "14:00",
//       "location": "Auditorio principal"
//     },
//     {
//       "id": 3,
//       "title": "Taller de desarrollo web",
//       "date": "2024-07-15",
//       "time": "09:00",
//       "location": "Sala de formación B"
//     },
//     {
//       "id": 4,
//       "title": "Cena de empresa",
//       "date": "2024-07-20",
//       "time": "20:00",
//       "location": "Restaurante El Mirador"
//     }
//   ];






const Listacalendario = ({ listacalendario }) => {
    return (
        <div className="Event-list">
            {listacalendario.map(({ id, title, date, time, location }) => (
                <div key={id} className="Event-item">
                    <h3>{title}</h3>
                    <p>Fecha: {date}</p>
                    <p>Hora: {time}</p>
                    <p>Lugar: {location}</p>
                </div>
            ))}
        </div>
    );
}

export default Listacalendario;