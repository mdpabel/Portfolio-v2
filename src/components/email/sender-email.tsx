import {
  Html,
  Text,
  Heading,
  Section,
  Column,
  Row,
} from '@react-email/components';

interface SenderEmailTemplateProps {
  name: string;
  email: string;
}

const SenderEmailTemplate: React.FC<SenderEmailTemplateProps> = ({
  name,
  email,
}) => {
  return (
    <Html>
      <Section style={main}>
        <Heading style={heading}>We&apos;ve Received Your Submission</Heading>

        <Text style={text}>Hi {name},</Text>

        <Text style={text}>
          Thank you for submitting your project details! We’ve received your
          request, and our team will review it shortly. If we need more
          information, we will contact you via email at {email}. You can expect
          a response soon.
        </Text>

        <Text style={text}>
          Here’s a summary of the information you provided:
        </Text>

        <Row>
          <Column>
            <Text style={footerText}>
              Thank you for trusting us with your project. We will be in touch
              soon!
            </Text>
          </Column>
        </Row>

        <Text style={footerText}>
          Best regards, <br /> The Team
        </Text>
      </Section>
    </Html>
  );
};

// Define some basic styles
const main = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const heading = {
  fontSize: '24px',
  color: '#333',
  marginBottom: '20px',
};

const text = {
  fontSize: '16px',
  color: '#555',
  marginBottom: '10px',
};

const footerText = {
  fontSize: '14px',
  color: '#999',
  marginTop: '20px',
};

export default SenderEmailTemplate;
