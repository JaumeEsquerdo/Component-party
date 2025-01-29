const AlertBox = ({ status, children }) => {

    
    return (
        <div className={`AlertBox AlertBox--${status}`}>
            {/* el status de arriba se pone con $, ya que es una parte de HTML */}

            {children}
        </div>
    );
}

export default AlertBox;