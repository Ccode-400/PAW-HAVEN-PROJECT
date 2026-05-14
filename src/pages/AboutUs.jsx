import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About KSPCA</h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed">
          For over a century, we’ve been the voice for Kenya’s animals—rescuing the vulnerable, 
          fighting cruelty, and building a country where every wag, purr, and neigh matters.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-green-600">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Our Mission</h2>
          <p className="leading-relaxed text-gray-700">
            We are on the ground every single day: rescuing animals from neglect, teaching 
            the next generation the value of kindness, and making sure our laws actually protect 
            those who cannot speak for themselves.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Our Vision</h2>
          <p className="leading-relaxed text-gray-700">
            A Kenya where every animal lives free from fear, filled with health, and treated with 
            the respect and compassion they deeply deserve.
          </p>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Stand For</h2>
          <ul className="space-y-5 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span> 
              <span><strong>Protection for all:</strong> Every creature, big or small, deserves a safe space to thrive.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span> 
              <span><strong>Zero tolerance for cruelty:</strong> We step in to stop suffering wherever we find it.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span> 
              <span><strong>Healing and hope:</strong> We don’t just rescue; we rehabilitate and find loving forever homes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl">✔</span> 
              <span><strong>Community first:</strong> True change happens when we educate and inspire people to care.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* History/Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          What started over a hundred years ago as a small, passionate group of animal lovers in Mombasa 
          has grown into a nationwide movement. Today, from our main shelter in Nairobi to our active 
          hubs in Naivasha, Nanyuki, and Watamu, we are still fueled by that exact same raw passion.
        </p>
        <p className="leading-relaxed text-gray-700 border-l-4 border-green-600 pl-4 my-6 italic bg-gray-50 py-3 rounded-r">
          We don't receive government funding. Everything we do is powered entirely by the kindness 
          of volunteers, the generosity of donors, and everyday heroes who refuse to look the other way.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;