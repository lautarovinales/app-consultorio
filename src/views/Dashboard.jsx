// src/views/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('/api/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los turnos', error);
      });
  }, []);

  return (
    <div>
      <h1>Mis Turnos</h1>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.time} - {appointment.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
