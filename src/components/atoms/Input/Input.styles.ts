import styled from 'styled-components';

export const Container = styled.div`
  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0.75rem;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: .0625rem solid ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.primary};
  font-size: 1rem;  
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.palette.text};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const Error = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  color: red;
`;