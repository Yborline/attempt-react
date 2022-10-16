import PokemonForm from "../../components/Pokemon/PokemonForm/PokemonForm";
import PokemonInfo from "../../components/Pokemon/PokemonInfo/PokemonInfo";
import { useState } from "react";

function PokemonPage() {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}

export default PokemonPage;
