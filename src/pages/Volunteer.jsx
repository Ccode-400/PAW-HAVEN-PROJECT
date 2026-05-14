import React from 'react';
import { Heart, Dog, Clock } from 'lucide-react'; // Optional: Install lucide-react

const Volunteer = () => {
  const roles = [
    { title: "Dog Walker", desc: "Get some steps in with our high-energy pups.", icon: <Dog size={24} /> },
    { title: "Cat Cuddler", desc: "Help socialize our shyest felines with some love.", icon: <Heart size={24} /> },
    { title: "Event Helper", desc: "Help us run adoption days and community events.", icon: <Clock size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-orange-50 p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">Lend a Paw 🐾</h1>
        <p className="text-gray-700 text-lg mb-12">
          Our furry residents need more than just food and water—they need YOU. 
          Whether you have an hour or a weekend, you can change a life.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-orange-100">
              <div className="text-orange-500 mb-4 flex justify-center">{role.icon}</div>
              <h3 className="font-bold text-xl mb-2">{role.title}</h3>
              <p className="text-gray-600 text-sm">{role.desc}</p>
            </div>
          ))}
        </div>

        <form className="bg-white p-8 rounded-3xl shadow-xl max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6">Join the Pack</h2>
          <input type="text" placeholder="Your Name" className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" />
          <input type="email" placeholder="Email Address" className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" />
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors">
            Apply to Volunteer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;