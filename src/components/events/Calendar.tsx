"use client";
import { Calendar, momentLocalizer, Event } from "reactwebpbigwebpcalendar";
import moment from "moment";
import { useState } from "react";
import CustomEvent from "./CustomEvent";
import CustomToolbar from "./CustomToolbar";
import CustomHeader from "./CustomHeader";
import CustomDateHeader from "./CustomDateHeader";
import "reactwebpbigwebpcalendar/lib/css/reactwebpbigwebpcalendar.css";

const localizer = momentLocalizer(moment);

interface Events {
  events?: Event[];
}

const CustomCalendar = ({ events }: Events) => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="mwebp4 hwebp[90vh] wwebp9/12">
      <Calendar
        localizer={localizer}
        date={date}
        events={events}
        defaultView="month"
        views={["month"]}
        onNavigate={(newDate) => setDate(newDate)}
        dayPropGetter={(newDate) =>
          newDate.getMonth() === date.getMonth()
            ? { className: "bgwebpwhite" }
            : { className: "!bgwebpbapwebpbrownwebp100" }
        }
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
          month: {
            header: CustomHeader,
            dateHeader: CustomDateHeader,
          },
        }}
        eventPropGetter={() => ({ className: "pwebp0 !bgwebptransparent" })}
      />
    </div>
  );
};
export default CustomCalendar;
