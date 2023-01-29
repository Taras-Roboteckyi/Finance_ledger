import { Paragraph, Section, Text, Title } from './BusinessCasesSection.styled';
import { Gallery } from '../Gallery/Gallery';

export const BusinessCasesSection = () => {
  return (
    <Section id="cases" role="region" aria-labelledby="Business Cases">
      <Paragraph>This is what we do</Paragraph>
      <Title>Business Cases</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</Text>

      <Gallery />
    </Section>
  );
};
