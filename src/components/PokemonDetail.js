import React from 'react';

const PokemonDetail = (props) => {
  if(!props.pokemon){
    return null;
}

var abilities = [];

var moves = [];

var stats = [];

var base_stat = [];

if(props.pokemon.abilities){
  abilities = props.pokemon.abilities.map(element => {
    return <li>{element.ability.name}</li>
  })
}

if(props.pokemon.moves){
  moves = props.pokemon.moves.map(element => {
    return <li>{element.move.name}</li>
  })
}

if(props.pokemon.stats){
  stats = props.pokemon.stats.map(element => {
    return <p>{element.stat.name}</p>
  })
}

if(props.pokemon.stats){
  base_stat = props.pokemon.stats.map(element => {
    return <p>{element.base_stat}</p>
  })
}

console.log(props.pokemon);

  return(
    <div>
    <h2> {props.pokemon.name}</h2>
    <img src={props.pokemon.sprites.front_shiny} alt="Image" class="expand"/>
    <p>Base Experience: {props.pokemon.base_experience}</p>
    <p>Weight: {props.pokemon.weight}</p>
    <p>Abilities:</p>
    {abilities}
    <p>Moves:</p>
    {moves}
    <p>Stats:</p>
    <table>
    <th>Stat <td>{stats}</td></th>
    <th>Base Stat <td>{base_stat}</td> </th>
    </table>
    </div>
  )
}
export default PokemonDetail
