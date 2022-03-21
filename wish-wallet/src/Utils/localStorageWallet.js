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


export const editToken = ({token, balance}) => {
  // const tok = 0;
  let editWallet = getToken('wallet')
    .filter(item => item.token === token);

    // return console.log(editWallet.token)

  editWallet.push({ token, balance })
  
  console.log(editWallet)

  // sobrescribe o objeto todo
  // editWallet.token = token
  // editWallet.balance = balance
  // console.log(editWallet)


  // return localStorage.setItem("wallet", JSON.stringify(editWallet))
  }



// reference setToken:
// https://pt.stackoverflow.com/questions/371520/gravar-items-e-recuperar-valores-com-localstorage
