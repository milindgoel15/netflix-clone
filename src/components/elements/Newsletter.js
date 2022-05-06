let Newsletter = () => {
   return (
      <form method="GET" className="flex flex-col gap-3 items-center" >
         <p className="text-lg px-16 pt-2" >Ready to watch? Enter your email to create or restart your membership.</p>
         <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center">
            <input className="w-[20rem] sm:w-[28rem] md:w-[32rem] xl:w-[36rem] py-4 xl:py-5 px-1 xl:px-2 " type="text" name="Email" id="Email" placeholder="Email Address" required />
            <button className="bg-red-600 transition-all hover:bg-red-800 w-32 xl:w-48 xl:text-lg text-white text-md font-semibold px-3 py-2 xl:px-1 md:py-4 xl:py-5 rounded-sm">Get Started &gt;</button>
         </div>
      </form>
   )
}

export default Newsletter;