// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



let moviesContainer = document.querySelector("#movies");

    let showData = (data)=>{
      data.forEach((dataele) => {
        try{
            let container = document.createElement("div");
            let image = document.createElement("img");
            image.setAttribute("src",dataele.Poster);
            container.append(image);
            moviesContainer.innerHTML = "";
            moviesContainer.append(container); 
        }
        catch(err){
            console.log(err.message);
        }
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