import { useState } from "react";

function Search() {
  const [text, settext] = useState('');
  const handleClickEnter = (event) => {
    if (event.key === 'Enter' || event.type == 'click') {
      alert(text)


    }
  };

  return (
    <>
      <div className=" w-[60%]  relative ">
        <input value={text} onKeyDown={handleClickEnter} onChange={(e) => {

          settext(e.target.value);
        }} type="text" placeholder="Search for pokemon" className="w-full h-[3rem] outline-none rounded-xl px-4 
        
        "

        />
        <span onClick={handleClickEnter} className=" absolute text-[1.8rem] right-3 cursor-pointer ">&#128269;</span>

      </div>

    </>
  );
}
export default Search;
