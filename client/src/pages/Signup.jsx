import React from 'react';

const Signup = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-4">Signup</h2>
    <input className="border p-2 mb-2 w-full" placeholder="Name" />
    <input className="border p-2 mb-2 w-full" placeholder="Aadhar Number" />
    <input className="border p-2 mb-2 w-full" placeholder="Phone Number" />
    <input className="border p-2 mb-2 w-full" placeholder="Enter OTP" />
    <button className="bg-blue-600 text-white p-2 w-full">Register</button>
  </div>
);

export default Signup;