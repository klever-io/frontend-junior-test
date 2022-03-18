import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const FormContent = styled.form`
  margin: auto;
  width: 100%;
  padding: 0 15px;

  && p {
    margin: 0;
    width: 100%
  }
  
  && div {
    margin: auto;
    display: flex;
  }

  && button:hover{
    background:#78788c;
  }

  && label {
    display: flex;
    justify-content: block;
    margin-top: 19px;
  }

  && input {
    height: 25px;
    width: 98%;
    margin-top: 5px;
    border: 0;
    border-radius: 5px;
    padding: 3px;
  }
`;
