let description = '';

function petsInfo(obj) {
    for (let keys in obj) {
        description += `
<h2>${obj[keys].name}</h2>
<h3>${obj[keys].type} | ${obj[keys].breed}</h3>
<p>Age: ${obj[keys].age}</p>
<img src="${obj[keys].photo}" alt="${obj[keys].breed}">
`;
    }
    return description;
}

document.querySelector('main').innerHTML = `${petsInfo(pets)}`;



// another solution 

/* 

const main = document.querySelector('main');
let html = '';

for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    html += `
<h2>${pet.name}</h2>
<h3>${pet.type} | ${pet.breed}</h3>
<p>Age: ${pet.age}</p>
<img src="${pet.photo}" alt="${pet.breed}">
`;
}

main.insertAdjacentHTML('beforeend', html);

*/
