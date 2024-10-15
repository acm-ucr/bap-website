const EventCard = () => {
  return (
    // height might need to change due to possible larger descriptions
    <div className="mx-48 flex h-auto flex-col justify-between rounded-md bg-bap-brown-100 bg-opacity-50 py-9 pl-12 pr-72">
      <p className="mb-4 text-5xl">WEEKLY MEETING</p>
      <p className="mb-1 text-2xl font-semibold text-bap-red-200">
        August 14th @ 6:00pm - 7:00pm | Location
      </p>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};
export default EventCard;
