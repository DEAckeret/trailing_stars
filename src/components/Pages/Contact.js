import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../MainContent/MainContent.css"

function Contact() {
    return (
      <main>
        <Navbar />
        <Header />
          <div className='main-content'>
            <p className='main-content'>
              We'd love to hear from you! If you have any questions, suggestions, or feedback,
              please feel free to get in touch with us using the information below:
            </p>
            <p className='main-content'>
              <strong>Email:</strong> contact@example.com
              <br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className='main-content'>
              You can also follow us on social media to stay updated with our latest news and events:
              <br />
              
                <div className="main-content__item">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className="main-content__item">
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="main-content__item">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </p>
          </div>
        <Footer />
      </main>
    );
  }

 export default Contact;