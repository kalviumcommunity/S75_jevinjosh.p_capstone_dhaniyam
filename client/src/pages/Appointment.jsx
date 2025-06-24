import React from 'react';

const Appointment = () => (
  <div className="p-6 max-w-xl mx-auto">
    <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
    <input className="border p-2 mb-2 w-full" placeholder="Enter Address" />
    <input className="border p-2 mb-2 w-full" placeholder="Date" type="date" />
    <select className="border p-2 mb-2 w-full">
      <option>Select Time Slot</option>
      <option>Morning</option>
      <option>Afternoon</option>
      <option>Evening</option>
    </select>
    <button className="bg-indigo-600 text-white p-2 w-full">Confirm Appointment</button>
  </div>
);

export default Appointment;
