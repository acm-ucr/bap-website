import { EventProps } from "react-big-calendar";

const CustomEvent = (props: EventProps) => {
  return (
    <div className="2xl:text-md flex justify-center text-ellipsis text-wrap rounded-md bg-bap-red-200 bg-opacity-25 p-1 text-center text-sm font-medium text-black">
      {props.event.start
        ? props.event.start.toLocaleTimeString(navigator.language, {
            hour: "numeric",
          })
        : "12 AM"}{" "}
      {props.title}
    </div>
  );
};

export default CustomEvent;
