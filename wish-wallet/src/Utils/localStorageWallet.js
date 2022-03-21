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

export const removeToken = (item) => {
  let walletToken = getToken('wallet');
  walletToken.splice(item, 1);
  return walletToken;
}

export const editToken = (token, balance, item) => {
  const remove = removeToken(item);
  // let editWallet = getToken('wallet')
  // editWallet.splice(editItem, 1)
  remove.push({ token, balance })
  return localStorage.setItem("wallet", JSON.stringify(remove))
  }

// reference setToken:
// https://pt.stackoverflow.com/questions/371520/gravar-items-e-recuperar-valores-com-localstorage
// reference remove: 
// https://stackoverflow.com/questions/38748298/remove-array-item-from-localstorage
