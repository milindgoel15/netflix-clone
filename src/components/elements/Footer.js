import FooterData from "../../utils/FooterData";
import Languages from "./Languages";

let Footer = () => {
   return (
      <footer className="text-zinc-500 text-sm flex py-8 flex-col justify-center text-center mx-10 sm:mx-28 md:mx-40 lg:mx-52 xl:mx-64 ">
         <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center ">
            <p>Questions? Call <a className="border-b-0 transition-all border-b-transparent hover:border-b hover:border-red-600 " href="tel:+000-800-040-1843">000-800-040-1843</a></p>
            <div className="flex items-center ">
               <Languages />
               <p>Netflix India</p>
            </div>
         </div>

         <div className="py-10" >
            {
               FooterData.map(props => (
                  <div className="grid grid-cols-2 lg:grid-cols-4 text-left  " key={props.id}>
                     {
                        props.values.map(props => (
                           <li className="list-none py-2" key={props.id} >
                              <a className="border-b-0 transition-all border-b-transparent hover:border-b hover:border-red-600 " href={props.link}> {props.valueName} </a>
                           </li>
                        ))
                     }
                  </div>
               ))
            }
         </div>
         <div>

            <p className="" >Disclaimer: This project is just for learning purposes. All the credit goes to the <a className="text-red-600 transition-all hover:text-red-800" href="https://netflix.com" target="_blank" rel="noopener noreferrer">Netflix Team</a>.
               <br />
               This project is made possible using <a className="border-b-0 transition-all border-b-transparent hover:border-b hover:border-red-600 " href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> and <a className="border-b-0 transition-all border-b-transparent hover:border-b hover:border-red-600 " href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">TailwindCSS</a> with further styling improvements.
            </p>
            <p className="transition-all pt-6 duration-300 ease-in">Made with<span className="text-red-600 transition-all hover:text-red-800 duration-300 ease-in-out"> ❤ </span> by <a rel="noreferrer" href="https://github.com/milindgoel15" target="_blank" className="transition-all duration-300 ease-in-out hover:text-red-600">Milind Goel</a>.
            </p>
         </div>
      </footer>
   )
}

export default Footer;