import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";

function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState("");

  const handleNameChange = (event) => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pokemonName.trim() === "") {
      toast.error("🦄Введите имя покемона.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    onSubmit(pokemonName.trim());
    setPokemonName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={pokemonName}
        onChange={handleNameChange}
      ></input>
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }}></ImSearch>search
      </button>
    </form>
  );
}

export default PokemonForm;

//   state = {
//     pokemonName: "",
//   };

//   handleNameChange = (event) => {
//     this.setState({ pokemonName: event.currentTarget.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     if (this.state.pokemonName.trim() === "") {
//       toast.error("🦄Введите имя покемона.", {
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       return;
//     }
//     this.props.onSubmit(this.state.pokemonName.trim());
//     this.setState({ pokemonName: "" });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.pokemonName}
//           onChange={this.handleNameChange}
//         ></input>
//         <button type="submit">
//           <ImSearch style={{ marginRight: 8 }}></ImSearch>search
//         </button>
//       </form>
//     );
//   }
// }
