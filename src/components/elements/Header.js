import Logo from "../../assets/images/Logo.svg";
import Languages from "./Languages";

let Header = () => {
   return (
      <header className="flex bg-transparent flex-row p-7 sm:px-9 md:px-12 xl:px-12 justify-between items-center">
         <img className="h-6 sm:h-7 md:h-9 xl:h-12" src={Logo} alt="Logo" />

         <div className="flex">
            <Languages />
            <a href="https://www.netflix.com/login" target="_blank" rel="noopener noreferrer">
               <button className="bg-red-600 transition-all hover:bg-red-800 text-white text-sm md:text-base font-semibold px-2 pb-1 md:px-3 md:py-2 rounded-sm">Sign In</button>
            </a>
         </div>
      </header>
   )
}

export default Header;
