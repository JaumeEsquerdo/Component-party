
import MenuSection from "./MenuSection";


const Menu = ({ menu }) => {

    const { entrantes, principales, postres } = menu;

    return (
        <div>
            <h1>Menú</h1>
            <MenuSection title="Entrantes" items={entrantes} />
            <MenuSection title="Pincipales" items={principales} />
            <MenuSection title="Postres" items={postres} />
        </div>
    );
}

export default Menu;



