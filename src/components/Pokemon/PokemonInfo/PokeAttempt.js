import PokemonData from '../PokemonData/PokemonData';
import PokemonError from '../PokemonError/PokemonError';
import PokemonLoading from '../PokemonLoading/PokemonLoadin';
import pokemonAPI from '../../../services/poemon-api';
import { useState, useEffect } from 'react';

export default function PokemonInfo({ pokemonName }) {
  //   {
  //     pokemon: null,
  //       error: null,
  //       status:"idle"
  // }
  const [pokemon, setPokemon] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');
    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <p>Введите имя покемона</p>;
  }
  if (status === 'pending') {
    return (
      <PokemonLoading pokemonName={pokemonName} message="Loading..." />
    );
  }
  if (status === 'rejected') {
    return <PokemonError message={error.message} />;
  }
  if (status === 'resolved') {
    return <PokemonData pokemon={pokemon} />;
  }
}
