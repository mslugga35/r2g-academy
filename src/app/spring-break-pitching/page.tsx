/**
 * Spring Break Pitching Clinic Registration — TEMPORARY PAGE
 * Remove after March 19, 2026 (clinic dates: Tue 3/17 + Thu 3/19)
 *
 * Schedule:
 *   Ages 9-11:  10 AM – 12 PM  ($75)
 *   Ages 13-14: 12 PM – 2 PM   ($100)
 *
 * Day 1: Balance, Form & Drive
 * Day 2: Arm Care, Home Arm Strengthening, Long Toss Program
 *
 * Registrations go to Google Sheets → shared with Rudy
 * Form: https://docs.google.com/forms/d/e/1FAIpQLSeXnASK1NuUNjTCnZBqz1_LobpnVo6aPWoI0v2Aah0TssxQIA/viewform
 * Sheet: https://docs.google.com/spreadsheets/d/1fSe8IqwwsprSOeuWY6WJYnuaOsMkvrZjcI-C3_EtXAI/edit
 */
import Image from 'next/image';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeXnASK1NuUNjTCnZBqz1_LobpnVo6aPWoI0v2Aah0TssxQIA/viewform';

export default function SpringBreakPitching() {
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
          <div className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-2 uppercase tracking-widest mb-4 animate-pulse">
            Spring Break &bull; Limited Spots
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Pitching Clinic
          </h1>
          <p className="text-[#a89a5c] text-xl">Spring Break 2026</p>
        </div>

        {/* Clinic details */}
        <div className="bg-white/5 rounded-lg p-6 mb-6 border border-[#a89a5c]/20">
          <p className="text-white/80 text-center mb-4">
            <strong className="text-white">2-Day Clinic:</strong> Tue March 17 &amp; Thu March 19
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="text-[#a89a5c] font-bold text-sm uppercase tracking-wider mb-1">Day 1 — Tuesday</p>
              <p className="text-white text-sm">Balance</p>
              <p className="text-white text-sm">Form &amp; Drive</p>
            </div>
            <div className="text-center">
              <p className="text-[#a89a5c] font-bold text-sm uppercase tracking-wider mb-1">Day 2 — Thursday</p>
              <p className="text-white text-sm">Arm Care</p>
              <p className="text-white text-sm">Home Strengthening</p>
              <p className="text-white text-sm">Long Toss Program</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white/10 rounded-lg p-4 border border-[#a89a5c]/30 text-center">
            <p className="text-[#a89a5c] font-bold text-2xl">$75</p>
            <p className="text-white text-sm font-semibold">Ages 9-11</p>
            <p className="text-white/60 text-xs mt-1">10 AM &ndash; 12 PM</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 border border-[#a89a5c]/30 text-center">
            <p className="text-[#a89a5c] font-bold text-2xl">$100</p>
            <p className="text-white text-sm font-semibold">Ages 13-14</p>
            <p className="text-white/60 text-xs mt-1">12 PM &ndash; 2 PM</p>
          </div>
        </div>

        {/* Register CTA */}
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#a89a5c] text-[#1a2855] py-5 rounded-lg font-bold text-xl uppercase tracking-wider hover:bg-[#c4b87a] transition-colors text-center mb-4"
        >
          Register Now
        </a>

        <p className="text-center text-white/50 text-sm mb-8">
          Questions? Call <a href="tel:3522986699" className="text-[#a89a5c] font-semibold">(352) 298-6699</a>
        </p>

        {/* Back to home */}
        <div className="text-center">
          <a href="/" className="text-white/40 text-sm hover:text-[#a89a5c] transition-colors">
            &larr; Back to R2G Academy
          </a>
        </div>
      </div>
    </div>
  );
}
