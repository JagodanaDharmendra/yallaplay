interface IProps {
  title: string;
  value: string;
}

function StatisticsItem(props: IProps) {
  return (
    <div className="flex flex-col h-40 justify-between text-center">
      <div className="relative flex">
        <img src={require("../../../../../assets/fun-facts-bg.png")} alt="statistics background" />
        <div className="absolute flex h-full w-full justify-center content-center items-center">
          <h1 className=" font-semibold text-lg">{props.value}</h1>
        </div>
      </div>
      <div>{props.title}</div>
    </div>
  );
}

export default StatisticsItem;
