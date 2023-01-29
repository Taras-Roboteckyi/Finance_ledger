import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 23px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const Input = css`
  display: block;
  width: calc(100% - 8px);
  height: 56px;

  padding: 0px 0px 0px 8px;
  font-size: 16px;
  line-height: 23px;
  background: ${props => props.theme.colors.$white};
  border: 1px solid #f5f5f5;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

/////////////////Floating label////////////////

export const Label = styled.label`
  position: absolute;

  color: ${props => props.theme.colors.$placeholderColor};

  pointer-events: none;
  left: 8px;
  top: 16px;

  background: inherit;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const InputName = styled.input`
  ${Input}

  margin-bottom: 16px;

  &:focus {
    outline: none;
    ~ ${Label} {
      top: -20px;
    }
  }
  &:not(:placeholder-shown) ~ ${Label} {
    top: -20px;
  }
`;
export const InputEmail = styled.input`
  ${Input}

  margin-bottom: 24px;

  &:focus {
    outline: none;
    ~ ${Label} {
      top: -20px;
    }
  }
  &:not(:placeholder-shown) ~ ${Label} {
    top: -20px;
  }
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 8px;
  bottom: -20px;
`;

export const TextError = styled.span`
  width: 280px;
  word-break: break-all;
  color: red;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
