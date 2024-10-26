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
    <div className="text-md -mx-1 bg-bap-red-200 py-4 sm:text-xl 2xl:text-2xl">
      <div className="hidden xl:block">{days[props.label]}</div>
      <div className="block xl:hidden">{props.label}</div>
    </div>
  );
};

export default CustomHeader;
