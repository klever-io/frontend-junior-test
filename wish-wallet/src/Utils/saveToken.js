export const setToken = ({ token, balance }) => {
  if (localStorage.getItem(token)) return false;

  if (token.length >= 3 && balance.length >= 5) {
    let wallet = localStorage['wallet'] ? JSON.parse(localStorage['wallet']) : [];
    wallet.push({ token, balance })
    localStorage.setItem('wallet', JSON.stringify(wallet));
    return true;
  }
  return false;
};

export const getToken = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

// reference setToken:
// https://pt.stackoverflow.com/questions/371520/gravar-items-e-recuperar-valores-com-localstorage
