interface IProps {
  name: string;
  img: any;
}

function InvestorItem(props: IProps) {
  return (
    <div className="flex justify-center items-center ">
      <img className="h-[207px] w-[315px]" alt={props.name} src={props.img} />
    </div>
  );
}

export default InvestorItem;
