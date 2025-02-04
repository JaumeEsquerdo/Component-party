import Tarea from './Tarea';

const bgColor = {backgroundColor: "lightblue"};
const styleUsuario = { color: "darkblue", fontSize: "2.5rem" };

export const ListaTareas = ({ tareas }) => {

    return (
        <div style={bgColor}>
            <h2 style={styleUsuario}>Lista de Tareas</h2>
            {/* aqui recorremos el array y llamamos a Tarea por cada elemento */}
            {tareas.map((tarea) => (
                <Tarea key={tarea.id} nombre={tarea.nombre} completada={tarea.completada} />
            ))}
        </div>
    );
}