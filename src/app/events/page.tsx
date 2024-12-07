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

  return (
    <div className="mb-10 flex w-screen flex-col items-center">
      <div className="flex w-11/12 justify-start">
        <Title title="UPCOMING EVENTS" />
      </div>
      <EventCard />
      <EventCard />
      <EventCard />
      <CustomCalendar events={events} />
    </div>
  );
};

export default Events;
