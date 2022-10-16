import PokemonData from "../PokemonData/PokemonData";
import PokemonError from "../PokemonError/PokemonError";
import PokemonLoading from "../PokemonLoading/PokemonLoadin";
import pokemonAPI from "../../../services/poemon-api";
import { useState, useEffect } from "react";

export default function PokemonInfo({ pokemonName }) {
  //   {
  //     pokemon: null,
  //       error: null,
  //       status:"idle"
  // }
  const [pokemon, setPokemon] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus("pending");
    pokemonAPI
      .fetchPokemon(pokemonName)
      .then((pokemon) => {
        setPokemon(pokemon);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [pokemonName]);

  if (status === "idle") {
    return <p>Введите имя покемона</p>;
  }
  if (status === "pending") {
    return <PokemonLoading pokemonName={pokemonName} message="Loading..." />;
  }
  if (status === "rejected") {
    return <PokemonError message={error.message} />;
  }
  if (status === "resolved") {
    return <PokemonData pokemon={pokemon} />;
  }

  // return (
  //   <div>
  //     {error && <h2>{error.message}</h2>}
  //     {loading && <p>Загружаем...</p>}
  //     {!pokemonName && <p>Введите имя покемона</p>}
  //     {pokemon && (
  //       <div>
  //         <p>{pokemon.name}</p>
  //         <img
  //           src={pokemon.sprites.other["official-artwork"].front_default}
  //           alt={pokemon.name}
  //           width="300"
  //         />
  //       </div>
  //     )}
  //   </div>
  // );
}

// state = {
//   pokemon: null,
//   // loading: false,
//   error: null,
//   status: "idle",
// };

// componentDidUpdate(prevProps, prevState) {
//   if (prevProps.pokemonName !== this.props.pokemonName) {
//     this.setState({ status: "pending" });

//     pokemonAPI
//       .fetchPokemon(this.props.pokemonName)
//       .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
//       .catch((error) => this.setState({ error, status: "rejected" }));
//     //   .finally(() => this.setState({ loading: false }));
//   }
// }
// render() {
//   const { pokemon, error, status } = this.state;

//   const { pokemonName } = this.props;
//   if (status === "idle") {
//     return <p>Введите имя покемона</p>;
//   }
//   if (status === "pending") {
//     return <PokemonLoading pokemonName={pokemonName} message="Loading..." />;
//   }
//   if (status === "rejected") {
//     return <PokemonError message={error.message} />;
//   }
//   if (status === "resolved") {
//     return <PokemonData pokemon={pokemon} />;
//   }

//   // return (
//   //   <div>
//   //     {error && <h2>{error.message}</h2>}
//   //     {loading && <p>Загружаем...</p>}
//   //     {!pokemonName && <p>Введите имя покемона</p>}
//   //     {pokemon && (
//   //       <div>
//   //         <p>{pokemon.name}</p>
//   //         <img
//   //           src={pokemon.sprites.other["official-artwork"].front_default}
//   //           alt={pokemon.name}
//   //           width="300"
//   //         />
//   //       </div>
//   //     )}
//   //   </div>
//   // );
// }
