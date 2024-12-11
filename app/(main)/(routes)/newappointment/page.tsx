'use client';
import React, { useState } from 'react';

const NewAppointment: React.FC = () => {
  const [doctor, setDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentReason, setAppointmentReason] = useState('');
  const [comments, setComments] = useState('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState('');

  // Sample list of doctors with availability
  const doctors = [
    { name: 'Dr. John Doe', id: '1', availableTimes: ['9:00 AM', '11:00 AM', '2:00 PM'] },
    { name: 'Dr. Jane Smith', id: '2', availableTimes: ['10:00 AM', '12:00 PM', '3:00 PM'] },
    { name: 'Dr. Emily Davis', id: '3', availableTimes: ['8:00 AM', '1:00 PM', '4:00 PM'] },
  ];

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDoctorId = e.target.value;
    setDoctor(selectedDoctorId);

    // Find the selected doctor's availability times
    const selectedDoctor = doctors.find((doc) => doc.id === selectedDoctorId);
    if (selectedDoctor) {
      setAvailableTimes(selectedDoctor.availableTimes);
      setSelectedTime(''); // Reset selected time when doctor is changed
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Redirect to the appointment confirmation page with query parameters
    const queryParams = new URLSearchParams({
      doctor: doctor  ,
      appointmentDate: appointmentDate,
      selectedTime: selectedTime,
      appointmentReason: appointmentReason,
      comments: comments,
    }).toString();
  
    window.location.href = `/appointment-confirmation?${queryParams}`;
  };
  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-primary">New Appointment</h1>
      <p className="text-muted-foreground mb-6">Request a new appointment in 10 seconds.</p>

      <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="doctor" className="block text-secondary-foreground mb-2">
            Doctor
          </label>
          <select
            id="doctor"
            name="doctor"
            value={doctor}
            onChange={handleDoctorChange}
            className="w-full px-3 py-2 bg-input border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="appointment-date" className="block text-secondary-foreground mb-2">
            Appointment Date
          </label>
          <input
            type="date"
            id="appointment-date"
            name="appointment-date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="w-full px-3 py-2 bg-input border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="appointment-time" className="block text-secondary-foreground mb-2">
            Select Appointment Time
          </label>
          <select
            id="appointment-time"
            name="appointment-time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            disabled={!availableTimes.length}
            className="w-full px-3 py-2 bg-input border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="appointment-reason" className="block text-secondary-foreground mb-2">
            Appointment Reason
          </label>
          <textarea
            id="appointment-reason"
            name="appointment-reason"
            value={appointmentReason}
            onChange={(e) => setAppointmentReason(e.target.value)}
            placeholder="Annual check-up"
            className="w-full px-3 py-2 bg-input border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comments" className="block text-secondary-foreground mb-2">
            Comments/Notes
          </label>
          <textarea
            id="comments"
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Prefer morning appointments, if possible"
            className="w-full px-3 py-2 bg-input border-secondary rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-foreground text-primary-foreground font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default NewAppointment;
