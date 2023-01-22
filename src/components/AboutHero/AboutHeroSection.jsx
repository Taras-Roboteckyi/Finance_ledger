import imgPeopleJpg1x from '../../images/home/people.jpg';
import imgPeopleJpg2x from '../../images/home/people@2x.jpg';
import imgPeopleWebp1x from '../../images/home/people.webp';
import imgPeopleWebp2x from '../../images/home/people@2x.webp';

import { Button } from '../Button/Button';

import {
  AboutContainer,
  ImgPeople,
  Section,
  Text,
  TextProposition,
  Title,
} from './AboutHeroSection.styled';

export const AboutHeroSection = () => {
  return (
    <Section aria-labelledby="We provide bespoke solutions">
      <picture>
        <source srcSet={(imgPeopleWebp1x, imgPeopleWebp2x)} type="image/webp" />
        <source srcSet={(imgPeopleJpg1x, imgPeopleJpg2x)} type="image/jpg" />
        <ImgPeople
          src={imgPeopleWebp1x}
          alt="Four women in black suits stand in the middle of the office and look straight at us"
        />
      </picture>
      <AboutContainer>
        <TextProposition>What you are looking for</TextProposition>
        <Title>We provide bespoke solutions</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos
          quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores
          itaque rerum temporibus doloribus iste maiores deleniti?
        </Text>
        <Button
          content={'Read more'}
          border={'1px solid #FFFFFF;'}
          bgColor={'#FFFFFF'}
          hoverColor={'#28A745'}
          fontSize={'16px'}
          changeFontSize={'18px'}
        />
      </AboutContainer>
    </Section>
  );
};
