import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    && p:nth-child(2) {
      margin-top: 3px;
      color: red;
      font-weight: normal
    }
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

  && button:hover {
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

  && input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const ContentButton = styled.div`
  margin-top: 25px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

// reference input: https://pt.stackoverflow.com/questions/177573/retirar-as-setas-no-campo-tipo-number
