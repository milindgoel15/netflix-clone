import Header from "./components/elements/Header";
import Hero from "./components/layouts/Hero";
import Content from "./components/layouts/Content";
import Footer from "./components/elements/Footer";
import ContentData from "./utils/ContentData";
import Faq from "./components/layouts/Faq";

function App() {
  return (
    <>
      <div className="bg-hero bg-cover">
        <Header />
        <Hero />
      </div>
      {
        ContentData.map(props => (
          <Content 
            key={props.id}
            title={props.title}
            desc={props.desc}
            altdesc={props.altdesc}
            image={props.image}
            styles={props.styles}
          />
        ))
      }
      <Faq />
      <Footer />
    </>
  );
}

export default App;
