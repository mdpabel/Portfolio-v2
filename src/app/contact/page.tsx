'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import NameForm from './name-form';

const ServicesForm = dynamic(() => import('./services-form'), { ssr: false });
const ProjectDetailsForm = dynamic(() => import('./project-details-form'), {
  ssr: false,
});
const ContactForm = dynamic(() => import('./contact-form'), { ssr: false });

export const serviceKeyMap: Record<string, string> = {
  'Fix hacked site, Malware Removal': 'hack',
  'Web development (React, Next, Node, WordPress)': 'dev',
  'Fix website errors (http 404, 500, 403, fatal error, SSL, DB)': 'error',
  'Website Security Consulting': 'security',
  'Other Services': 'other',
};

const Contact = () => {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const currentStep = parseInt(searchParams.get('step') ?? '1');
    setStep(currentStep);
  }, [searchParams]);

  return (
    <div className='relative px-8 lg:px-12 w-full max-w-5xl container'>
      <div className='mx-auto pt-12 lg:pt-20 max-w-3xl'>
        <div className='space-y-2 mb-6'>
          <h1 className='font-semibold text-4xl text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-[1.1em] tracking-tight'>
            Coffee with me.
          </h1>
          <p className='text-zinc-800 dark:text-zinc-100'>
            I am always excited to work on some awesome projects, message me and
            let's discuss over coffee.
          </p>
        </div>

        {step > 1 && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className='flex items-center space-x-2 mb-4 text-sm'>
            <ArrowLeft className='w-4 h-4' /> Back
          </button>
        )}

        {/* Dynamically render each form based on the step */}
        {step === 1 && <NameForm setStep={setStep} />}
        {step === 2 && <ServicesForm setStep={setStep} />}
        {step === 3 && <ProjectDetailsForm setStep={setStep} />}
        {step === 4 && <ContactForm setStep={setStep} />}
      </div>
    </div>
  );
};

export default Contact;
