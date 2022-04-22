const bt = document.querySelector('input.btSave').onclick = saveOnStorage
const btRemove = document.querySelector('input#btRemove').onclick = removeFromStorage

function saveOnStorage(event) {
   /*Parâmetro event adicionado visto que o mesmo vem do html */
const firstInput = document.querySelector('input.firstInput').value
const secondInput = document.querySelector('input.secondInput').value


if(firstInput === '' || secondInput === ''){
    Swal.fire('Error','Token and Balance are required fields!','error')
    event.preventDefault()
   
}else{
   const tokenList = localStorage.setItem('Tokens',firstInput)
   const balanceList = localStorage.setItem('Balance',secondInput)
    }

}


function removeFromStorage(event){

    const remove = Swal.fire({

  title: 'Are you sure you want to remove your current token?',
  icon: 'question',
  showDenyButton: true,
  confirmButtonText: 'Yes',
  denyButtonText: 'No',
  
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
        document.location.href = 'http://127.0.0.1:5501/index.html'
        localStorage.removeItem('Tokens')
        localStorage.removeItem('Balance')
  } else if (result.isDenied) {
    Swal.fire('Token changes are not saved', '', 'info')
  }
})

    if(remove == true) {
        const removeTokenList = localStorage.removeItem('Tokens')
        const removeBalanceList = localStorage.removeItem('Balance')
    }else{
        event.preventDefault()
    }
    
}