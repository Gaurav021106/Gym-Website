'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    const email = localStorage.getItem('regEmail');
    const res = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    });
    if (res.ok) {
      alert('Account verified successfully!');
      router.push('/login');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleVerify} className="p-8 bg-gray-800 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
        <input type="text" placeholder="6-digit OTP" className="w-full p-2 mb-6 bg-gray-700 rounded text-center tracking-widest text-xl" onChange={e => setOtp(e.target.value)} maxLength={6} required />
        <button type="submit" className="w-full bg-green-600 p-2 rounded font-bold hover:bg-green-700">Verify Email</button>
      </form>
    </div>
  );
}