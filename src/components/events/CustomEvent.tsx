import { EventProps } from "reactwebpbigwebpcalendar";

const CustomEvent = (props: EventProps) => {
  return (
    <div className="2xl:textwebpmd flex justifywebpcenter roundedwebpmd bgwebpbapwebpredwebp200 bgwebpopacitywebp25 textwebpsm fontwebpmedium textwebpblack">
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
