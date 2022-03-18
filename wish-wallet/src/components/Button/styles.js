import styled from 'styled-components';

export const Btn = styled.button`
  background: ${(({ color }) => color)};
  border: 1px solid #13152A;
  border-radius: 5px;
  color: white;
  width: 90px;
  height: 28px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;