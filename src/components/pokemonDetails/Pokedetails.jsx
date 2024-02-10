import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
function Pokedetails() {
    const [pokemondetails,setpokemondetails]=useState({});
    
    const [loading,setloading]=useState(true);
    const Pname = useParams().id;
   
    console.log("pokemon d",Pname);

    const fetchData = async () => {

        setloading(true);
       
        const poke = await (await axios.get("https://pokeapi.co/api/v2/pokemon/" + Pname.toLocaleLowerCase())).data;
        console.log(poke);
        // console.log(poke);
         setpokemondetails({
            image:poke.sprites.other.dream_world.front_default,
            name: poke.name,
            weight: poke.weight,
            type:poke.types



        }) 
     
       



setloading(false);
    }
    
   


    useEffect(
        () => {
            fetchData();
           

        },[]
    )

console.log(pokemondetails.type);

    return (
        <>{
            (loading)?<div className=" flex justify-center mt-60">loading.................</div> :
            <div className=" w-full  flex justify-center">
                <div className="flex flex-col justify-center gap-5 items-center mt-10">
                <img className=" h-80" src={pokemondetails.image} alt="" />
                <h1 className="tracking-widest">{pokemondetails.name}</h1>
                <div className="flex justify-center gap-40 cursor-pointer">
                    {pokemondetails.type.map((p)=>{
                        return(
                            <li className=" tracking-widest list-none p-5 bg-red-300 rounded-lg" key={p.slot} >{p.type.name}</li>
                        )

                    })}
                </div>

                </div>
               

            </div>

        }
     
        </>
    );

}
export default Pokedetails;