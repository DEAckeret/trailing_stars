import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import VectorScene from "../Media/VectorScene";
import "../MainContent/MainContent.css"
import "../Background/Background.css"
import "../Media/VectorScene.css"

function ArtificialSupernova() {
    return (
      <main>
        <div >
          <Navbar />
          <Header />
          <div className="div">
            <VectorScene />
          </div>
          <Footer />
        </div>
      </main>
    );
  }

 export default ArtificialSupernova;