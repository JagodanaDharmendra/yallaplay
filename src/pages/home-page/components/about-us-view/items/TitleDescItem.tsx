interface IProps {
  title: string;
  desc: string;
}

function TitleDescItem(props: IProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex border-t-2 border-t-primary border-b-2 border-b-primary justify-between items-center my-3 py-3">
        <div className="text-primary font-medium uppercase">{props.title}</div>
        <img
          src={require("../../../../../assets/dot.png")}
          alt="dot"
          className="w-4 h-4"
        />
      </div>
      <p>{props.desc}</p>
    </div>
  );
}

export default TitleDescItem;
