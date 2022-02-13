import classNames from "classnames";
import { IButtonType, StoreButton } from ".";

interface IProps {
  icon: any;
  title: string;
  description: string;
  google: string;
  apple: string;
  image01: any;
  image02: any;
}

function GameItem(props: IProps) {
  return (
    <div className="grid grid-flow-row lg:grid-flow-col w-full py-6 sm:py-12">
      <div className="flex-col space-y-6 sm:space-y-12">
        <img src={props.icon} className="w-24 h-24" alt={props.title} />
        <h1 className="font-semibold text-3xl">{props.title}</h1>
        <p className="font-normal text-base w-full lg:max-w-xl text-justify">
          {props.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-start items-start content-start gap-4">
          {props.apple && (
            <StoreButton type={IButtonType.APPLE} href={props.apple} />
          )}
          {props.google && (
            <StoreButton type={IButtonType.GOOGLE} href={props.google} />
          )}
        </div>
      </div>
      <div className="relative my-8">
        <div className={classNames("w-full flex max-w-2xl")}>
          <img src={props.image01} alt="screen1" />
        </div>
        <div className={classNames("absolute top-32 left-0 right-32")}>
          <img src={props.image02} alt="screen2" />
        </div>
      </div>
    </div>
  );
}

export default GameItem;
