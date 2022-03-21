import { getToken } from "./localStorageWallet";


const tokenExist = (token) => {
  const listTokens = getToken('wallet');
  if (!listTokens) return true;
  const findToken = listTokens.some((item) => item.token === token);
  return findToken ? 'Token existe!' : true;
};

const inputValidate = (token, balance) => {
  if (token === '' || balance === '') return 'Compos obrigatorios';
  if (token.length < 3) return 'token deve ter 3 carateres'; 
  if (balance.length < 1) return 'minimo de balance deve ser 1';
  return true;
};

export const validations = (token, balance) => {
  return (
    tokenExist(token),
    inputValidate(token, balance)
  );
};
