import {
  Html,
  Text,
  Heading,
  Section,
  Column,
  Row,
  Link,
} from '@react-email/components';

interface RecieverEmailTemplateProps {
  name: string;
  service: string;
  customRequest?: string;
  projectInfo: string;
  website?: string;
  budget?: string;
  deadline?: string;
  email?: string;
  mobile?: string;
}

const RecieverEmailTemplate: React.FC<RecieverEmailTemplateProps> = ({
  name,
  service,
  customRequest,
  projectInfo,
  website,
  budget,
  deadline,
  email,
  mobile,
}) => {
  return (
    <Html>
      <Section style={main}>
        <Heading style={heading}>New Project Submission</Heading>

        <Text style={text}>
          <strong>Name:</strong> {name}
        </Text>

        <Text style={text}>
          <strong>Service Requested:</strong> {service}
        </Text>

        {customRequest && (
          <Text style={text}>
            <strong>Custom Request:</strong> {customRequest}
          </Text>
        )}

        <Text style={text}>
          <strong>Project Information:</strong> {projectInfo}
        </Text>

        {website && (
          <Text style={text}>
            <strong>Website:</strong> <Link href={website}>{website}</Link>
          </Text>
        )}

        {budget && (
          <Text style={text}>
            <strong>Budget:</strong> {budget}
          </Text>
        )}

        {deadline && (
          <Text style={text}>
            <strong>Deadline:</strong> {new Date(deadline).toLocaleString()}
          </Text>
        )}

        {email && (
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
        )}

        {mobile && (
          <Text style={text}>
            <strong>Mobile:</strong> {mobile}
          </Text>
        )}

        <Row>
          <Column>
            <Text style={footerText}>
              Thank you for submitting your project details!
            </Text>
          </Column>
        </Row>
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

export default RecieverEmailTemplate;
