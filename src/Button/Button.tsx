import "./Button.css";
import { ReactComponent as CircleSVG } from "./circle-wavy-thin-svgrepo-com.svg";
import { ReactComponent as ArrowSVG } from "./arrow-right-solid.svg";

const Button = () => {
  return (
    <div className="root">
      <button className="button">
        <CircleSVG className="border rotate" />
        <CircleSVG className="border rotate-slow" />
        <div className="hover-background"></div>
        <ArrowSVG className="arrow" />
      </button>
    </div>
  );
};

export default Button;
