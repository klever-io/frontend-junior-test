const getLocalStorage = (key) =>{
  const allTokens = localStorage.getItem(key);
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

const updateLocalStorage = (tokenDataToUpdate, index) => {
  const tokens = getLocalStorage('tokensData');
  tokens[index] = tokenDataToUpdate;
  setLocalStorage(tokens);
};

export {
  getLocalStorage,
  setLocalStorage,
  updateLocalStorage,
};