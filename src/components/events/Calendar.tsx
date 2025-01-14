"use client";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import CustomEvent from "./CustomEvent";
import CustomToolbar from "./CustomToolbar";
import CustomHeader from "./CustomHeader";
import CustomDateHeader from "./CustomDateHeader";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@/app/calendar.css";

const localizer = momentLocalizer(moment);

interface Events {
  events?: Event[];
}

const CustomCalendar = ({ events }: Events) => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="m-4 w-9/12">
      <Calendar
        localizer={localizer}
        date={date}
        events={events}
        defaultView="month"
        views={["month"]}
        onNavigate={(newDate) => setDate(newDate)}
        dayPropGetter={(newDate) =>
          newDate.getMonth() === date.getMonth()
            ? { className: "bg-white" }
            : { className: "!bg-bap-brown-100" }
        }
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
          month: {
            header: CustomHeader,
            dateHeader: CustomDateHeader,
          },
        }}
        eventPropGetter={() => ({ className: "p-0 !bg-transparent" })}
      />
    </div>
  );
};
export default CustomCalendar;
