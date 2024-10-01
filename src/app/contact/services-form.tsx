'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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
import { serviceKeyMap } from './page';
import { Dispatch, SetStateAction } from 'react';

const servicesSchema = z.object({
  service: z.enum([
    'Fix hacked site, Malware Removal',
    'Web development (React, Next, Node, WordPress)',
    'Fix website errors (http 404, 500, 403, fatal error, SSL, DB)',
    'Website Security Consulting',
    'Other Services',
  ]),
  customRequest: z.string().optional(),
});

const ServicesForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const form = useForm<z.infer<typeof servicesSchema>>({
    resolver: zodResolver(servicesSchema),
    defaultValues: {
      service: undefined,
      customRequest: '',
    },
  });

  function onSubmit(values: z.infer<typeof servicesSchema>) {
    const params = new URLSearchParams(searchParams);

    const serviceKey = serviceKeyMap[values.service];
    params.set('service', serviceKey);

    if (values.customRequest) {
      params.set('customRequest', values.customRequest);
    }

    setStep((prev) => {
      params.set('step', '' + (prev + 1));
      return prev + 1;
    });

    router.replace(pathName + '?' + params.toString());
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='service'
          render={({ field }) => (
            <FormItem>
              <FormLabel>What can I help you with?</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className='border-zinc-800/90 border focus:border-none focus:outline-zinc-900 focus:outline-1 p-2 w-full transition'>
                  <option value='' disabled>
                    Select a service
                  </option>
                  <option value='Fix hacked site, Malware Removal'>
                    Fix hacked site, Malware Removal
                  </option>
                  <option value='Web development (React, Next, Node, WordPress)'>
                    Web development (React, Next, Node, WordPress)
                  </option>
                  <option value='Fix website errors (http 404, 500, 403, fatal error, SSL, DB)'>
                    Fix website errors (http 404, 500, 403, fatal error, SSL,
                    DB)
                  </option>
                  <option value='Website Security Consulting'>
                    Website Security Consulting
                  </option>
                  <option value='Other Services'>Other Services</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='customRequest'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Services (if applicable)</FormLabel>
              <FormControl>
                <Input
                  placeholder='Describe other services here...'
                  {...field}
                  className='border-zinc-800/90 border focus:border-none focus:outline-zinc-900 focus:outline-1 transition'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='bg-zinc-800/90 dark:hover:bg-zinc-800 hover:bg-zinc-800 dark:bg-zinc-800/50 w-full text-zinc-100 dark:text-zinc-300'>
          Next <ArrowRight />
        </Button>
      </form>
    </Form>
  );
};

export default ServicesForm;
