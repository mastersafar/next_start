'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Login() {
  const [email, setEmail] = useState('dev@tasameem.ly');
  const [password, setPassword] = useState('Tasameem01*');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      router.replace('/dashboard');
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${apiBaseUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid credentials');
      }

      const data = await response.json();

      Cookies.set('token', data.token.plainTextToken, {
        expires: 3,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });

      console.log('Token set in cookies:', data.token.plainTextToken);

      window.location.href = '/dashboard'; // Full reload for middleware reevaluation
    } catch (err) {
      console.error('Error during login:', err.message);
      setError(err.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
