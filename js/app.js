let countrylists=document.querySelector(".country-lists");

fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then((data)=>display(data))

function display(data){
    data.forEach((country)=>{
        console.log(country);
        
        countrylists.innerHTML+=`
           <div class="card">
            <a href="/country.html?name=${country.name.common}">
            <img src="${country.flags.svg}" alt="flg">
            <div class="card-body">
                <h3>${country.name.common}</h3>
            <p><b>Population: </b>${country.population.toLocaleString()}</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Capital:  </b>${country.capital}</p>
            </div>
            </a>
        </div>
        `
    })
    
}