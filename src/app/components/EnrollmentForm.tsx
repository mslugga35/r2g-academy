'use client';

import { useState } from 'react';
import Image from 'next/image';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  programType: 'afterschool' | 'fitness';
}

export default function EnrollmentForm({ isOpen, onClose, programType }: EnrollmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const programDetails = {
    afterschool: {
      title: 'After School Program Enrollment',
      subtitle: '$100/week • Mon-Fri • 3 hours',
    },
    fitness: {
      title: 'Fitness Assessment Booking',
      subtitle: '$75 • 45 min • Sat & Sun Only',
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#1a2855] p-6 text-center">
          <div className="relative w-16 h-20 mx-auto mb-3">
            <Image
              src="/images/r2glogo.png"
              alt="R2G Academy"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="font-display text-2xl text-white">{programDetails[programType].title}</h2>
          <p className="text-[#a89a5c] text-sm">{programDetails[programType].subtitle}</p>
        </div>

        {/* Form */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-[#1a2855] mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">We&apos;ll contact you within 24 hours to confirm.</p>
              <button
                onClick={onClose}
                className="bg-[#a89a5c] text-[#1a2855] px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Web3Forms Access Key - Replace with your key */}
              <input type="hidden" name="access_key" value="9baeeaae-068a-4592-bc9e-9067d0dd75ed" />
              <input type="hidden" name="subject" value={`R2G Academy - ${programDetails[programType].title}`} />
              <input type="hidden" name="from_name" value="R2G Academy Website" />

              <div>
                <label className="block text-sm font-semibold text-[#1a2855] mb-1">Child&apos;s Name *</label>
                <input
                  type="text"
                  name="child_name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#a89a5c] outline-none transition-colors"
                  placeholder="Enter child's name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2855] mb-1">Age *</label>
                <input
                  type="number"
                  name="age"
                  required
                  min="5"
                  max="18"
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#a89a5c] outline-none transition-colors"
                  placeholder="Enter age"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2855] mb-1">Parent/Guardian Name *</label>
                <input
                  type="text"
                  name="parent_name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#a89a5c] outline-none transition-colors"
                  placeholder="Enter parent name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2855] mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#a89a5c] outline-none transition-colors"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2855] mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#a89a5c] outline-none transition-colors"
                  placeholder="Enter phone number"
                />
              </div>

              {programType === 'afterschool' && (
                <div>
                  <label className="block text-sm font-semibold text-[#1a2855] mb-1">Preferred Start Date</label>
                  <input
                    type="date"
                    name="start_date"
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#a89a5c] outline-none transition-colors"
                  />
                </div>
              )}

              {programType === 'fitness' && (
                <div>
                  <label className="block text-sm font-semibold text-[#1a2855] mb-1">Preferred Day *</label>
                  <select
                    name="preferred_day"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#a89a5c] outline-none transition-colors"
                  >
                    <option value="">Select a day</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-[#1a2855] mb-1">Additional Notes</label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#a89a5c] outline-none transition-colors resize-none"
                  placeholder="Any additional information..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border-2 border-[#1a2855] text-[#1a2855] px-6 py-3 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#a89a5c] text-[#1a2855] px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
