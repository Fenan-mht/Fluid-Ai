import Navbar from "./Components/Navbar/Navbar";
import FAQ from "./Sections/FAQ";
import Features from "./Sections/Features/Features";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Story from "./Sections/Story";
import Waitlist from "./Sections/Story/Waitlist";

function App() {
  return (
    <div className="bg-black flex flex-col text-white scroll-smooth">
      <Navbar />
      <div className="mt-16">
        <Hero />
        <Features />
        <Story />
        <FAQ />
        <Waitlist />
        <Footer />
      </div>
    </div>
  );
}

export default App;
