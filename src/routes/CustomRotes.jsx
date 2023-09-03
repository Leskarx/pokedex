import { Routes,Route } from "react-router-dom";
import PokemonList from "../components/pokedex/pokemonList";
import Pokedetails from "../components/pokemonDetails/Pokedetails";
function CustomR() {
    return(
       <Routes>
        <Route path="/" element={<PokemonList/>}  />
        <Route path="/details/:id" element={<Pokedetails/>}  />

       </Routes>
    )
    
}
export default CustomR;
