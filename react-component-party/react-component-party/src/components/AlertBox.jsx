const AlertBox = ({ status, children }) => {

    const styles = {
        success: { border: "2px solid green", backgroundColor: "#d4edda", color: "#155724" },
        warning: { border: "2px solid orange", backgroundColor: "#fff3cd", color: "#856404" },
        error: { border: "2px solid red", backgroundColor: "#f8d7da", color: "#721c24" }
    };
    
    return (
        // <div className={`AlertBox AlertBox--${status}`}>
        //     {/* el status de arriba se pone con $, ya que es una parte de HTML */}

        //     {children}
        // </div>
         <div style={styles[status]}>
         {children}
     </div>
    );
}

// al pasar todos los status, style={styles[status]} accede a todos los estilos. si solo pasara style={styles[success]} solo accedería a los estilos de success. status es un prop que se pasa de App.jsx que tiene success, warning y error

//para llamar objetos o bien llamas con "." o con "[]" para forma dinámica

export default AlertBox;