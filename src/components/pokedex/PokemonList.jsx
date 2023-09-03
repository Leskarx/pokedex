/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

import Pokemon from "../pokemon/pokemon";
// (async()=>{
//     
// 

// })();

function PokemonList() {

    const [pokemonlist, setpokemonlist] = useState([]);
    const [poke_url, setpoke_url] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl, setnexturl] = useState("");
    const [prevUrl, setprevurl] = useState("");
    const [isLoading, setLoading] = useState(true);

    async function fetchdata() {
        setLoading(true)

        const res = await axios.get(poke_url);
        // console.log(res.data.next);
        setnexturl(res.data.next);
        setprevurl(res.data.previous);


        // prevUrl=res.data.previous   


        let allPokemon = res.data.results;
        let pokemonPromis = allPokemon.map(async (p) => {
            return axios.get(p.url);

        })
        const pokemonData = await axios.all(pokemonPromis);


        let pokeList = pokemonData.map((p) => {
            // console.log(p.data.sprites.other.dream_world.front_default);
            // console.log(p.name);
            // console.log(p.data.types[0]);

            return {
                name: p.data.name,
                type: p.data.types,
                weight: p.data.weight,
                image: p.data.sprites.other.dream_world.front_default,
                id:p.data.id
            }


        }
        )
        setpokemonlist(pokeList)
        setLoading(false);



    }
    useEffect(() => {
        fetchdata();

    }, [poke_url])

    return (
        <>


            <div className="bg-red-100 flex flex-col items-center justify-center overflow-hidden mr-9"  >

                <div className="flex flex-wrap  justify-center  items-center w-[95%] ml-[7rem] gap-9 ">
                    {
                        (isLoading) ? "loading..." : pokemonlist.map((p) => {
                            return <Pokemon key={p.id} name={p.name} img={p.image} id={p.id} />

                        })
                    }


                </div>

                <div className="flex gap-2  pt-16 h-28 ">
                    <button className=" active:bg-[rgb(61,78,121)] bg-[rgb(118,149,229)] cursor-pointer h-10 w-20  rounded-2xl" disabled={prevUrl == null} onClick={() => setpoke_url(prevUrl)} >prev</button>
                    <button onClick={() => setpoke_url(nextUrl)} className="active:bg-[rgb(61,78,121)] bg-[rgb(118,149,229)] h-10 w-20 cursor-pointer rounded-2xl ">Next</button>


                </div>






            </div>





        </>
    );

}
export default PokemonList;



// pokemonlist.map((p)=>{
//     <h1>h</h1>
//     // <Pokemon name={p.name} img={p.image}/>
//     console.log(p.name);
// })