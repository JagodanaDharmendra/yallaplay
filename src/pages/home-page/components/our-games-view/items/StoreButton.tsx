import { FaApple, FaGoogle } from "react-icons/fa";

export enum IButtonType {
  APPLE,
  GOOGLE,
}

interface IProps {
  type: IButtonType;
  href: string;
}

function StoreButton(props: IProps) {
  const Icon =
    props.type === IButtonType.APPLE ? (
      <FaApple className="h-7 w-7" />
    ) : (
      <FaGoogle className="h-7 w-7" />
    );
  const titleText =
    props.type === IButtonType.APPLE ? "Download on the" : "GET IT ON";
  const subText =
    props.type === IButtonType.APPLE ? "App Store" : "Google Play";

  return (
    <div className="rounded-md w-44 h-14 border-[0.5px] flex">
      <a
        href={props.href}
        className="flex flex-row items-center justify-around w-full hover:bg-primary hover:bg-opacity-75"
        target="_blank"
        rel="noopener noreferrer"
      >
        {Icon}
        <div className="flex flex-col">
          <span className="text-xs font-thin">{titleText}</span>
          <span className="block text-sm font-normal">{subText}</span>
        </div>
      </a>
    </div>
  );
}

export default StoreButton;
