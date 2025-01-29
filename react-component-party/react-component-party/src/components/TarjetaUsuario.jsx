export const TarjetaUsuario = ({ nombre, edad, ocupacion }) => {

    const styleUsuario = { color: "darkblue", fontSize: "1.5rem" };
    const styleTexto = { color: "black", fontSize: "1rem" };

    return (<>
        <div className="Div">
            <h3 style={styleUsuario}>{nombre}</h3>

            {edad && <p style={styleTexto}>Tengo actualmente {edad} </p>}
            {/* si es un string es truthy */}


            <p style={styleTexto}>Ocupacion actual: {ocupacion}.</p>
        </div>





    </>);

}