import FaqData from "../../utils/FaqData";
import Newsletter from "../elements/Newsletter";
import Accordion from "./Accordion";

let Faq = () => {
   return (
      <div className="bg-black text-white gap-6 py-24 flex flex-col justify-center border-b-8 border-solid border-zinc-900 text-center lg:px-20 xl:px-44">
         <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Frequently Asked Questions</h2>

         <section className="py-10">
            {
               FaqData.map(props => (
                  <Accordion
                     key={props.id}
                     ques={props.ques}
                     ans={props.ans}
                  />
               ))
            }
         </section>

         <Newsletter />
      </div>
   )
}

export default Faq;