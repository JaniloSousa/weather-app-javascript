// minhas conexões DOM
const weather_container = document.getElementById("weather-container");

const search_city = document.getElementById("search-city");
const city = document.getElementById("city-span");
const temp = document.getElementById("temp-span");

const desc = document.getElementById("desc-span");
const desc_icon = document.getElementById("desc-icon");

const humi = document.getElementById("humi-span");
const wind = document.getElementById("wind-span");
const press = document.getElementById("press-span");

const country = document.getElementById("country-span");
const flag = document.getElementById("country-flag");

// meus links das API's

/*
API do clima
API do ícone do clima
API das bandeiras
API do background
*/

const apiUnsplash = "https://source.unsplash.com/1600x900/?";

// função que mostra as informações no template
function showInfos(data, search_city) {
    // preenchendo os meus elementos DOM com textos
    city.innerText = `${data.name}`;
    temp.innerText = `${data.main.temp} ºC`;

    desc.innerText = `${data.weather[0].description}`;
    desc_icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

    humi.innerText = `${data.main.humidity} %`;
    wind.innerText = `${data.wind.speed} km/h`;
    press.innerText = `${data.main.pressure} hPa`;

    country.innerText = `${data.sys.country}`;
    // https://flagsapi.com//flat/64.png`
    flag.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);

    
    // pegando o background e mudando a imagem
    document.body.style.backgroundImage = `url("${apiUnsplash + search_city}")`;

    // mostrando os elementos escondidos
    weather_container.classList.remove("hide");
}

// função que faz a consulta na API
async function getData() {
    // pegando o valor do input
    const search_city = document.getElementById("search-city").value;
    
    // verificando um pesquisa vazia
    if (search_city == "") {
        alert("Entre com o nome de uma cidade!");

    } else {
        // chave da api
        const apiKey = `906cf1f3792bf6e76271652098d3ec41`;

        // url da api
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search_city}&units=metric&appid=${apiKey}&lang=pt_br`;

        // fazendo a consulta na api
        const res = await fetch(apiUrl);

        // tratando os dados da consulta na api em formato json
        const data = await res.json();

        // chamando a minha função para imprimir os dados
        showInfos(data, search_city);
    }
}


// tratando o evento do usuário apertar Enter
search_city.addEventListener("keyup", (e) => {
    if(e.code == "Enter") {
        const search_city = e.target.value;
        getData(search_city)
    }
})