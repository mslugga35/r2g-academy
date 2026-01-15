'use client';

import { useState } from 'react';
import EnrollmentForm from './EnrollmentForm';

interface EnrollButtonProps {
  programType: 'afterschool' | 'fitness';
  label: string;
}

export default function EnrollButton({ programType, label }: EnrollButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="inline-block border-2 border-[#1a2855] text-[#1a2855] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#1a2855] hover:text-white transition-colors w-full text-center"
      >
        {label}
      </button>
      <EnrollmentForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        programType={programType}
      />
    </>
  );
}
