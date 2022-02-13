import { TitleDescItem } from "./items";

const specs = [
  {
    title: "WHAT WE DO",
    desc: "Our engine enables developers to focus on delivering great game experiences by handling the daily live operations with the help of AI",
  },
  {
    title: "OUR FOCUS",
    desc: "Our strength is in real-time multiplayer games. We are focused on long life cycle games with Player vs Player mechanics.",
  },
];

function AboutUsView() {
  return (
    <div className="grid lg:grid-cols-1 w-full lg:w-2/5 space-y-4 text-white py-16 text-justify">
      <h2 className="text-primary font-medium text-lg">ABOUT US</h2>
      <h1 className="font-thin text-[40px]">Who We Are</h1>
      <p className="font-normal text-base">
        We are a group of entrepreneurs with a passion to develop cutting edge
        technology for games.
      </p>

      {specs.map((value) => {
        return <TitleDescItem key={value.title} {...value} />;
      })}
    </div>
  );
}

export default AboutUsView;
