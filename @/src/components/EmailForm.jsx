import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        process.env.VITE_EMAILJS_SERVICE_ID,
        process.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email // Set the reply-to email to be the sender's email
        },
        process.env.VITE_EMAILJS_USER_ID
      );

      console.log('Email sent:', response.status, response.text);
      alert('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
      />

      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
