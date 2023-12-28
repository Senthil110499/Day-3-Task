const URL="https://restcountries.com/v3.1/all";

const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=() => {
    let obj=JSON.parse(xhr.response);
    for(let country of obj ){
        {
            // console.log(country.flags.png);
        }
    };
}
