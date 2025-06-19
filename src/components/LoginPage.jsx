import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext'; 


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin credentials
    if (username === 'admin' && password === 'admin123') {
      login(true); // admin
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else if (username === 'user' && password === 'password') {
      login(false); // regular user
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', 'false');
      navigate('/products');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex bg-cover bg-gray-100 items-center justify-center h-screen w-full">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 sm:p-6 md:p-10 rounded-lg shadow-2xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-black">
          Welcome Back
        </h2>

        <div className="mb-4 sm:mb-6">
          <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-lg">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-lg focus:ring-2 focus:ring-red-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-6 sm:mb-8">
          <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-lg">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <button
            type="submit"
            className="bg-red-600 text-white w-full py-2 sm:py-3 rounded-lg text-sm sm:text-lg hover:bg-red-700 transition duration-300"
          >
            Login
          </button>
        </div>

        <div className="flex justify-between items-center mb-4 sm:mb-6 mt-2 sm:mt-4">
          <div>
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-xs sm:text-sm text-black">
              Remember Me
            </label>
          </div>
          <a href="/forgot-password" className="text-red-400 hover:underline text-xs sm:text-sm">
            Forgot Password?
          </a>
        </div>

        <div className="mt-4 sm:mt-6">
          <p className="text-center text-sm sm:text-base text-gray-600 mb-2">
            New user?{' '}
            <Link to="/signup" className="text-red-500 hover:underline font-medium">
              create an account
            </Link>
          </p>
          <button className="bg-gray-500 text-white px-4 py-2 rounded text-sm sm:text-lg hover:bg-gray-600 transition w-full mb-2">
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
