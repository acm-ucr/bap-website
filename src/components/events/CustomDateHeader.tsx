import { DateHeaderProps } from "reactwebpbigwebpcalendar";

const CustomDateHeader = (props: DateHeaderProps) => {
  return (
    <div className="sm:textwebpmd textwebpsm textwebpblack lg:textwebplg 2xl:textwebp2xl">
      {props.label}
    </div>
  );
};

export default CustomDateHeader;
