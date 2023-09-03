import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Pokemon({ name, img ,id }) {
    
    
    return (
       
        <Link to={"/details/"+id} >
            <div className=" hover:bg-[rgb(118,149,229)]  h-60 w-56 cursor-pointer flex flex-col justify-center items-center mt-10 ">

                <img className=" h-52 w-48" src={img} alt="" />
                <h5 className="tracking-widest">{name}</h5>

            </div>


        </Link>
    );
}
export default Pokemon;