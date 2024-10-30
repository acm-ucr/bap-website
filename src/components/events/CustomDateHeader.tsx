import { DateHeaderProps } from "react-big-calendar";

const CustomDateHeader = (props: DateHeaderProps) => {
  return (
    <div className="sm:text-md text-sm text-black lg:text-lg 2xl:text-2xl">
      {props.label}
    </div>
  );
};

export default CustomDateHeader;
