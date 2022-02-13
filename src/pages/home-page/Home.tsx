import { Container, Footer, Navbar } from "../../components";
import {
  AboutUsView,
  BannerView,
  ContactUsView,
  InvestorsView,
  OurGamesView,
  OurServicesView,
  ScrollToTopButton,
  TeamView,
} from "./components";

function Home() {
  return (
    <div className="text-white bg-cover bg-no-repeat bg-center justify-center" style={{ backgroundImage: `url(${require("../../assets/bg-site.jpeg")})` }}>
      <Navbar />
      <Container>
        <BannerView />
        <div id="about-us">
          <AboutUsView />
        </div>
        <div id="our-games">
          <OurGamesView />
        </div>
        <div id="our-services">
          <OurServicesView />
        </div>
        <div id="founders">
          <TeamView />
        </div>
        <div id="investors">
          <InvestorsView />
        </div>
        <div id="contact-us">
          <ContactUsView />
        </div>
        <Footer />
      </Container>

      <div className="fixed right-0 sm:right-5 bottom-0 sm:bottom-5" >
        <ScrollToTopButton />
      </div>
    </div >
  );
}

export default Home;
