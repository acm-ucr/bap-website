import Title from "@/components/Title";
import Calendar from "@/components/events/Calendar";
import Upcoming from "@/components/events/Upcoming";

const Events = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Title />
      <Upcoming />
      <Upcoming />
      <Upcoming />
      <Calendar />
    </div>
  );
};

export default Events;
