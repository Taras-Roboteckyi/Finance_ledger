import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;

const Input = css`
  display: block;
  width: calc(100% - 8px);
  height: 56px;
  /* padding-left: 8px; */
  padding: 0px 0px 0px 8px;
  font-size: 16px;
  line-height: 23px;
  background: ${props => props.theme.colors.$white};
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  /* ::placeholder {
    padding-left: 8px;
    color: ${props => props.theme.colors.$placeholderColor};
  } */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const InputName = styled.input`
  ${Input}

  /* ::placeholder {
    padding-left: 8px;
    color: ${props => props.theme.colors.$placeholderColor};
  } */

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
  margin-bottom: 16px;
`;
export const InputEmail = styled.input`
  ${Input}
  margin-bottom: 24px;
`;

////////////////////////////////Floating label////////////////
export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 14px;
  color: ${props => props.theme.colors.$placeholderColor};
  transition: 0.3s ease all;

  ${InputName}:focus ~ &,
  ${InputEmail}:focus ~ & {
    top: 6px;
    left: 5px;
    font-size: 11px;
    /* opacity: 0.6; */
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
`;

export const TextError = styled.span`
  width: 280px;
  word-break: break-all;
  color: red;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
