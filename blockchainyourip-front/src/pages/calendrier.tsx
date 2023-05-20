import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Box } from '@mui/material';
import Header from '../component/header';

const localizer = momentLocalizer(moment);

const events = [
  {
    start: new Date(),
    end: new Date(),
    title: 'Mon événement',
  },
  // Ajoutez d'autres événements ici...
];

function Calendrier() {
  return (
   
    <Box sx={{ height: '100vh', p: 2, mt: '100px' }}> 
    <Header/>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </Box>
  );
}

export default Calendrier;