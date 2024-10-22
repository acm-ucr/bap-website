import { HeaderProps } from "react-big-calendar";

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
    <div className="-mx-1 bg-bap-red-200 py-4 text-3xl">
      <div className="lg:hidden xl:block">{days[props.label]}</div>
      <div className="lg:block xl:hidden">{props.label}</div>
    </div>
  );
};

export default CustomHeader;
