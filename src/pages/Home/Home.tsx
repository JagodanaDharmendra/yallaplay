import { Background, Navbar } from "../../components";

function Home() {
  return (
    <div className="relative">
      {/* Background */}
      <Background />
      <div className="absolute top-0 left-0 w-screen items-center justify-center content-center">
        {/* Nav Bar */}
        <div className="container flex p-4">
          <Navbar />
        </div>
        {/* Content */}
        <div id="about-us" className="container flex p-4 h-screen">
          About us
        </div>
        <div id="our-games" className="container flex p-4 h-screen">
          our-games
        </div>
        <div id="our-services" className="container flex p-4 h-screen">
          our-services
        </div>
        <div id="founders" className="container flex p-4 h-screen">
          founders
        </div>
        <div id="investors" className="container flex p-4 h-screen">
          investors
        </div>
        <div id="contact-us" className="container flex p-4 h-screen">
          contact-us
        </div>
      </div>
    </div>
  );
}

export default Home;
