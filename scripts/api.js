const myURL = 'https://fdnd.directus.app/items/person/199';

let aboutMeNaam = document.querySelector('.about-me div h2')





let JSONobject = await getDataAsJSON(myURL)

let myName = JSONobject.data.name;


aboutMeNaam.textContent = `Mijn naam is ${myName}`;


async function getDataAsJSON(url) {
    const response = await fetch(url);
    const maakdataJSON = await response.json();
    return maakdataJSON;
}