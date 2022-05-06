import React from "react";

let Content = (props) => {
   return (
      <div className="bg-black text-white gap-6 py-24 flex flex-col lg:flex-row justify-center border-b-8 border-solid border-zinc-900 text-center lg:px-20 xl:px-44">
         <div className={`flex flex-col justify-center gap-2 px-2 lg:pr-6 lg:text-left ${props.styles} `}>
            <h2 className="text-3xl xl:text-5xl font-semibold">{props.title}</h2>
            <p className="text-xl xl:text-2xl px-4 lg:px-0 pt-2" >{props.desc}</p>
         </div>
         <div className="lg:w-[70rem]">
            <img className="inline-block" src={props.image} alt={props.altdesc} />
         </div>
      </div>
   )
}

export default Content;