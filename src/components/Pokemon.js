import React from "react";

const Pokemon = (props) => {

    const {pokemon} = props
    console.log("pokemon" , pokemon)
    return (
        <div>
            {pokemon.name}
        </div>
    )
}

export default Pokemon