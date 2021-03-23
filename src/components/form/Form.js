import React from 'react';


export default function Form(props) {

  async function handleSubmit(e) {
    e.preventDefault();

    // where does this data come from?
    // inputs?
    // buttons?
    // let { value } = e.target;

    const request = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await request.json();

    let pokemon = data.results.map(pokemon => pokemon.name);

    props.updatePeople(pokemon);
  }

  return (
    <form className="people-form" onSubmit={handleSubmit}>
      <button type="submit">Click to get People</button>
    </form>
  )
}
