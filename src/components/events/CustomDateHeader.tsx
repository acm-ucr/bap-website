import { DateHeaderProps } from "react-big-calendar";

const CustomDateHeader = (props: DateHeaderProps) => {
  return <div className="text-2xl text-black">{props.label}</div>;
};

export default CustomDateHeader;
