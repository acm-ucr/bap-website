import CustomCalendar from "@/components/events/Calendar";
import EventCard from "@/components/events/EventCard";

const Events = () => {
  const tempEvents = [
    {
      title: "Weekly Meeting",
      start: new Date("2024-10-24T01:00:00"),
      end: new Date("2024-10-24T03:00:00"),
    },
  ];

  return (
    <div className="flex w-screen flex-col items-center">
      <EventCard />
      <EventCard />
      <EventCard />
      <CustomCalendar events={tempEvents} />
    </div>
  );
};

export default Events;
