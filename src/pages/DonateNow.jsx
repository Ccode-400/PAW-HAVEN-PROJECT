import React from 'react';

const Donate = () => {
  const tiers = [
    { amount: "$25", label: "Fill a Bowl", impact: "Provides a week of nutritious meals for one dog." },
    { amount: "$50", label: "Vaccine Hero", impact: "Covers essential shots for a newly rescued kitten." },
    { amount: "$100", label: "The Works", impact: "Covers a full vet check-up and microchipping." },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-8 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Support the Journey 🦴</h1>
        <p className="text-gray-700 text-lg mb-12">
          Your donation goes directly toward medical care, shelter, and snacks 
          (the good kind!) for our residents.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-white w-64 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform border-b-8 border-blue-400">
              <span className="text-blue-500 font-bold text-sm uppercase">{tier.label}</span>
              <h2 className="text-4xl font-black my-4 text-gray-800">{tier.amount}</h2>
              <p className="text-gray-500 text-sm mb-6">{tier.impact}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Select
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-100 p-8 rounded-2xl inline-block">
          <p className="text-blue-800 font-medium mb-4">Want to give a custom amount?</p>
          <div className="flex gap-2">
            <input 
              type="number" 
              placeholder="Amount $" 
              className="p-3 rounded-lg border-none focus:ring-2 focus:ring-blue-400 outline-none w-32"
            />
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-all">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;