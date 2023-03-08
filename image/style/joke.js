const btnEl =document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "xYUB7lOsLme4xUX87Nbejg==oNQ40jgGHq4aUBHH"; 

const options ={
    method: "GET",
    Headers:{
        "X-Api-Key":apikey,
    },
};
 

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    jokeEl.innerText = "updating...";
    btnEl.disabled = true;
    btnEl.innerText = "loading...";
     const responce = await fetch(apiURL, options);
     const data = await responce.json();

     btnEl.disabled = false;
     btnEl.innerText = "tell me a joke";

     jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);