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
  const [attendance, setAttendance] = useState(0);
  

  const goingToEvent = () => {
    setAttendance(attendance => attendance + 1)
  };

  const notGoing = () => {
    if (attendance > 0){
    setAttendance(attendance => attendance - 1)}
  }


  
  return (

    <div>
      <h2>Home Page</h2>
      <h3>Events:</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}
          <button onClick={goingToEvent}>Going</button>
          <button onClick={notGoing}>Changed Mind</button>
          <p>Attending: {attendance}</p>
          <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;








