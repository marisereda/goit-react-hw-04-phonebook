import styled from 'styled-components';

export const InputTitle = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: bold;
  color: ${p => p.theme.colors.label};
`;

export const Input = styled.input`
  font-size: ${p => p.theme.fontSizes.input};
  line-height: ${p => p.theme.fontSizes.input};
  min-width: ${p => p.theme.sizes.input};
`;
