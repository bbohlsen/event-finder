import React, { useContext, useState } from 'react';
import { EventContext } from './EventContext';

import './styles.css';

/**
 * Manager Dashboard allows the user to add or delete events, along with event name, time, and city parameters.
 * 
 * @returns {JSX.Element} - Rendered Manager Dashboard.
 */


const ManagerDashboard = () => {
  const { events, saveEvents } = useContext(EventContext);
  const [newEvent, setNewEvent] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  var [attendance, setAttendance] = useState(0);

  


  /**
   * Handles adding a new event to the list
   */
  const handleAddEvent = () => {
    const updatedEvents = [...events, `${newEvent} - ${time} - ${city}`];
    saveEvents(updatedEvents);
    setNewEvent('');
    setTime('');
    setCity('');
  };

  /**
   * Deletes an event from the list based on index.
   * 
   * @param {number} index - The index number of the event. 
   */
  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    saveEvents(updatedEvents);
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <h3>Events:</h3>
      <ul className="Events">
        {events.map((event, index) => (
          <li key={index}>
            {event}

            <button onClick={() => handleDeleteEvent(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add Event:</h3>
        <input
          required
          type="text"
          value={newEvent}
          placeholder="Event Name"
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <input
          required
          type="text"
          value={time}
          placeholder="Time"
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          required
          type="text"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default ManagerDashboard;