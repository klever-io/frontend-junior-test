const saveTokenButton = document.querySelector('input.btSave').onclick = saveToken

function saveToken(event) {
   /*Parâmetro event adicionado visto que o mesmo vem do html */
const firstInput = document.querySelector('input.firstInput').value
const secondInput = document.querySelector('input.secondInput').value


if(firstInput === '' || secondInput === ''){
    /*para os alerts utilizei a biblioteca sweet alert 2 */
    Swal.fire('Error','Token and Balance are required fields!','error')
    event.preventDefault()
   
}else if(firstInput !== '' && secondInput !== ''){
   const tokenList = localStorage.setItem('Tokens',firstInput)
   const balanceList = localStorage.setItem('Balance',secondInput)

  }


}

















   


