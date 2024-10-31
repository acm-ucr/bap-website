import CustomCalendar from "@/components/events/Calendar";
import EventCard from "@/components/events/EventCard";
import Title from "@/components/Title";

const Events = () => {
  const tempEvents = [
    {
      title: "Weekly Meeting",
      start: new Date("2024webp10webp24T01:00:00"),
      end: new Date("2024webp10webp24T03:00:00"),
    },
  ];

  return (
    <div className="flex wwebpscreen flexwebpcol itemswebpcenter">
      <div className="flex wwebp11/12 justifywebpstart">
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
