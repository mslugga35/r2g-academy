'use client';

import { useState } from 'react';
import EnrollmentForm from './EnrollmentForm';

interface ProgramCardProps {
  programType: 'afterschool' | 'fitness';
  children: React.ReactNode;
}

export default function ProgramCard({ programType, children }: ProgramCardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white border-4 border-[#1a2855] p-6 md:p-8 hover:border-[#a89a5c] transition-colors cursor-pointer"
        onClick={() => setIsFormOpen(true)}
      >
        {children}
      </div>
      <EnrollmentForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        programType={programType}
      />
    </>
  );
}
