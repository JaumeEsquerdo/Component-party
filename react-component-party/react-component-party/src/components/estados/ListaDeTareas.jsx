import { useState } from "react";

const bgColor = { backgroundColor: "lightblue", padding: "10px" };

const ListaDeTareas = () => {

    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const handleAgregarTarea = () => {


        if (tarea.trim() !== "") {

            // versión INSEGURA
            // setTareas([...tareas, { texto: tarea, checked: false }])

            //El ...tareas extrae los elementos del array tareas y los coloca dentro del nuevo array.
            //Luego, agrega tarea como el último elemento.
            //Si pones [tareas, tarea] se generan una lista con otra lista (la de tareas) dentro, y por fuera la nueva tarea


            // VERSION BUENA(CUANDO MANEJAMOS DATOS PREVIOS)"PREVSTATE"
            //si mi estado depende del estado previo, utilizamos una función de callBack
            setTareas((prevState) => [...prevState, { texto: tarea, checked: false }]);

            setTarea(""); //volver a poner tarea a 0, cuando he agregado la tarea
            console.log(tareas)

        } else {
            alert("tarea no correcta");
        }
    }

    //marcar o desmaarcar tarea
    const handleCheck = (index) => {
        const nuevasTareas = tareas.map((t, i) => {
            return i == index ? { ...t, checked: !t.checked }
                :
                t
        })
        setTareas(nuevasTareas);
    }

    const handleEliminarTarea = () => {
        setTareas(tareas.filter((t) => !t.checked));
    };



    return (
        <>
            <div style={bgColor}>
                <h3>Voy a agregar la tarea "{tarea}"</h3>

                {/* e.target.value obtiene el valor actual del input */}
                {/* setTarea(e.target.value) actualiza el estado tarea con el nuevo valor */}
                {/* e.target.value es la propiedad del elemento <input> que contiene el texto actual que el usuario ha escrito. */}
                <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} placeholder="Escribe una nueva tarea" />
                <button onClick={handleAgregarTarea}>Agregar tarea</button>


                <ul style={bgColor}>
                    {
                        tareas.map((t, i) =>

                        (<li key={i}>
                            <label >
                                <input type="checkbox"
                                    checked={t.checked}
                                    onChange={() => handleCheck(i)}
                                // onChange es un evento en React que se dispara cada vez que cambia el valor de un elemento de entrada.


                                />
                                {t.texto}
                            </label>
                        </li>)
                        )
                    }
                    {/* {
                tareas.map( (t,i)=>{

                    return (<li key={i}>{t}</li>)
                })
            } */}
                </ul>
                <button onClick={handleEliminarTarea}>Eliminar tarea marcada</button>
            </div>

        </>
    );

}

export default ListaDeTareas;