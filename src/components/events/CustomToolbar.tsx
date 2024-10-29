import { ToolbarProps } from "react-big-calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomToolbar = (props: ToolbarProps) => {
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  return (
    <div className="-ml-4 mb-3 flex items-center justify-center text-xl sm:justify-start sm:text-2xl md:text-5xl">
      <ChevronLeft size={44} onClick={() => props.onNavigate("PREV")} />
      <div className="">
        {`${months.at(props.date.getMonth())} ${props.date.getFullYear()}`}
      </div>
      <ChevronRight size={44} onClick={() => props.onNavigate("NEXT")} />
    </div>
  );
};

export default CustomToolbar;
