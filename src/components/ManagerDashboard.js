import React, { useContext, useState } from 'react';
import { EventContext } from './EventContext';

const ManagerDashboard = ({onDeleteEvent, onAddEvent}) => {
  const { events, addEvent, deleteEvent } = useContext(EventContext);
  const [newEvent, setNewEvent] = useState('');

  const handleAddEvent = () => {
    if (newEvent) {
      addEvent(newEvent);
      setNewEvent('');
    }
  };

  const handleDeleteEvent = (index) => {
    deleteEvent(index);
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <h3>Events:</h3>
      <ul>
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
          type="text"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default ManagerDashboard;