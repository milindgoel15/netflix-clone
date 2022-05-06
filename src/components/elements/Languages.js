let Languages = () => {
   return (
      <div className="outline mx-3 outline-[0.5px] text-sm md:text-base outline-zinc-500 px-2 py-1 md:px-3 md:py-2" >
         <span className="fill-white">🌐</span>
         <select className=" bg-transparent text-white outline-none " defaultValue="english" name="Languages" id="Languages">
            <option className="bg-black" value="english">English</option>
            <option className="bg-black" value="hindi">हिन्दी</option>
            <option className="bg-black" value="spanish">Español</option>
            <option className="bg-black" value="french">français</option>
         </select>
      </div>
   )
}

export default Languages;