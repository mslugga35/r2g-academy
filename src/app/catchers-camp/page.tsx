/**
 * Catchers Camp Registration — with USF catcher & Lake Brantley alum Kiley Strott
 *
 * Every Thursday in July (7/2–7/30) | 1–3 PM @ R2G Academy
 * $40/session OR $160/month (5th session free)
 * Notifications → Floridastormlizardo@gmail.com
 */
'use client';

import Image from 'next/image';
import { useFormSubmit } from '../components/useFormSubmit';

export default function CatchersCamp() {
  const { submitted, loading, handleSubmit } = useFormSubmit('Floridastormlizardo@gmail.com');

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#1a2855] flex items-center justify-center p-6">
        <div className="bg-white rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">&#9989;</div>
          <h1 className="text-2xl font-bold text-[#1a2855] mb-2">Registration Received!</h1>
          <p className="text-gray-600 mb-4">
            Coach Kiley will reach out to confirm your spot for Catchers Camp.
          </p>
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Catchers Camp</h1>
          <p className="text-[#a89a5c] text-xl">with Kiley Strott</p>
          <p className="text-white/60 text-sm uppercase tracking-wider mt-1">
            USF Catcher &bull; Lake Brantley Alum
          </p>

          {/* Coach photo */}
          <div className="relative w-40 h-40 mx-auto my-5 rounded-full overflow-hidden border-4 border-[#a89a5c]">
            <Image
              src="/images/kiley-strott.jpg"
              alt="Kiley Strott — USF catcher"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-white/70 mt-3 text-sm leading-relaxed">
            <strong className="text-white">Every Thursday in July</strong> &bull; July 2 &ndash; July 30<br />
            <strong className="text-white">1:00 &ndash; 3:00 PM</strong> @ R2G Academy<br />
          </p>

          {/* Pricing */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/15 rounded-lg p-4">
              <div className="text-[#a89a5c] font-display text-3xl">$40</div>
              <p className="text-white/70 text-sm">per session</p>
            </div>
            <div className="bg-[#a89a5c]/15 border border-[#a89a5c] rounded-lg p-4">
              <div className="text-[#a89a5c] font-display text-3xl">$160</div>
              <p className="text-white/80 text-sm font-semibold">whole month</p>
              <p className="text-white/50 text-xs">5th session FREE</p>
            </div>
          </div>
        </div>

        {/* Registration form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8 space-y-5">
          <input type="hidden" name="_subject" value="Catchers Camp Registration (Kiley Strott)" />
          <input type="hidden" name="_template" value="table" />
          {/* Honeypot — hidden from real users, catches bots */}
          <input type="text" name="_honey" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="cc-name" className="block text-[#1a2855] font-semibold mb-2">
              Player Name *
            </label>
            <input
              id="cc-name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="Full name"
            />
          </div>

          <div>
            <label htmlFor="cc-age" className="block text-[#1a2855] font-semibold mb-2">
              Player Age *
            </label>
            <input
              id="cc-age"
              type="number"
              name="age"
              required
              min="5"
              max="18"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="Age"
            />
          </div>

          <div>
            <label htmlFor="cc-email" className="block text-[#1a2855] font-semibold mb-2">
              Parent/Guardian Email *
            </label>
            <input
              id="cc-email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label htmlFor="cc-phone" className="block text-[#1a2855] font-semibold mb-2">
              Phone Number *
            </label>
            <input
              id="cc-phone"
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="cc-plan" className="block text-[#1a2855] font-semibold mb-2">
              Registration Option *
            </label>
            <select
              id="cc-plan"
              name="registration_option"
              required
              defaultValue=""
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#a89a5c] focus:outline-none bg-white"
            >
              <option value="" disabled>Select an option</option>
              <option value="Full Month — $160 (5th session free)">Full Month &mdash; $160 (5th session free)</option>
              <option value="Single Session — $40">Single Session &mdash; $40</option>
            </select>
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
