import styled from 'styled-components'

export const Image = styled.img`
  width: 40px;
  filter: invert(96%) sepia(43%) saturate(4154%) hue-rotate(324deg) brightness(124%) contrast(89%);
`;

export const ContentImage = styled.div`
  display: flex;
  width: 80%;

  & h2 {
    margin-left: 5px;
    font-size: 20px;
  }
  `;


export const Content = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: ${(({ btn }) => btn ? 'space-between' : 'flex-start')};

  && div:last-child {
    display: flex;
    width: auto;
    justify-content: flex-end;
    margin: auto;
    }
  }

`;

// refernce change color:
// https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element
// https://codepen.io/sosuke/pen/Pjoqqp
