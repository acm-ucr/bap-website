"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import CustomCalendar from "@/components/events/Calendar";
import EventCard from "@/components/events/EventCard";
import Title from "@/components/Title";
import { Event } from "react-big-calendar";

interface GoogleEvent {
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const getUpcomingEvents = (events: Event[]) => {
    const today = new Date();
    return events
      .filter((event) => new Date(event.start) >= today)
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .slice(0, 3);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_CALENDAR_ID
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=starttime&timeMin=${new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1,
        ).toISOString()}&timeMax=${new Date(
          new Date().getMonth() === 11
            ? new Date().getFullYear() + 1
            : new Date().getFullYear(),
          new Date().getMonth() === 11 ? 0 : new Date().getMonth() + 1,
          1,
        ).toISOString()}`,
      )
      .then((result) => {
        console.log(result);
        setEvents(
          result.data.items.map(
            (item: GoogleEvent): Event => ({
              start: new Date(item.start.dateTime),
              end: new Date(item.end.dateTime),
              title: item.summary,
            }),
          ),
        );
      });
  }, []);

  const upcomingEvents = getUpcomingEvents(events);

  return (
    <div className="mb-10 flex w-screen flex-col items-center">
      {events.length > 0 && upcomingEvents.length > 0 && (
        <div className="flex w-11/12 justify-start">
          <Title title="UPCOMING EVENTS" />
        </div>
      )}
      {upcomingEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
      <CustomCalendar events={events} />
    </div>
  );
};

export default Events;
