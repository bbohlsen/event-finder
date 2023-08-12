import React, { useContext, useState } from 'react';
import { EventContext } from './EventContext';

import './styles.css';


/**
 * Homepage that shows the list of events.
 * 
 * @returns {JSX.Element} - Rendered Homepage component.
 */
function HomePage() {

  const { events, saveEvents } = useContext(EventContext);
  const [newEvent, setNewEvent] = useState('');
  var [attendance, setAttendance] = useState(0);

  const goingToEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index] = {
      ...updatedEvents[index],
      attendance: updatedEvents[index].attendance + 1,
    };
    saveEvents(updatedEvents);
  };



  
  return (

    <div>
      <h2>Home Page</h2>
      <h3>Events:</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}
          <button onClick={() => goingToEvent(index)}>going</button>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;








