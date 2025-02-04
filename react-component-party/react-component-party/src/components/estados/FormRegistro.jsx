import { useState } from "react";

const bgForm = { backgroundColor: "#93f893", padding: "10px" }

const FormRegistro = () => {

    //EN VEZ DE UTILIZAR STATES INDIVIDUALES
    // const [nombre, setNombre] = useState("");
    // const [email, setEmail] = useState("");

    //para AGREGAR TODOS LOS DATOS DEL FORM en una parte
    const [formData, setFormData] = useState({
        nombre: "",
        email: ""
    });

    const { nombre, email } = formData;

    const handleTexto = (e) => {
        e.preventDefault();
        console.log("enviando", formData)

        // buscamos en el if los errores
        if (nombre.trim() === "" && email.trim() === "") {
            alert("Error, no has escrito nada o  no lo has hecho bien");
            return;
        }
            console.log("Enviando", formData);
    }

    // const handleUpdateName = (e) => {
    //     setNombre(e.target.value);

    // }

    // const handleUpdateEamil = (e) => {
    //     setEmail(e.target.value);
    // }

    const handleChange = (e) => {
        //metodo NO SEGURO
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value
        // })

        //METODO SEGURO con prevState
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    return (
        <div style={bgForm}>

            <h3>Formulario de registro</h3>

            <input type="text" 
            value={formData.nombre} 
            name="nombre" 
            onChange={handleChange} placeholder="Escribe nombre" />

            <input type="email" 
            value={email}
            name="email"
            onChange={handleChange} placeholder="Escribe email" />

            <button onClick={handleTexto}>Enviar</button>

        </div>
    );
}

//podrias poner un "form" con el atributo onSubmit={handleTexto} y un input con type"submit", añadiendo a la funcion que maneja el form event.preventDefault();

export default FormRegistro;