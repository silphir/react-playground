import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 5px;
`;
const InputLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  margin-bottom: 2px;
  span {
    display: inline-block;
    width: 100%;
    color: #0084ac;
    font-weight: 500;
    margin-bottom: 2px;
  }
  input {
    width: 100%;
    font-size: 1rem;
    padding: 7px 13px;
    border: 1px solid #999;
    border-radius: 5px;
  }
`;
const ValidationMsg = styled.span`
  display: inline-block;
  width: 100%;
  color: #ed0000;
`;

export const InputForm = ({ labelText, name, type, value, validationMsg, onChange }: {
  labelText: string;
  name: string;
  type: string;
  value: string;
  validationMsg: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <InputWrapper>
      <InputLabel>
        <span>{labelText}</span>
        <input type={type} name={name} value={value} onChange={onChange}></input>
      </InputLabel>
      <ValidationMsg>{validationMsg}</ValidationMsg>
    </InputWrapper>
  );
};
