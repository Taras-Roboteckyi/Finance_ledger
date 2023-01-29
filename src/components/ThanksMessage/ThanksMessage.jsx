import {
  LinkContainer,
  BackgroundContainer,
  Link,
  MessageContainer,
  Title,
  ArrowLeft,
} from './ThanksMessage.styled';

export const ThanksMessage = () => {
  return (
    <BackgroundContainer>
      <MessageContainer>
        <Title>Thank you!</Title>
        <p>Your form submission has been received</p>
        <LinkContainer>
          <Link to="/">
            <ArrowLeft /* size="35px" */ />
            Back to our site
          </Link>
        </LinkContainer>
      </MessageContainer>
    </BackgroundContainer>
  );
};
