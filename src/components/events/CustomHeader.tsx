import { HeaderProps } from "reactwebpbigwebpcalendar";

interface day {
  [dayAbrv: string]: string;
}

const CustomHeader = (props: HeaderProps) => {
  const days: day = {
    Sun: "Sunday",
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
  };

  return (
    <div className="textwebpmd webpmxwebp1 bgwebpbapwebpredwebp200 pywebp4 sm:textwebpxl 2xl:textwebp2xl">
      <div className="hidden xl:block">{days[props.label]}</div>
      <div className="block xl:hidden">{props.label}</div>
    </div>
  );
};

export default CustomHeader;
