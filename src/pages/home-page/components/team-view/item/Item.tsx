interface IProps {
  name: string;
  status: string;
  img: any;
}

function TeamItem(props: IProps) {
  return (
    <div className="flex flex-col p-2 items-center w-72">
      <div className="w-48 h-48 relative transform transition duration-300 hover:scale-110">
        <div className="absolute flex justify-center items-center top-[28px] left-0 right-0 z-10">
          <img
            className="rounded-full w-[136px] h-[136px]"
            alt={props.name}
            src={props.img}
          />
        </div>
        <div className="flex justify-center items-center z-0">
          <img
            className="rounded-full h-48 w-48"
            alt="founder background"
            src={require("../../../../../assets/founder-bg.png")}
          />
        </div>
      </div>
      <div className="relative mt-4">
        <h1 className="absolute top-1.5 right-0 left-0 text-white font-semibold uppercase text-lg">
          {props.name}
        </h1>
        <img
          alt="founder name background"
          src={require("../../../../../assets/founder-name.png")}
        />
      </div>
      <div className="mt-2">
        <i className="text-primary font-thin text-sm uppercase">{`- ${props.status} -`}</i>
      </div>
    </div>
  );
}

export default TeamItem;
