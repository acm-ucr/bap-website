const EventCard = () => {
  return (
    <div className="mx-4 my-10 flex h-[25%] w-[65%] flex-col justify-between rounded-md bg-bap-brown-100 bg-opacity-50 py-7 pl-10 sm:mx-8 md:mx-12 lg:mx-24">
      <p className="text-3x1 mb-4 w-[70%] sm:text-4xl lg:text-5xl">
        WEEKLY MEETING
      </p>
      <p className="mb-1 w-[80%] text-xl font-semibold text-bap-red-200 sm:text-2xl">
        August 14th @ 6:00pm - 7:00pm | Location
      </p>
      <p className="w-[80%] text-lg sm:text-xl lg:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};
export default EventCard;
