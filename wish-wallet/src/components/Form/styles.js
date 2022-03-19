import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const FormContent = styled.form`
  margin: auto;
  width: 96%;
  margin-left: 4%;

  && p {
    margin: 0;
    width: 100%;
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
    width: 96%;
    margin-top: 5px;
    border: 0;
    border-radius: 5px;
    padding: 8px 2%;
    font-weight: bold;
    text-transform:uppercase;
  }
`;

export const ContentButton = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
