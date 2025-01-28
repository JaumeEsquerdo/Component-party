const Tarea = ({ nombre, completada }) => {
    return (
        <div className="tarea">
            <p>{nombre}: {completada ? "completada" : "pendiente"}.</p>
        </div>
    );
}

export default Tarea;