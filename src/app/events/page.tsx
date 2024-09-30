import Title from "@/components/Title";
import Calendar from "@/components/events/Calendar";
import EventCard from "@/components/events/EventCard";

const Events = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title />
      <EventCard />
      <EventCard />
      <EventCard />
      <Calendar />
    </div>
  );
};

export default Events;
