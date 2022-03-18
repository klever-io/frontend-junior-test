import styled from 'styled-components';

export const Btn = styled.button`
  background: ${(({ color }) => color)};
  border: 1px solid #13152A;
  border-radius: 5px;
  color: white;
  padding: 6px 30px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;