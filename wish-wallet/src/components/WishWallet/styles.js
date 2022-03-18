import styled from 'styled-components'

export const Image = styled.img`
  width: 40px;
  filter: invert(96%) sepia(43%) saturate(4154%) hue-rotate(324deg) brightness(124%) contrast(89%);
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

// refernce change color:
// https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element
// https://codepen.io/sosuke/pen/Pjoqqp
