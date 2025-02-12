const myURL = 'https://fdnd.directus.app/items/person/199';

let aboutMeNaam = document.querySelector('.about-me .my-name h2');
let aboutMeAge = document.querySelector('.about-me .my-age h2');
let aboutMeGoals = document.querySelector('.about-me .my-goals h2');

let myNameSection = document.querySelector('.my-name .text-wrapper');
let myAgeSection = document.querySelector('.my-age .text-wrapper');
let myGoalsSection = document.querySelector('.my-goals .text-wrapper');
let myPictureSection = document.querySelector('.my-picture .text-wrapper');

let JSONobject = await getDataAsJSON(myURL)

let myName = JSONobject.data.name;
let myAge = JSONobject.data.birthdate;
let myBio = JSONobject.data.bio;
let myNickname = JSONobject.data.nickname;
let myPicture = JSONobject.data.avatar;
let myGoals = JSON.parse(JSONobject.data.custom);
console.log(myGoals.doelen);


// 1 Naam
aboutMeNaam.textContent = `Mijn naam is ${myName}`;

let myBioText = document.createElement("p");
myBioText.textContent = myBio;
myNameSection.append(myBioText);

let myNicknameText = document.createElement("p");
myNicknameText.textContent = `Nickname: ${myNickname}`;
myNameSection.append(myNicknameText);

// 2 Age
aboutMeAge.textContent = `Mijn geboorte datum is ${myAge}`;

// 3 Goals
aboutMeGoals.textContent = `Mijn doelen zijn:`;
let myGoalsText = document.createElement("p");
myGoalsText.textContent = myGoals.doelen;
myGoalsSection.append(myGoalsText);

// 4 Picture
let myPictureImg = document.createElement("img");
myPictureImg.src = myPicture;
myPictureImg.alt = myName;

myPictureSection.append(myPictureImg);












async function getDataAsJSON(url) {
    const response = await fetch(url);
    const maakdataJSON = await response.json();
    return maakdataJSON;
}