const TarjetasRecetas = ({TarjetasDeRecetas}) => {
    return ( 
        <div className="TarjetasRecetas">
            {TarjetasDeRecetas.map(({ id, name, image, ingredients, instructions }) => (
                <div key={id} className="TarjetasRecetas-item">
                    <h3>{name}</h3>
                    <img src={image} alt={`Imagen de ${name}`} />
                    <h4>Ingredientes:</h4>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h4>Instrucciones:</h4>
                    <ol>
                        {instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
     );
}
 
export default TarjetasRecetas;