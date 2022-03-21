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
};

export const editToken = (token, balance, item) => {
  if (!validations(token, balance)) return false;

  const remove = removeToken(item);
  remove.push({ token, balance })
  localStorage.setItem("wallet", JSON.stringify(remove))
  return true;
  };

// reference setToken:
// https://pt.stackoverflow.com/questions/371520/gravar-items-e-recuperar-valores-com-localstorage
// reference remove: 
// https://stackoverflow.com/questions/38748298/remove-array-item-from-localstorage
