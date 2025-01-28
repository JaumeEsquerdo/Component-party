export const TarjetaUsuario = ({ nombre, edad, ocupacion }) => {

    const styleUsuario = { color: "darkblue", fontSize: "1.5rem" };
    const styleTexto = { color: "black", fontSize: "1rem" };

    return (<>
        <h3 style={styleUsuario}>{nombre}</h3>

        {edad && <p style={styleTexto}>Tengo actualmente {edad} </p>}
        

        <p style={styleTexto}>Ocupacion actual: {ocupacion}.</p>






    </>);

}