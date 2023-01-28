import { Paragraph, Section, Text, Title } from './BusinessCasesSection.styled';
import { Gallery } from '../Gallery/Gallery';
import { Container } from '../Сontainer/Container';
export const BusinessCasesSection = () => {
  return (
    <Section id="cases" role="region" aria-labelledby="Business Cases">
      {/* <Container> */}
      <Paragraph>This is what we do</Paragraph>
      <Title>Business Cases</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</Text>
      <Container>
        <Gallery />
      </Container>

      {/*    <Gallery>
          <Div>
            {galleryCasesImages.map(el => (
              <Item
                key={el.id}
                cropped
                original={el.small}
                originalSrcset={el.large}
                thumbnail={el.small}
                width="1280"
                height="854"
              >
                {({ ref, open }) => <img src={el.small} ref={ref} onClick={open} alt={el.alt} />}
              </Item>
            ))}
          </Div>
        </Gallery> */}
      {/* </Container> */}
    </Section>
  );
};
