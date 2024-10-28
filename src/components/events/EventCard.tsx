const EventCard = () => {
  return (
    // height might need to change due to possible larger descriptions
    <div className="mx-4 flex h-auto flex-col justify-between rounded-md bg-bap-brown-100 bg-opacity-50 px-4 py-6 sm:mx-8 sm:px-8 sm:py-8 md:mx-12 lg:mx-48 lg:py-9 lg:pl-12 lg:pr-72">
      <p className="text-3x1 mb-4 sm:text-4xl lg:text-5xl">WEEKLY MEETING</p>
      <p className="mb-1 text-xl font-semibold text-bap-red-200 sm:text-2xl">
        August 14th @ 6:00pm - 7:00pm | Location
      </p>
      <p className="text-lg sm:text-xl lg:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};
export default EventCard;
