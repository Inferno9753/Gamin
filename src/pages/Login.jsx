import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // You can handle the login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

    return (
        <div className="bg-neutral-800 h-screen flex items-center justify-center text-blue-700">
            <div className=" p-8 rounded-lg w-96">
                <h2 className="text-3xl font-semibold mb-8 text-center ">GAMESGRABBER</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-medium mb-2 text-blue-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-10">
                        <label htmlFor="password" className="block text-lg font-medium mb-2 text-blue-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login