const getLocalStorage = () =>{
  const allTokens = localStorage.getItem('tokensData');
  return JSON.parse(allTokens);
};

const setLocalStorage = (newTokenData) => {
  const tokensFromLocalStorage = getLocalStorage() || [];
  const newData = [ ...tokensFromLocalStorage, newTokenData ];
  localStorage.setItem('tokensData', JSON.stringify(newData));
};

const updateLocalStorage = (tokenDataToUpdate, idOfToken) => {
  const tokensFromLocalStorage = getLocalStorage();
  tokensFromLocalStorage.splice(idOfToken, 1, tokenDataToUpdate);
  localStorage.setItem('tokensData', JSON.stringify(tokensFromLocalStorage));
};

const deleteLocalStorage = (idOfToken) => {
  const tokensFromLocalStorage = getLocalStorage();
  tokensFromLocalStorage.splice(idOfToken, 1);
  localStorage.setItem('tokensData', JSON.stringify(tokensFromLocalStorage));
};

export {
  getLocalStorage,
  setLocalStorage,
  updateLocalStorage,
  deleteLocalStorage,
};
