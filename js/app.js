
const apiKey = "a177f8481c31fa96c3f95ad4f4f84610";
const latitude = "30.0444,31.2357";
const url = `https://api.darksky.net/forecast/${ apiKey }/${ latitude }/`

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getDataFromApi(URL)
{

    const response = await fetch(URL);


    var data = await response.json();

    console.log(data);

}
console.log(url)
getDataFromApi(BASE_URL);
console.log();