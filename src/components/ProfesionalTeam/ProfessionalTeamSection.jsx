import imgPerson1Jpg1x from '../../images/team/person1.jpg';
import imgPerson1Jpg2x from '../../images/team/person1@2x.jpg';
import imgPerson1Webp1x from '../../images/team/person1.webp';
import imgPerson1Webp2x from '../../images/team/person1@2x.webp';

import imgPerson2Jpg1x from '../../images/team/person2.jpg';
import imgPerson2Jpg2x from '../../images/team/person2@2x.jpg';
import imgPerson2Webp1x from '../../images/team/person2.webp';
import imgPerson2Webp2x from '../../images/team/person2@2x.webp';

import imgPerson3Jpg1x from '../../images/team/person3.jpg';
import imgPerson3Jpg2x from '../../images/team/person3@2x.jpg';
import imgPerson3Webp1x from '../../images/team/person3.webp';
import imgPerson3Webp2x from '../../images/team/person3@2x.webp';

import { IconContainer } from '../IconContainer/IconContainer';

import {
  Wrapper,
  Name,
  Overlay,
  Paragraph,
  Picture,
  Professional,
  Section,
  TeamList,
  TeamListItem,
  Text,
  Title,
} from './ProfessionalTeamSection.styled';

export const ProfessionalTeamSection = () => {
  return (
    <Section role="region" aria-labelledby="Our Professional Team">
      <Paragraph>Who we are</Paragraph>
      <Title>Our Professional Team</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</Text>

      <TeamList tabindex="0" role="listbox" aria-labelledby="Gallery professional team">
        <TeamListItem role="option" aria-selected="false">
          <Wrapper>
            <picture>
              <source srcSet={(imgPerson1Webp1x, imgPerson1Webp2x)} type="image/webp"></source>

              <source srcSet={(imgPerson1Jpg1x, imgPerson1Jpg2x)} type="image/jpg"></source>

              <img
                src={imgPerson1Jpg1x}
                alt="A man of Asian appearance in a black suit is leaning against a brick wall in the office and is looking at us"
              />
            </picture>

            <Overlay>
              <IconContainer />
            </Overlay>
          </Wrapper>
          <Name>John Doe</Name>
          <Professional>President</Professional>
        </TeamListItem>

        <TeamListItem role="option" aria-selected="false">
          <Wrapper>
            <picture>
              <source srcSet={(imgPerson2Webp1x, imgPerson2Webp2x)} type="image/webp"></source>

              <source srcSet={(imgPerson2Jpg1x, imgPerson2Jpg2x)} type="image/jpg"></source>

              <img
                src={imgPerson2Jpg1x}
                alt="A white woman in a light blouse sits in a black chair in the middle of the office and looks at us"
              />
            </picture>

            <Overlay>
              <IconContainer />
            </Overlay>
          </Wrapper>
          <Name>Jane Doe</Name>
          <Professional>Vice President</Professional>
        </TeamListItem>

        <TeamListItem role="option" aria-selected="false">
          <Wrapper>
            <picture>
              <source srcSet={(imgPerson3Webp1x, imgPerson3Webp2x)} type="image/webp"></source>

              <source srcSet={(imgPerson3Jpg1x, imgPerson3Jpg2x)} type="image/jpg"></source>

              <img
                src={imgPerson3Jpg1x}
                alt="A white man with a cup in his hands is sitting at a desk, smiling in the middle of the office and looking away"
              />
            </picture>

            <Overlay>
              <IconContainer />
            </Overlay>
          </Wrapper>
          <Name>Steve Smith</Name>
          <Professional>Marketing Head</Professional>
        </TeamListItem>
      </TeamList>
    </Section>
  );
};
