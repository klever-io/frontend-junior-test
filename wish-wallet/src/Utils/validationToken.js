import { getToken } from "./localStorageWallet";


const tokenExist = (token) => {
  const listTokens = getToken('wallet');
  if (!listTokens) return true;
  const findToken = listTokens.some((item) => item.token === token);
  return findToken ? 'Token existe!' : true;
};

const inputValidate = (token, balance) => {
  const walletLength = token.length >= 3 && balance.length >= 1;
  return walletLength ? walletLength : 'Compos obrigatorios';
};

export const validations = (token, balance) => {
  tokenExist(token)
  inputValidate(token, balance)
};
