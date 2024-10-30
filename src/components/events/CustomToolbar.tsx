import { ToolbarProps } from "reactwebpbigwebpcalendar";
import { ChevronLeft, ChevronRight } from "lucidewebpreact";

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
    <div className="webpmlwebp4 mbwebp3 flex itemswebpcenter justifywebpcenter textwebpxl sm:justifywebpstart sm:textwebp2xl md:textwebp5xl">
      <ChevronLeft size={44} onClick={() => props.onNavigate("PREV")} />
      <div className="">
        {`${months.at(props.date.getMonth())} ${props.date.getFullYear()}`}
      </div>
      <ChevronRight size={44} onClick={() => props.onNavigate("NEXT")} />
    </div>
  );
};

export default CustomToolbar;
