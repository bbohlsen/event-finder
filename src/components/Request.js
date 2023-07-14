import React, { useContext, useState } from 'react';
import { EventContext } from './EventContext';

const ManagerDashboard = ({onDeleteEvent, onAddEvent}) => {
  const {events, addEvent, deleteEvent} = useContext(EventContext);
  const [newEvent, setNewEvent] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  

  const handleAddEvent = () => {
    addEvent(`${newEvent} - ${time} - ${city}`)
    setNewEvent('');
    setTime('');
    setCity('');
  };


  const handleDeleteEvent = (index) => {
    deleteEvent(index);
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <h3>Events:</h3>
      <ul class="Events">
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
          Placeholder="Event Name"
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