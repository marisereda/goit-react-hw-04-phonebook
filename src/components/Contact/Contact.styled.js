import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.text};
  line-height: ${p => p.theme.fontSizes.text};
  color: ${p => p.theme.colors.textAccent};

  svg {
    fill: ${p => p.theme.colors.bgButton};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
