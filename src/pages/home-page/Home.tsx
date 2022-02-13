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
    <div className="text-white bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${require("../../assets/bg-site.jpeg")})` }}>

      {/* Nav Bar */}
      {
        <>
          < Container >
            <Navbar />
          </Container >
        </>
      }

      {/* Content */}
      {
        <>
          < Container >
            <BannerView />
          </Container >

          <Container>
            <div id="about-us">
              <AboutUsView />
            </div>
          </Container>
          <Container>
            <div id="our-games">
              <OurGamesView />
            </div>
          </Container>
          <Container>
            <div id="our-services">
              <OurServicesView />
            </div>
          </Container>
          <Container>
            <div id="founders">
              <TeamView />
            </div>
          </Container>
          <Container>
            <div id="investors">
              <InvestorsView />
            </div>
          </Container>
          <Container>
            <div id="contact-us">
              <ContactUsView />
            </div>
          </Container>

          {/* Footer */}
          <Container>
            <Footer />
          </Container>
        </>
      }

      {/* Scroll to Top Button */}
      {
        <>
          <div className="fixed right-5 bottom-5" >
            <ScrollToTopButton />
          </div>
        </>
      }
    </div >
  );
}

export default Home;
