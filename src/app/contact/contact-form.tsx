'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { handleFormSubmission } from '@/actions/send-email';
import Spinner from '@/components/common/Spinner';
import { useFormState, useFormStatus } from 'react-dom';

// Zod schema with conditional validation logic
const contactSchema = z
  .object({
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    mobile: z.string().optional(),
    honeypot: z.string().optional(),
  })
  .refine((data) => data.email || data.mobile, {
    message: 'Please provide either an email or a mobile number.',
  });

const ContactForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [state, formAction] = useFormState(handleFormSubmission, {
    status: '',
    title: '',
    message: '',
  });
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const service = searchParams.get('service');
  const customRequest = searchParams.get('customRequest');
  const projectInfo = searchParams.get('projectInfo');
  const website = searchParams.get('website');
  const budget = searchParams.get('budget');
  const deadline = searchParams.get('deadline');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      mobile: '',
      honeypot: '',
    },
  });

  const renderMessage = () => {
    if (!state.message) return null;

    let bgColor, textColor, borderColor;

    switch (state.status) {
      case 'success':
        bgColor = 'bg-green-50';
        textColor = 'text-green-800';
        borderColor = 'border-green-300';
        break;
      case 'error':
        bgColor = 'bg-red-50';
        textColor = 'text-red-800';
        borderColor = 'border-red-300';
        break;
      default:
        bgColor = 'bg-gray-50';
        textColor = 'text-gray-800';
        borderColor = 'border-gray-300';
    }

    return (
      <div className={`border-l-4 ${borderColor} ${bgColor} p-4 rounded mb-4`}>
        <p className={`font-bold ${textColor}`}>{state.title}</p>
        <p className={textColor}>{state.message}</p>
      </div>
    );
  };

  return (
    <Form {...form}>
      {renderMessage()}
      <form
        action={() => {
          const values = form.getValues();

          const formData = new FormData();
          formData.append('name', name || '');
          formData.append('service', service || '');
          formData.append('customRequest', customRequest || '');
          formData.append('projectInfo', projectInfo || '');
          formData.append('website', website || '');
          formData.append('budget', budget || '');
          formData.append('deadline', deadline || '');
          formData.append('email', values.email);
          formData.append('mobile', values.mobile || '');
          formData.append('honeypot', values.honeypot || '');

          formAction(formData);
        }}
        className='space-y-8'>
        {/* Email Field */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='email'
                  placeholder='you@example.com'
                  className='border-zinc-800/90 border focus:border-none focus:outline-zinc-900 focus:outline-1 w-full transition'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mobile Field */}
        <FormField
          control={form.control}
          name='mobile'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='tel'
                  placeholder='+1234567890'
                  className='border-zinc-800/90 border focus:border-none focus:outline-zinc-900 focus:outline-1 w-full transition'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* General Error Message if neither is filled */}
        {form.formState.errors && form.formState.errors.root?.message && (
          <p className='text-red-500'>{form.formState.errors.root?.message}</p>
        )}

        {/* Honeypot Field */}
        <FormField
          control={form.control}
          name='honeypot'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type='hidden' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormButton />
      </form>
    </Form>
  );
};

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      className='bg-zinc-800/90 dark:hover:bg-zinc-800 hover:bg-zinc-800 dark:bg-zinc-800/50 w-full text-zinc-100 dark:text-zinc-300'>
      {pending ? <Spinner /> : 'Submit'}
    </Button>
  );
};

export default ContactForm;
