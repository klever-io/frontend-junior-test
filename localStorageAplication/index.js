function getToken(){
                    
    const token = localStorage.getItem('Tokens')
            

    if(token) {
        document.getElementById("tokenList").innerHTML = `<a href="Pages/editToken.html"><i class="fa-solid fa-pen-to-square edit"></i></a>${token}`
    }else {
        document.getElementById("tokenList").innerHTML = `<h1 class = 'mr'>-</h1>`
    }
    
    
    const balance = localStorage.getItem('Balance')

    if(balance) {
        document.getElementById("balanceList").innerHTML = balance
    }else {
        document.getElementById("balanceList").innerHTML = `<h1 class = 'mr'>-</h1>`
    }
}
getToken()