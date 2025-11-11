import React from 'react';
import Header from '../layouts/Header';
import CalendarSchedule from './AppointmentCalendar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import BathroomIcon from '@mui/icons-material/Bathroom';
import SharedLayoutAnimation from '../SharedAnimation';

const Dashboard = () => {
  return (
    <div>
      <Button variant="contained" color="success">
        Hello world <HomeIcon /> <BathroomIcon />
      </Button>

      <SharedLayoutAnimation />
      <CalendarSchedule />
    </div>
  );
};

export default Dashboard;
