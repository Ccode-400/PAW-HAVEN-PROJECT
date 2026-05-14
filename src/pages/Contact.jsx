import React, { useState } from 'react';

// I'm using a simple functional component for the contact page
const ContactPage = () => {
  // State to handle the form inputs
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: ''
  });

  // This function runs when the user clicks 'Submit'
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // For now, just logging to console to make sure it works
    console.log("Form submitted by:", formData.userName);
    alert('Thanks for reaching out! Someone from PW will get back to you.');
    
    // Clear the form after sending
    setFormData({ userName: '', userEmail: '', userMessage: '' });
  };

  return (
    <div className="contact-container font-sans">
      {/* Page Header - styled with PW brand colors */}
      <header className="bg-orange-500 p-12 text-center text-white">
        <h1 className="text-4xl font-extrabold uppercase tracking-wide">Contact Us</h1>
        <p className="text-lg mt-2 italic">Help us protect Kenya's animals</p>
      </header>

      {/* Main content area splits into Form and Info */}
      <main className="max-w-5xl mx-auto my-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: The Form */}
        <div className="form-section bg-white p-6 shadow-md rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Send us a message</h2>
          
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-bold text-gray-600 mb-1">Your Name:</span>
              <input 
                type="text" 
                placeholder="Enter your full name"
                className="border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                value={formData.userName}
                onChange={(e) => setFormData({...formData, userName: e.target.value})}
                required 
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-bold text-gray-600 mb-1">Email Address:</span>
              <input 
                type="email" 
                placeholder="example@mail.com"
                className="border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                value={formData.userEmail}
                onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                required 
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-bold text-gray-600 mb-1">Message:</span>
              <textarea 
                rows="4" 
                placeholder="How can we help?"
                className="border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                value={formData.userMessage}
                onChange={(e) => setFormData({...formData, userMessage: e.target.value})}
                required
              ></textarea>
            </label>

            <button 
              type="submit" 
              className="bg-green-600 text-white font-bold py-3 px-6 rounded hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Office Details */}
        <div className="info-section space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 underline decoration-green-500">How to Find Us</h2>
            <p className="mt-4 text-gray-600">
              Our main headquarters are in Karen, but we have branches all over the country. 
              Feel free to call our emergency line for rescues.
            </p>
          </div>

          <div className="contact-details bg-gray-50 p-5 rounded border-l-4 border-orange-500">
            <p><strong>📞 Phone:</strong> +254 (0) 709 007 500</p>
            <p className="my-2"><strong>✉️ General Email:</strong> info@pw.or.ke</p>
            <p><strong>⏰ Hours:</strong> Mon-Sat (9:00 AM - 5:00 PM)</p>
          </div>

          <div className="branches">
            <h3 className="font-bold text-lg mb-3">Regional Branches:</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="bg-white p-2 border border-gray-200">📍 Nairobi (HQ)</li>
              <li className="bg-white p-2 border border-gray-200">📍 Naivasha</li>
              <li className="bg-white p-2 border border-gray-200">📍 Mombasa</li>
              <li className="bg-white p-2 border border-gray-200">📍 Nanyuki</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
