// Store the wallet amount to your local storage with key "amount"

const wallet = document.getElementById("add_to_wallet");
const bookMovie = document.getElementById("book_movies");
const amountInput = document.getElementById("amount");

wallet.addEventListener("click",()=>{
    let amountWallet = localStorage.getItem("key") ? localStorage.getItem("key") : 0 ;
    let amountAdd = amountInput.value;
    amountWallet = Number(amountWallet) + Number(amountAdd);
    localStorage.setItem('key',amountWallet);
    amountInput.value = "";
})

bookMovie.addEventListener("click",()=>{
    window.location.href = "movies.html";
})
