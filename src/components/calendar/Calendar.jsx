import React, { useState } from 'react';
import './Calendar.css';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const events = [
  { id: 1, title: 'Design Meetup', time: '10:00 AM', day: 15, duration: 2, color: 'blue' },
  { id: 2, title: 'Team Meeting', time: '02:00 PM', day: 18, duration: 1, color: 'pink' },
  { id: 3, title: 'Catch up with Lisa', time: '04:00 PM', day: 24, duration: 1, color: 'blue' },
];

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Generate placeholder days for October 2026 (starting on Thursday roughly for visual)
  const days = [];
  for (let i = 0; i < 3; i++) days.push({ date: 28 + i, prevMonth: true });
  for (let i = 1; i <= 31; i++) days.push({ date: i, currentMonth: true });
  for (let i = 1; i <= 8; i++) days.push({ date: i, nextMonth: true });

  return (
    <div className="calendar-page">
      <div className="calendar-sidebar">
        <button className="create-event-btn">Create Event</button>
        
        <div className="mini-calendar-box">
          <h4>October 2026</h4>
          <div className="mini-calendar-grid">
            {['S','M','T','W','T','F','S'].map((d, i) => <span key={i} className="mini-day-head">{d}</span>)}
            {/* simple dots for mini calendar */}
            {Array.from({length: 35}).map((_, i) => (
              <span key={i} className={`mini-day ${i === 15 ? 'active' : ''}`}>{i % 31 + 1}</span>
            ))}
          </div>
        </div>

        <div className="upcoming-events">
          <h4>Upcoming Events</h4>
          <div className="event-list">
            <div className="event-list-item">
              <div className="event-avatars">
                <img src="https://via.placeholder.com/30" alt="avatar" />
              </div>
              <div className="event-info">
                <h6>Meeting with UI/UX...</h6>
                <p>12 Oct 2026, 10:00 AM</p>
              </div>
            </div>
            <div className="event-list-item">
              <div className="event-avatars">
                <img src="https://via.placeholder.com/30" alt="avatar" />
              </div>
              <div className="event-info">
                <h6>Design Meeting</h6>
                <p>15 Oct 2026, 02:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="calendar-main">
        <div className="calendar-header">
          <div className="month-nav">
            <button className="nav-btn">&lt;</button>
            <h2>October 2026</h2>
            <button className="nav-btn">&gt;</button>
          </div>
          <div className="view-toggle">
            <button className="view-btn active">Month</button>
            <button className="view-btn">Week</button>
            <button className="view-btn">Day</button>
          </div>
        </div>

        <div className="calendar-grid">
          {daysOfWeek.map(day => (
            <div key={day} className="grid-header-day">{day}</div>
          ))}
          
          {days.map((dayObj, index) => {
            const isToday = dayObj.currentMonth && dayObj.date === 15;
            const dayEvents = events.filter(e => e.day === dayObj.date && dayObj.currentMonth);
            
            return (
              <div key={index} className={`grid-cell ${!dayObj.currentMonth ? 'other-month' : ''}`}>
                <span className={`date-number ${isToday ? 'today' : ''}`}>{dayObj.date}</span>
                <div className="cell-events">
                  {dayEvents.map(ev => (
                    <div 
                      key={ev.id} 
                      className={`event-badge ${ev.color}`}
                      onClick={(e) => { e.stopPropagation(); setSelectedEvent(ev); }}
                    >
                      {ev.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {selectedEvent && (
          <div className="event-popup" onClick={() => setSelectedEvent(null)}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
              <h5>{selectedEvent.title}</h5>
              <p>{selectedEvent.time}</p>
              <button className="close-popup" onClick={() => setSelectedEvent(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
