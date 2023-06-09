// função que busca os dados na api
async function getData() {
    // valor da cidade digitado no campo de busca
    const city = document.getElementById("search-city").value;

    if (city == "") {
        alert("Digite o nome de alguma cidade para fazer a pesquisa!");
        
    } else {
        // chave da api
        const apiKey = `906cf1f3792bf6e76271652098d3ec41`;

        // url da api
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

        // fazendo a consulta na api
        const res = await fetch(apiUrl);

        // tratando os dados da consulta na api em formato json
        const data = await res.json();

        // chamando a função que imprimi os dados no template via DOM
        showInfo(data);
    }
};


// função que imprimi os dados no template via DOM
async function showInfo(data) {

    // pegando meus elementos via DOM
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const desc = document.getElementById("desc");

    const humi = document.getElementById("humi");
    const wind = document.getElementById("wind");

    const press = document.getElementById("press");
    const country = document.getElementById("country");

    // preenchendo os meus elementos DOM com textos
    city.innerText = `${data.name}`;
    temp.innerText = `${data.main.temp} ºC`;
    desc.innerText = `${data.weather[0].description}`;

    humi.innerText = `${data.main.humidity} %`;
    wind.innerText = `${data.wind.speed} km/h`;

    press.innerText = `${data.main.pressure} hPa`;
    country.innerText = `${data.sys.country}`;
}