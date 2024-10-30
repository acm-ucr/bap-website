import CustomCalendar from "@/components/events/Calendar";
import EventCard from "@/components/events/EventCard";
import Title from "@/components/Title";

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
      <div className="flex w-11/12 justify-start">
        <Title title="UPCOMING EVENTS" />
      </div>
      <EventCard />
      <EventCard />
      <EventCard />
      <CustomCalendar events={tempEvents} />
    </div>
  );
};

export default Events;
