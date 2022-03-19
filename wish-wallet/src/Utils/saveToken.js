export const setToken = ({ token, balance }) => {
  if (localStorage.getItem(token)) return false;
  if (token.length >= 3 && balance.length >= 5) {
    localStorage.setItem(token, balance);
    console.log('cadastrado!')
    return true;
  }
  return false;
}

export const getToken = (token, balance) => {
  return localStorage.getItem({token, balance})
}
