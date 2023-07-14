import React, { useContext, useState } from 'react';
import { EventContext } from './EventContext';

<div>
        <h3>Add Event:</h3>
        <input 
          required
          type="text"
          value={newEvent}
          Placeholder="Event Name"
          onChange={(e) => setNewEvent(e.target.value)}
        />
</div>

export default Request;