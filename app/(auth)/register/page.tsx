'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('regEmail', form.email);
      router.push('/verify-otp');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="p-8 bg-gray-800 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 bg-gray-700 rounded" onChange={e => setForm({...form, name: e.target.value})} required />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-700 rounded" onChange={e => setForm({...form, email: e.target.value})} required />
        <input type="password" placeholder="Password" className="w-full p-2 mb-6 bg-gray-700 rounded" onChange={e => setForm({...form, password: e.target.value})} required />
        <button type="submit" className="w-full bg-red-600 p-2 rounded font-bold hover:bg-red-700">Sign Up</button>
      </form>
    </div>
  );
}