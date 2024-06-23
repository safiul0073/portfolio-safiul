"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: username, password }),
    });

    if (res.status === 200) {
      router.push('/dashboard');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form className='flex flex-col gap-4 md:w-1/2 mx-auto p-4' onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='border border-indigo-500  py-2 px-4 hover:border-indigo-600' type="submit">Login</button>
    </form>
    </div>
  );
}