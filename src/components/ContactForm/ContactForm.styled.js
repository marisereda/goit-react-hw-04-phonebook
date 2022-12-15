import styled from 'styled-components';
import { Field } from 'formik';

export const ErrorText = styled.div`
  color: red;
`;

export const InputTitle = styled.label`
  display: block;
  font-weight: bold;
  color: ${p => p.theme.colors.label};
`;

export const Input = styled(Field)`
  font-size: ${p => p.theme.fontSizes.input};
  line-height: ${p => p.theme.fontSizes.input};
  min-width: ${p => p.theme.sizes.input};
`;

export const Button = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: ${p => p.theme.space[3]}px;
  min-width: ${p => p.theme.sizes.buttonWidth};
  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.primary};
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgButton};
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.button};
  cursor: pointer;
`;
