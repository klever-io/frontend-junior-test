import styled from 'styled-components';

export const Container = styled.div`
  `;
  
  export const Table = styled.table`
    margin: auto;
    justify-content: space-between;
    width: 100%;

    && th {
      font-size: 13px;
      text-align: start;
    }

    && th:last-child {
      text-align: end;
    }
    
    && td {
    padding: 9px 0;
    font-weight: bold;
    font-size: 19px;
    width: 100%;
  }

  && td:first-child {
    width: 5px;
  }

  && td:last-child {
    text-align: end;
  }
  
  && button {
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 23px;
`;
