// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let showWallet = (walletAmount)=>{
    let wallet = document.getElementById("wallet"); 
    wallet.innerText = walletAmount;
  }

showWallet(localStorage.getItem("key"));

let movieShow = (dataele) => {
    const moviesContainer = document.getElementById("movie");
    let container = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src",dataele.Poster);
    image.setAttribute("alt","image")
    let title = document.createElement("h3");
    title.innerText = dataele.Title;
    container.append(image,title);
    moviesContainer.append(container); 
}
movieShow(JSON.parse(localStorage.getItem("movie")));

const seats = document.getElementById("number_of_seats");
seats.addEventListener("change",()=>{
    const walletAmount = localStorage.getItem("key");
    if (walletAmount < (Number(seats.value) * 100)){
        alert("Insufficient Balance!")
    }
    console.log((Number(seats.value) * 100))
})

const confirmBtn = document.getElementById("confirm");
confirmBtn.addEventListener("click",()=>{
    let walletAmount = localStorage.getItem("key");
    if (walletAmount < (Number(seats.value) * 100)){
        alert("Insufficient Balance!")
        console.log((Number(seats.value) * 100))
    }
    else{
        walletAmount = walletAmount - (Number(seats.value) * 100);
        showWallet(walletAmount);
        localStorage.setItem('key',walletAmount);
        alert("Booking successfull!");
        seats.value="";
    }
})