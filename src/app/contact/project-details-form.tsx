'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

const projectSchema = z.object({
  projectInfo: z.string().min(10, {
    message: 'Please provide more information about your project.',
  }),
  website: z.string().optional(),
  budget: z.string().optional(),
  deadline: z.string().optional(),
});

const ProjectDetailsForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectInfo: '',
      website: '',
      budget: '',
      deadline: '',
    },
  });

  function onSubmit(values: z.infer<typeof projectSchema>) {
    const params = new URLSearchParams(searchParams);

    if (values.projectInfo) {
      params.set('projectInfo', values.projectInfo);
    }

    if (values.website) {
      params.set('website', values.website);
    }

    if (values.budget) {
      params.set('budget', values.budget);
    }

    if (values.deadline) {
      params.set('deadline', values.deadline);
    }

    setStep((prev) => {
      params.set('step', '' + (prev + 1));
      return prev + 1;
    });
    // Update the URL with form data
    router.replace(pathName + '?' + params.toString());
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        {/* Project Info Field */}
        <FormField
          control={form.control}
          name='projectInfo'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Can you share more information about your project?
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={3}
                  className='border-zinc-800/90 border focus:border-none focus:outline-zinc-900 focus:outline-1 w-full transition'
                  placeholder='Describe your project...'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Website Field */}
        <FormField
          control={form.control}
          name='website'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is there a website I can visit?</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='https://yourwebsite.com'
                  className='border-zinc-800/90 border focus:border-none focus:outline-zinc-900 focus:outline-1 w-full transition'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Budget Field */}
        <FormField
          control={form.control}
          name='budget'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have a budget in mind?</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='Enter your budget...'
                  className='border-zinc-800/90 border focus:border-none focus:outline-zinc-900 focus:outline-1 w-full transition'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Deadline Field */}
        <FormField
          control={form.control}
          name='deadline'
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your deadline?</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='datetime-local'
                  className='border-zinc-800/90 border focus:border-none focus:outline-zinc-900 focus:outline-1 w-full transition'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type='submit'
          className='bg-zinc-800/90 dark:hover:bg-zinc-800 hover:bg-zinc-800 dark:bg-zinc-800/50 w-full text-zinc-100 dark:text-zinc-300'>
          Submit <ArrowRight />
        </Button>
      </form>
    </Form>
  );
};

export default ProjectDetailsForm;
