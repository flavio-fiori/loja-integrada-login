import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  color: ${({ theme }) => theme.palette.text};
  font-size: 0.875rem;
  margin-top: 1.5rem;
  overflow: hidden;
`;

export const Checkbox = styled.input`
  left: -2rem;
  position: absolute;

  & + span {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.5rem;
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }

  &:hover + span,
  &:focus + span {
    border-width: 2px;
  }

  &:checked + span {
    background-color: ${({ theme }) => theme.palette.primary}
  }
`;
