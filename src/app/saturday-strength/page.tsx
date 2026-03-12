/**
 * Saturday Strength & Conditioning Registration
 *
 * Ages 13-14 | Every Saturday | 2 Hours | $50/session | 10 max per group
 */
'use client';

import Image from 'next/image';
import { useFormSubmit } from '../components/useFormSubmit';

export default function SaturdayStrength() {
  const { submitted, loading, handleSubmit } = useFormSubmit();

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#1a2855] flex items-center justify-center p-6">
        <div className="bg-white rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">&#9989;</div>
          <h1 className="text-2xl font-bold text-[#1a2855] mb-2">Registration Received!</h1>
          <p className="text-gray-600 mb-4">We&apos;ll contact you to confirm your spot for Saturday Strength &amp; Conditioning.</p>
          <a href="/" className="text-[#a89a5c] font-semibold hover:underline">
            Visit R2G Academy &rarr;
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
            Strength &amp; Conditioning
          </h1>
          <p className="text-[#a89a5c] text-xl">Saturday Sessions</p>
          <p className="text-white/70 mt-3 text-sm leading-relaxed">
            <strong className="text-white">Ages 13-14</strong> &bull; Every Saturday &bull; 2 Hours<br />
            <strong className="text-[#a89a5c] text-2xl">$50</strong> per session<br />
            <span className="text-white/50">10 athletes max per group</span>
          </p>
        </div>

        {/* Registration form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8 space-y-5">
          <input type="hidden" name="_subject" value="Saturday Strength & Conditioning Registration" />
          <input type="hidden" name="_template" value="table" />
          {/* Honeypot — hidden from real users, catches bots */}
          <input type="text" name="_honey" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="sc-name" className="block text-[#1a2855] font-semibold mb-2">
              Athlete Name *
            </label>
            <input
              id="sc-name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="Full name"
            />
          </div>

          <div>
            <label htmlFor="sc-age" className="block text-[#1a2855] font-semibold mb-2">
              Athlete Age *
            </label>
            <input
              id="sc-age"
              type="number"
              name="age"
              required
              min="13"
              max="14"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="13 or 14"
            />
          </div>

          <div>
            <label htmlFor="sc-email" className="block text-[#1a2855] font-semibold mb-2">
              Parent/Guardian Email *
            </label>
            <input
              id="sc-email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label htmlFor="sc-phone" className="block text-[#1a2855] font-semibold mb-2">
              Phone Number *
            </label>
            <input
              id="sc-phone"
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="sc-injuries" className="block text-[#1a2855] font-semibold mb-2">
              Prior Injuries &amp; Medical Conditions
            </label>
            <textarea
              id="sc-injuries"
              name="injuries_medical"
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="List any injuries or conditions we should know about (or write 'None')"
            />
          </div>

          <div>
            <label htmlFor="sc-sports" className="block text-[#1a2855] font-semibold mb-2">
              Sports Currently Playing *
            </label>
            <textarea
              id="sc-sports"
              name="sports_played"
              required
              rows={2}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="e.g., Baseball (3 yrs), Football (2 yrs)"
            />
          </div>

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
