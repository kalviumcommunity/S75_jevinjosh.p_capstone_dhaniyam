import React from 'react';

const Login = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-4">Login</h2>
    <input className="border p-2 mb-2 w-full" placeholder="Aadhar Number" />
    <input className="border p-2 mb-2 w-full" placeholder="OTP" />
    <button className="bg-green-600 text-white p-2 w-full">Login</button>
  </div>
);

export default Login;

