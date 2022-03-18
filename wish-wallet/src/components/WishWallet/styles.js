import styled from 'styled-components'

export const Image = styled.img`
  width: 55px;
`;

export const ContentImage = styled.div`
  display: flex;

  & h2 {
    margin-left: 5px;
  }
  `;


export const Content = styled.div`
  display: flex;
  justify-content: ${(({ btn }) => btn ? 'space-between' : 'flex-start')};
  margin: auto;
`;