export default function PokemonData({
  pokemon: { sprites, name, stats },
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="240"
      />
      <ul>
        {stats.map(other => (
          <li key={other.stat.name}>
            {other.stat.name}:{other.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
