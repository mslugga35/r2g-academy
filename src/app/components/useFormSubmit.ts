/**
 * Shared form submission hook for R2G registration pages.
 *
 * Submits to formsubmit.co → sends email notification to r2gacademy@gmail.com.
 * Used by: pitching-register, speed-strength-register, saturday-strength.
 * (Spring Break Pitching uses Google Forms directly — no hook needed.)
 */
import { useState } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/r2gacademy@gmail.com';

export function useFormSubmit() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch(FORM_ENDPOINT, {
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

  return { submitted, loading, handleSubmit };
}
