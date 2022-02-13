import { GameItem, StatisticsItem } from "./items";

const gamesData = [
  {
    icon: require("../../../../assets/games/tarneeb-logo.png"),
    title: "Tarneeb Masters",
    description: `Tarneeb is our first game, which turned into a popular success. The game is based on a popular card game originating from the Middle East. Tarneeb Masters is designed for the mobile phone with a fun and unique experience. We built the game with tons of exciting features including live game play, competitions, rankings, level-ups, social features and more.`,
    google:
      "https://play.google.com/store/apps/details?id=com.yallaplay.tarneebmasters",
    apple: "https://itunes.apple.com/us/app/tarneeb-masters/id1128302574",
    image01: require("../../../../assets/games/tarneeb-screen1.png"),
    image02: require("../../../../assets/games/tarneeb-screen2.png"),
  },

  {
    icon: require("../../../../assets/games/spades-logo.png"),
    title: "Spades Masters",
    description: `Spades is our latest project and has a rich history with many variations of the game being played in households across the USA. Spades Masters is designed to be enjoyed on mobile phones with a few additional twists for an original feel while holding true to the base game. We've designed the game with fans for each variation in mind to cover multiple experiences from a single player relaxing feel, to a multiplayer competitive one with level-ups, social features, aesthetics and more.`,
    google:
      "https://play.google.com/store/apps/details?id=com.yallaplay.spadesmasters",
    apple: "https://apps.apple.com/us/app/spades-masters/id1370702757",
    image01: require("../../../../assets/games/spades-screen1.png"),
    image02: require("../../../../assets/games/spades-screen2.png"),
  },
];

const statistics = [
  {
    title: "Games per Day",
    value: "310K +",
  },
  {
    title: "Minutes per Month",
    value: "10.0M +",
  },
];

function OurGamesView() {
  return (
    <div className="text-white py-16 space-y-12">
      <div className="font-bold text-4xl">
        <h1>Our Games</h1>
      </div>
      <div>
        {gamesData.map((value) => {
          return <GameItem key={value.title} {...value} />;
        })}
      </div>
      <div className="flex flex-row justify-around items-center content-center">
        {statistics.map((value) => {
          return <StatisticsItem key={value.title} {...value} />;
        })}
      </div>
    </div>
  );
}

export default OurGamesView;
