import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../MainContent/MainContent.css"
import "../Background/Background.css"

function About() {
    return (
      <main>
        <div >
          <Navbar />
          <Header />
          <p className= "test">Trailing Stars offers unparalleled outdoor excursions for adventurers seeking to explore the cosmos. 
            Our guided trips take you on an unforgettable journey out on the lakes, trails, and exclusive camp areas where you can experience the awe-inspiring beauty of the night sky. 
            We provide expert guides who will help you to navigate the constellations and understand the cosmos, all while creating memories that will last a lifetime. 
            Join us for an adventure like no other and let Trailing Stars lead the way</p>
          <Footer />
        </div>
      </main>
    );
  }

 export default About;