import React, { useContext } from 'react';
import { EventContext } from './EventContext';

import './styles.css';

/**
 * Homepage that shows the list of events.
 * 
 * @returns {JSX.Element} - Rendered Homepage component.
 */
function HomePage() {
  const { events } = useContext(EventContext);

  return (
    <div>
      <h2>Home Page</h2>
      <h3>Events:</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;








