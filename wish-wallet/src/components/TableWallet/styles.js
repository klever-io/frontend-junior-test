import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
  `;
  
  export const Table = styled.table`
    margin: auto;

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
    width: 100%;
  }

  && td:first-child {
    width: 5px;
    padding: 0 15px;
  }

  && td:last-child {
    text-align: end;
  }
`;
