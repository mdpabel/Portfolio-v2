'use server';
import { Resend } from 'resend';
import RecieverEmailTemplate from '@/components/email/reciver-email';
import SenderEmailTemplate from '@/components/email/sender-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface Response {
  status: 'success' | 'error' | 'honeypot';
  title: string;
  message: string;
}

export const handleFormSubmission = async (
  _: any,
  formData: FormData,
): Promise<Response> => {
  try {
    // Extract form data
    const name = formData.get('name') as string;
    const service = formData.get('service') as string;
    const customRequest = formData.get('customRequest') as string | undefined;
    const projectInfo = formData.get('projectInfo') as string;
    const website = formData.get('website') as string | undefined;
    const budget = formData.get('budget') as string | undefined;
    const deadline = formData.get('deadline') as string | undefined;
    const email = formData.get('email') as string;
    const mobile = formData.get('mobile') as string | undefined;

    const honeypot = formData.get('honeypot');
    if (honeypot) {
      return {
        status: 'honeypot',
        title: 'Bot detected',
        message: 'Submission blocked as honeypot detected.',
      };
    }

    if (!name || !service || !projectInfo || !email) {
      return {
        status: 'error',
        title: 'Invalid Submission',
        message: 'Please ensure all required fields are filled.',
      };
    }

    await resend.emails.send({
      from: 'From mdpabel.com <onboarding@resend.dev>',
      to: [process.env.TO_EMAIL!],
      subject: 'New Project Submission',
      react: RecieverEmailTemplate({
        name,
        service,
        customRequest,
        projectInfo,
        website,
        budget,
        deadline,
        email,
        mobile,
      }),
    });

    await resend.emails.send({
      from: 'team-email@example.com',
      to: email,
      subject: 'We Received Your Submission',
      react: SenderEmailTemplate({
        name: name || email,
        email,
      }),
    });

    // Return success response
    return {
      status: 'success',
      title: 'Submission Received',
      message:
        'Thank you! We have received your submission and will contact you shortly.',
    };
  } catch (error) {
    console.error('Error sending emails:', error);

    // Return error response in case of failure
    return {
      status: 'error',
      title: 'Submission Failed',
      message:
        'There was an issue with the submission. Please try again later.',
    };
  }
};
