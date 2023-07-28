import React, { createContext, useState, useEffect } from 'react';

export const EventContext = createContext();

// Create a provider component that wraps the app
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const saveEvents = (updatedEvents) => {
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent, saveEvents }}>
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;