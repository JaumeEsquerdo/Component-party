export const TarjetaUsuario = ({ nombre, edad, ocupacion }) => {

    const styleUsuario = { color: "darkblue", fontSize: "1.5rem" };
    const styleTexto = {color: "black", fontSize: "1rem"};

    return (<>
        <h3 style={styleUsuario}>{nombre}</h3>
        
        {edad && <p><p style={styleTexto}>Tengo actualmente {edad} años.</p></p>}
        
        <p style={styleTexto}>Trabajo siendo {ocupacion}.</p>






    </>);

}