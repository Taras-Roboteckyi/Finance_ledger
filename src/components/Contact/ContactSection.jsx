import imgContactJpg1x from '../../images/home/contact.jpg';
import imgContactJpg2x from '../../images/home/contact@2x.jpg';
import imgContactWebp1x from '../../images/home/contact.webp';
import imgContactWebp2x from '../../images/home/contact@2x.webp';

import { Form } from '../Form/Form';

import { ContactsContainer, ImgContact, Section, Title, ImgWrapper } from './ContactSection.styled';

export const ContactSection = () => {
  return (
    <Section id="contact" role="region" aria-labelledby="Form to register user contacts">
      <ImgWrapper>
        <picture>
          <source srcSet={(imgContactWebp1x, imgContactWebp2x)} type="image/webp" />
          <source srcSet={(imgContactJpg1x, imgContactJpg2x)} type="image/jpg" />
          <ImgContact
            src={imgContactWebp1x}
            alt="A white man in a white shirt is sitting at a table, holding a phone in his hand and looking at a laptop screen. Photo of the man in the profile"
          />
        </picture>
      </ImgWrapper>

      <ContactsContainer>
        <Title>Request Callback</Title>
        <Form />
      </ContactsContainer>
    </Section>
  );
};
