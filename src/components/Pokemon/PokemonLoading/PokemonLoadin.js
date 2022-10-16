import { Dna } from "react-loader-spinner";
import PokemonData from "../PokemonData/PokemonData";
import imageloading from "../../../icons/loading.png";

export default function PokemonLoading({ pokemonName, message }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: imageloading,
        },
      },
    },
    stats: [],
  };
  return (
    <>
      <p>{message}</p>
      <Dna
        visible={true}
        height="40"
        width="40"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <PokemonData pokemon={pokemon} />
    </>
  );
}
