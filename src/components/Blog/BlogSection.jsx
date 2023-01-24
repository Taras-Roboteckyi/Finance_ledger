import imgBlogJpg1x from '../../images/home/blog.jpg';
import imgBlogJpg2x from '../../images/home/blog@2x.jpg';
import imgBlogWebp1x from '../../images/home/blog.webp';
import imgBlogWebp2x from '../../images/home/blog@2x.webp';

import { Button } from '../Button/Button';

import { BlogContainer, ImgBlog, Section, Text, DataText, Title } from './BlogSection.styled';

export const BlogSection = () => {
  return (
    <Section id="blog" role="region" aria-labelledby="Blog post one">
      <picture>
        <source srcSet={(imgBlogWebp1x, imgBlogWebp2x)} type="image/webp" />
        <source srcSet={(imgBlogJpg1x, imgBlogJpg2x)} type="image/jpg" />
        <ImgBlog
          src={imgBlogWebp1x}
          alt="A table on which lies a tablet, notebooks, a pen and a cup of coffee"
        />
      </picture>
      <BlogContainer>
        <DataText>April 16 2020</DataText>
        <Title>Blog Post One</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos
          quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores
          itaque rerum temporibus doloribus iste maiores deleniti?
        </Text>
        <Button
          content={'Read Our Blog'}
          border={'1px solid #FFFFFF;'}
          hoverBgColor={'#FFFFFF'}
          hoverColor={'#0284D0'}
          fontSize={'16px'}
          changeFontSize={'18px'}
          buttonBgColor={'inherit'}
        />
      </BlogContainer>
    </Section>
  );
};
