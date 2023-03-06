const getLocalStorage = (chave) =>{
  const allTokens = localStorage.getItem(chave);
  return JSON.parse(allTokens);
};

const setLocalStorage = (token, balance) =>{
  const tokensSavedInLocalStorage = getLocalStorage('tokensData');
  let tokensData = [];

  if (tokensSavedInLocalStorage) {
    tokensData = tokensSavedInLocalStorage;
  }

  tokensData.push({token, balance});
  localStorage.setItem('tokensData', JSON.stringify(tokensData));
};

export {
  getLocalStorage,
  setLocalStorage,
};