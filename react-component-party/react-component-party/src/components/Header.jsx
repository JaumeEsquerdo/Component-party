const Header = ({ logo }) => {

    const navItems = ["Inicio", "Servicios", "Contacto"];

    const clickMe = (item)=>{
         console.log(item)
    }
    return (
        <header>
            <img src={logo} alt="Logo de la empresa" className="Logo" />
            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} onClick={  () =>clickMe(item) }>
                            link {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;