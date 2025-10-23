import React, { useState } from 'react';
import { sendContact } from '../api/api';
import Button from '../components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields');
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      await sendContact(formData);
      setStatus('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 mt-16 max-w-2xl">
      <h1 className="text-5xl font-bold mb-4 text-center">Get In Touch</h1>
      <p className="text-gray-400 text-center mb-12">
        Have a question or want to work together? Drop me a message!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-accent text-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-accent text-white"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-accent text-white resize-none"
            placeholder="Your message..."
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>

        {status && (
          <p className={`text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}