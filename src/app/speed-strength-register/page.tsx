'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SpeedStrengthRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formsubmit.co/ajax/r2gacademy@gmail.com', {
        method: 'POST',
        body: formData,
      });
      setSubmitted(true);
    } catch {
      alert('Error submitting. Please call (352) 298-6699');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#1a2855] flex items-center justify-center p-6">
        <div className="bg-white rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-[#1a2855] mb-2">Registration Received!</h1>
          <p className="text-gray-600 mb-4">We&apos;ll contact you shortly to confirm your spot.</p>
          <a href="/" className="text-[#a89a5c] font-semibold hover:underline">
            Visit R2G Academy →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a2855] py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Image
            src="/images/r2glogo.png"
            alt="R2G Academy"
            width={100}
            height={120}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Speed & Strength
          </h1>
          <p className="text-[#a89a5c] text-xl">Training Registration</p>
          <p className="text-white/70 mt-2">Ages 13-14 • Every Saturday</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8 space-y-5">
          <input type="hidden" name="_subject" value="Speed & Strength Registration" />
          <input type="hidden" name="_template" value="table" />

          {/* Name */}
          <div>
            <label className="block text-[#1a2855] font-semibold mb-2">
              Athlete Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="Full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#1a2855] font-semibold mb-2">
              Parent/Guardian Email *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="email@example.com"
            />
          </div>

          {/* Prior Injuries */}
          <div>
            <label className="block text-[#1a2855] font-semibold mb-2">
              Prior Injuries & Medical Conditions
            </label>
            <textarea
              name="injuries_medical"
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="List any injuries or medical conditions we should know about (or write 'None')"
            />
          </div>

          {/* Years of Training */}
          <div>
            <label className="block text-[#1a2855] font-semibold mb-2">
              Years of Structured Training *
            </label>
            <select
              name="years_training"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
            >
              <option value="">Select...</option>
              <option value="0">None / Just starting</option>
              <option value="1">Less than 1 year</option>
              <option value="1-2">1-2 years</option>
              <option value="3-4">3-4 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          {/* Organized Sports */}
          <div>
            <label className="block text-[#1a2855] font-semibold mb-2">
              Organized Sports Played *
            </label>
            <textarea
              name="sports_played"
              required
              rows={2}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="e.g., Baseball (3 yrs), Basketball (2 yrs), Football (1 yr)"
            />
          </div>

          {/* Session Preference */}
          <div>
            <label className="block text-[#1a2855] font-semibold mb-2">
              Session Preference *
            </label>
            <select
              name="session"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
            >
              <option value="">Select...</option>
              <option value="Girls 10:00-11:30 AM">Girls - 10:00-11:30 AM ($30)</option>
              <option value="Boys 12:00-1:30 PM">Boys - 12:00-1:30 PM ($30)</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#a89a5c] text-[#1a2855] py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-[#c4b87a] transition-colors disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Register Now'}
          </button>

          <p className="text-center text-gray-500 text-sm">
            Questions? Call <a href="tel:3522986699" className="text-[#a89a5c] font-semibold">(352) 298-6699</a>
          </p>
        </form>
      </div>
    </div>
  );
}
