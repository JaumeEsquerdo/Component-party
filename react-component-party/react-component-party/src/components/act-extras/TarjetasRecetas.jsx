import { useState, useEffect } from "react";

export const TarjetasRecetas = ({ recetas }) => {

    return (<div>
        <div>
            <h1>Recetas de comida</h1>
            {
                recetas.map((receta, i) => (
                    <div key={i}>
                        <h2>Receta: <small>{receta.name}</small></h2>
                        <Ingredients ingredients={receta.ingredients} />
                        <Instructions instructions={receta.instructions} />
                    </div>
                ))
            }
        </div>

    </div>
    );
}

const Ingredients = ({ ingredients }) => {
    return (
        <div>
            <h3>Ingredientes</h3>

            <ul>
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                ))}
            </ul>

        </div>
    );
};

const Instructions = ({ instructions }) => {
    return (
        <div>
            <h3>Instrucciones</h3>
            <ol>
                {instructions.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                ))}
            </ol>

        </div>
    );
};
