import { useState } from "react";

const ListaDeTareas = () => {

    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const handleAgregarTarea = () => {


        if (tarea.trim() !== "") {
            setTareas([...tareas, tarea])
            //El ...tareas extrae los elementos del array tareas y los coloca dentro del nuevo array.
            //Luego, agrega tarea como el último elemento.
            //Si pones [tareas, tarea] se generan una lista con otra lista (la de tareas) dentro, y por fuera la nueva tarea
             setTarea(""); //volver a poner tarea a 0, cuando he agregado la tarea
            console.log(tareas)

        } else {
            alert("tarea no correcta");
        }

    }



    return (
        <>
            <h3>Voy a agregar la tarea "{tarea}"</h3>
            
            {/* e.target.value obtiene el valor actual del input */}
            {/* setTarea(e.target.value) actualiza el estado tarea con el nuevo valor */}
            <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} placeholder="Escribe una nueva tarea" />
            <button onClick={handleAgregarTarea}>Agregar tarea</button>


            <ul>
                {
                    tareas.map((t, i) =>

                        (<li key={i}>{t}</li>)
                    )
                }


                {/* {
                tareas.map( (t,i)=>{

                    return (<li key={i}>{t}</li>)
                })
            } */}
            </ul>
        </>
    );

}

export default ListaDeTareas;