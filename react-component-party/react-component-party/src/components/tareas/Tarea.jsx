const Tarea = ({ nombre, completada }) => {

    
    return (
        <div className="tarea">
            <p><input type="checkbox" checked={completada}/>{nombre}</p>
            {/* <p>{nombre}: {completada ? "completada" : "pendiente"}.</p> */}
        </div>
    );
}

export default Tarea;