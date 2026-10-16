/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, User, ArrowLeft, Loader2, ShieldCheck, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Endpoint depends on whether the user is logging in or registering
      const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
      const payload = isRegistering ? { name, email, password } : { email, password };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      // Refresh router cache so Navbar updates with the logged-in user name
      router.refresh();

      // Redirect based on intent or user role
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#090a0f] text-zinc-100 font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="flex h-20 items-center justify-between border-b border-white/[0.08] px-6 sm:px-12 bg-[#0c0d14]/70 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white font-black tracking-tighter shadow-lg shadow-red-600/30 group-hover:scale-105 transition">
            EFC
          </div>
          <div>
            <h1 className="text-sm font-black tracking-widest text-white uppercase">
              EDDY FITNESS CLUB
            </h1>
            <p className="text-[10px] tracking-widest text-zinc-400 font-semibold uppercase">
              RISHIKESH • DEHRADUN • HARIDWAR
            </p>
          </div>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Form Center */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl">
            {/* Glowing Accent Ring */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10 border border-red-500/20 text-red-500">
                {isRegistering ? <UserPlus className="h-6 w-6" /> : <ShieldCheck className="h-6 w-6" />}
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                {isRegistering ? 'Create an Account' : 'Welcome Back'}
              </h2>
              <p className="mt-1.5 text-xs text-zinc-400">
                {isRegistering
                  ? 'Register to book sessions and track your fitness progress'
                  : 'Sign in to access your dashboard and membership details'}
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-center text-xs text-red-400 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegistering && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input
                      type="text"
                      required
                      placeholder="Gaurav Saklani"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] pl-10 pr-4 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-600 focus:border-red-500/60 focus:bg-white/[0.06] focus:outline-none transition"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] pl-10 pr-4 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-600 focus:border-red-500/60 focus:bg-white/[0.06] focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-zinc-300">Password</label>
                  {!isRegistering && (
                    <a
                      href="#forgot"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Please contact support to reset credentials.');
                      }}
                      className="text-[11px] text-red-500 hover:text-red-400 font-medium transition"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] pl-10 pr-4 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-600 focus:border-red-500/60 focus:bg-white/[0.06] focus:outline-none transition"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-3 rounded-xl shadow-lg shadow-red-600/25 transition mt-3 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>{isRegistering ? 'Creating account...' : 'Signing in...'}</span>
                  </>
                ) : (
                  <span>{isRegistering ? 'Register & Continue' : 'Sign In'}</span>
                )}
              </Button>
            </form>

            {/* Toggle between Login and Register */}
            <div className="mt-6 text-center text-xs text-zinc-400">
              {isRegistering ? (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => {
                      setIsRegistering(false);
                      setError('');
                    }}
                    className="font-semibold text-red-500 hover:text-red-400 transition ml-1"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account yet?{' '}
                  <button
                    onClick={() => {
                      setIsRegistering(true);
                      setError('');
                    }}
                    className="font-semibold text-red-500 hover:text-red-400 transition ml-1"
                  >
                    Register now
                  </button>
                </p>
              )}
            </div>
          </div>

          <p className="mt-8 text-center text-[11px] text-zinc-500">
            Protected system. Secure authentication powered by Eddy Fitness Club.
          </p>
        </div>
      </main>
    </div>
  );
}