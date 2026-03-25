import React from 'react';
import './Contact.css';

const contactsData = [
  { id: 1, name: 'Jason Price', role: 'Admin', email: 'janin.p@xyz.com', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
  { id: 2, name: 'Jukailei Smith', role: 'Admin', email: 'jukal.smith@xyz.com', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
  { id: 3, name: 'Raymon', role: 'Admin', email: 'jhon.smith@xyz.com', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop' },
  { id: 4, name: 'Emanuel', role: 'Admin', email: 'emano.smith@xyz.com', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop' },
  { id: 5, name: 'Jason Price', role: 'Admin', email: 'jason.price@xyz.com', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
  { id: 6, name: 'Michael', role: 'Admin', email: 'michael@xyz.com', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop' },
];

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header-row">
        <h2 className="page-title">Contact</h2>
        <button className="add-new-btn">Add New</button>
      </div>

      <div className="contact-grid">
        {contactsData.map(contact => (
          <div className="contact-card" key={contact.id}>
            <div className="contact-img-container">
              <img src={contact.image} alt={contact.name} className="contact-img"/>
            </div>
            <div className="contact-info">
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-email">{contact.email}</p>
            </div>
            <button className="contact-msg-btn">Message</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
