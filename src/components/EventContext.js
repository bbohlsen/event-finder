import React, { createContext, useState, useEffect } from 'react';

/**
 * Creates a context.
 */
export const EventContext = createContext();

/**
 * 
 * @param {Object} props - Props passed to component.
 * @param {ReactNode} props.children - Child components.
 * @returns {JSX.Element} - Rendered EventProvider component.
 */
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  /**
   * Keeps event data persistent.
   */
  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  /**
   * Saves events to array.
   * 
   * @param {Array} updatedEvents - Updated events data to save.
   */
  const saveEvents = (updatedEvents) => {
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  /**
   * Adds an event to the list.
   * 
   * @param {Object} event - Event object to add.
   */
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  /**
   * Deletes an event from the list based on index.
   * 
   * @param {number} index - The index number of the event.
   */
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