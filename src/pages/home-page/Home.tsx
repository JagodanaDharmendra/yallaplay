import { Background, Container, Footer, Navbar } from "../../components";
import { TeamView } from "./components";

function Home() {
  return (
    <div className="relative">
      {/* Background */}
      <Background />

      {/* Content */}
      <div className="absolute top-0 left-0 w-screen">
        {/* Nav Bar */}
        <Container>
          <Navbar />
        </Container>

        {/* Content */}
        <Container>
          <div id="about-us" className="flex p-4 h-screen">
            About us
          </div>
        </Container>
        <Container>
          <div id="our-games" className="flex p-4 h-screen">
            our-games
          </div>
        </Container>
        <Container>
          <div id="our-services" className="flex p-4 h-screen">
            our-services
          </div>
        </Container>
        <Container>
          <div id="founders">
            <TeamView />
          </div>
        </Container>
        <Container>
          <div id="investors" className="flex p-4 h-screen">
            investors
          </div>
        </Container>
        <Container>
          <div id="contact-us" className="flex p-4 h-screen">
            contact-us
          </div>
        </Container>

        {/* Footer */}
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}

export default Home;
