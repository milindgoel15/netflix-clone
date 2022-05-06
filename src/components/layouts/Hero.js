import Newsletter from "../elements/Newsletter";

let Hero = () => {
   return (
      <section className={`md:h-screen text-white gap-2 py-16 flex flex-col justify-center border-b-8 border-solid border-zinc-900 text-center`}>
         <h2 className="text-3xl xl:text-7xl px-4 xl:px-80 font-bold">Unlimited movies, TV shows and more.</h2>
         <p className="text-lg xl:text-2xl xl:px-44 px-4 pt-2" >Watch anywhere. Cancel anytime.</p>
         <Newsletter />
      </section>
   )
}

export default Hero;