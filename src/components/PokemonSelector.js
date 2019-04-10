import React from 'react';

const PokemonSelector = (props) => {

  const options = props.pokemons.map((pokemon, index) => {
    return <option key={index} value={index + 1}>{pokemon.name}</option>
  })

  function handleChange(event){
    props.handleSelected(event.target.value);
  }

  return (
    <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a Pokemon...</option>
    {options}
    </select>
  )
}

export default PokemonSelector
