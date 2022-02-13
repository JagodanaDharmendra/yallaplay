import { TeamItem } from "./item";

const teamData = [
  {
    name: "kareem seddik",
    img: require("../../../../assets/founders/kareem.jpeg"),
    status: "ceo",
  },
  {
    name: "israel lot",
    img: require("../../../../assets/founders/israel.jpeg"),
    status: "cto",
  },
  {
    name: "hussein hajo",
    img: require("../../../../assets/founders/hussein.jpeg"),
    status: "coo",
  },
  {
    name: "mahmoud ismail",
    img: require("../../../../assets/founders/mahmoud.png"),
    status: "cfo",
  },
  {
    name: "sara el-bachri",
    img: require("../../../../assets/founders/sara.png"),
    status: "cmo",
  },
];

function TeamView() {
  return (
    <div className="flex flex-col py-4 items-center text-center w-full justify-center">
      <div className="flex w-full flex-col">
        <h2 className="block text-primary uppercase text-base">TEAM</h2>
        <h2 className="text-white text-3xl sm:text-4xl mt-4 sm:mt-8">Behind The Scenes</h2>
        <p className="text-white mt-4 opacity-70">
          Meet the faces behind YallaPlay
        </p>
      </div>
      <div className="flex flex-wrap mt-8 items-center justify-center content-center gap-4 lg:gap-8">
        {teamData.map((value) => {
          return (
            <div key={value.status}>
              <TeamItem {...value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamView;
