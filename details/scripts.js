const URL="https://restcountries.com/v3.1/all";

const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=() => {
    let object=JSON.parse(xhr.response);
    for(let country in object){
        {
            console.log(country.name.common);
            console.log(country.region);  
            console.log(country.subregion);  
            console.log(country.population);  
        
        }
    };
}