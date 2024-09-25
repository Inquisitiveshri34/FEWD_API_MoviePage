// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let showWallet = (walletAmount)=>{
  let wallet = document.getElementById("wallet"); 
  wallet.innerText = walletAmount;
}
showWallet(localStorage.getItem("key"));

let moviesContainer = document.querySelector("#movies");
let showData = (data)=>{
  console.log(data);
  data.forEach((dataele) => {
    console.log(dataele)
    let container = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src",dataele.Poster);
    let title = document.createElement("h3");
    title.innerText = dataele.Title;
    let bookBtn = document.createElement("button");
    bookBtn.textContent = "Book Now";
    bookBtn.setAttribute("id",dataele.imdbID);
    bookBtn.classList.add("book_now");
    container.append(image,title,bookBtn);
    moviesContainer.append(container); 

    bookBtn.addEventListener("click",()=>{
      localStorage.setItem("movie",JSON.stringify(dataele));
      window.location.href = "checkout.html";
    });
  })
}   
const inputMovie = document.querySelector("#name");
let searchMovies = async (name) => {
  try{
    console.log("datafetching",name);
    let jsonData = await fetch(`https://www.omdbapi.com/?s=${name}&page=1&apikey=f4300b1a`)
    let dataobjs = await jsonData.json();
    let data = dataobjs.Search;
    console.log(data);
    moviesContainer.innerHTML = "";
    showData(data);
  } 
  catch(err){
    console.log(err.message);
  }
}
let timerId;
inputMovie.addEventListener("input", () => {
    clearTimeout(timerId); 
    let movieName = inputMovie.value;
    timerId = setTimeout(() => {
        searchMovies(movieName);
    }, 1000);
});