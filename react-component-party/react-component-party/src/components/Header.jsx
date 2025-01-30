const Header = ({ logo }) => {

    const navItems = ["Inicio", "Servicios", "Contacto"];

    return (
        <header>
            <img src={logo} alt="Logo de la empresa" className="Logo" />
            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;