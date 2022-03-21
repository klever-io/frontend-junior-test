import { validations } from "./validationToken";

export const getToken = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

const storage = (wallet) => {
  return localStorage.setItem("wallet", JSON.stringify(wallet))
};

export const setToken = ({ token, balance }) => {
  if (!validations(token, balance)) return false;

  let setWallet = localStorage['wallet'] ? JSON.parse(localStorage['wallet']) : [];
  setWallet.push({ token, balance });
  storage(setWallet);
  return true;
};

export const removeToken = (item) => {
  let walletToken = getToken('wallet');
  walletToken.splice(item, 1);
  storage(walletToken);
  return walletToken;
};

export const editToken = (token, balance, item) => {
  if (!validations(token, balance)) return false;

  const editWallet = removeToken(item);
  editWallet.push({ token, balance })
  storage(editWallet);
  return true;
};


// reference setToken:
// https://pt.stackoverflow.com/questions/371520/gravar-items-e-recuperar-valores-com-localstorage
// reference remove: 
// https://stackoverflow.com/questions/38748298/remove-array-item-from-localstorage
