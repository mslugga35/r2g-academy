/**
 * Shared form submission hook for R2G registration pages.
 *
 * Submits to formsubmit.co → emails a notification. Defaults to r2gacademy@gmail.com;
 * pass a `recipient` to route elsewhere (e.g. catchers-camp → Floridastormlizardo@gmail.com).
 * Used by: pitching-register, speed-strength-register, saturday-strength, catchers-camp.
 * (Spring Break Pitching uses Google Forms directly — no hook needed.)
 */
import { useState } from 'react';

const DEFAULT_RECIPIENT = 'r2gacademy@gmail.com';

export function useFormSubmit(recipient: string = DEFAULT_RECIPIENT) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch(`https://formsubmit.co/ajax/${recipient}`, {
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
