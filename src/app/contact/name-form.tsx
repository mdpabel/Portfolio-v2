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
import { ArrowRight } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
});

const NameForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const params = new URLSearchParams(searchParams);
    params.set('name', values.name);
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
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hi! What&apos;s your name?</FormLabel>
              <FormControl>
                <Input
                  placeholder='Mr. X'
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

export default NameForm;
