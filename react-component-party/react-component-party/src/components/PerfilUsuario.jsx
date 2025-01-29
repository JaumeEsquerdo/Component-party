const PerfilUsuario = ({ userData }) => {
    const { nombre, email, img, direccion: { calle, ciudad, codigoPostal } } = userData;

    return (
        <div className="PerfilUsuario">
            <img src={img} alt={`Imagen del perfil de ${nombre}`} />
            <h3 className="Perfil-name">{nombre}</h3>
            <p className="Perfil-email">Email: {email}</p>
            <p className="Perfil-direccion">Dirección: {calle}, {ciudad}, {codigoPostal}</p>
        </div>
    );
}

export default PerfilUsuario;