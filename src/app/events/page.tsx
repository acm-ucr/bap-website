import Title from "@/components/Title";
import CustomCalendar from "@/components/events/Calendar";
import EventCard from "@/components/events/EventCard";
import Landing from "@/components/home/Landing";

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
      <Title />
      <Landing />
      <EventCard />
      <EventCard />
      <EventCard />
      <CustomCalendar events={tempEvents} />
    </div>
  );
};

export default Events;
