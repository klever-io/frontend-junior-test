import { validations } from "./validationToken";

export const getToken = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

export const setToken = ({ token, balance }) => {
  if (!validations(token, balance)) return false;

  let wallet = localStorage['wallet'] ? JSON.parse(localStorage['wallet']) : [];
  wallet.push({ token, balance })
  localStorage.setItem('wallet', JSON.stringify(wallet));
  return true;
};

export const editToken = (token, balance, editItem) => {
  let editWallet = getToken('wallet')
  editWallet.splice(editItem, 1)
  editWallet.push({ token, balance })
  return localStorage.setItem("wallet", JSON.stringify(editWallet))
  }

// reference setToken:
// https://pt.stackoverflow.com/questions/371520/gravar-items-e-recuperar-valores-com-localstorage
// reference remove: 
// https://stackoverflow.com/questions/38748298/remove-array-item-from-localstorage
