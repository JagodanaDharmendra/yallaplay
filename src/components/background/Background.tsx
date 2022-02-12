// import { Parallax } from "react-scroll-parallax";
const imgBackground = require("../../assets/bg-site.jpeg");

function Background() {
  return (
    <div className="flex w-screen">
      {/* <Parallax speed={-10} className="flex w-full"> */}
      <img src={imgBackground} className="w-full" alt="background" />
      {/* </Parallax> */}
    </div>
  );
}

export default Background;
