import { Event } from "react-big-calendar";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  console.log(event);
  return (
    <div className="mx-4 my-6 flex h-[25%] w-[65%] flex-col justify-between rounded-md bg-bap-brown-100 bg-opacity-50 py-7 pl-10 sm:mx-8 md:mx-12 lg:mx-24">
      <p className="text-3x1 w-[70%] sm:text-4xl lg:text-5xl">
        {event.title?.toLocaleString()}
      </p>
      {event.start?.toLocaleString() === "Invalid Date" ? null : (
        <p className="mb-1 mt-4 w-[80%] rounded-xl bg-bap-red-200 p-1 text-xl font-semibold sm:text-2xl">
          {event.start?.toLocaleString()}
        </p>
      )}
    </div>
  );
};
export default EventCard;
