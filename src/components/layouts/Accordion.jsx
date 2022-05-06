import React, { useState } from "react"

let Accordion = (props) => {
   let [selected, setSelected] = useState(false);

   return (
      <div className="bg-zinc-700 select-none flex cursor-pointer flex-col py-3 my-3 sm:mx-10 md:mx-20 xl:mx-44 ">
         <div className="flex flex-row transition-all justify-between mx-8 outline-none py-2 text-left" onClick={() => setSelected(!selected)} >
            <h2 className="text-xl " >{props.ques}</h2>
            <span>{selected ? 'X' : '+'}</span>
         </div>
         {selected && <p className={`text-base mt-4 text-left mx-8`} >{props.ans}</p>}
      </div>
   )
}

export default Accordion;