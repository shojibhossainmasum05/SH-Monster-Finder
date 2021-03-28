import { monstersMan } from "./monsters.mjs";

for (let monster of monstersMan ) {
    showMonster(monster);
};

function showMonster(monster) {
    const monsterDiv = document.createElement('div');
    monsterDiv.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}?set=set2`;
    img.alt  = monster.name;

    const name = document.createElement('p');
    name.className = 'name';
    name.innerText = monster.name;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monster.email;

    monsterDiv.append(img, name, email);

    document.querySelector('.monsters').append(monsterDiv);
};

ShowNot_found();
    function ShowNot_found() {
    const not_found = document.createElement('div');
    not_found.className = 'p-5 not-found';
    not_found.style.display = 'none';

    const span = document.createElement('span');
    span.innerText = '404';

    const h1 = document.createElement('h1');
    h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';

    not_found.append(span, h1);

    document.querySelector('.monsters').append(not_found);
};

document.querySelector('#search-monster').addEventListener('keyup', function (e) {
    const keyword = e.target.value.toLowerCase();

    const monsters = document.querySelectorAll('.monster');

    let notFound = true;

    for (let monster of monsters) {
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();

        if (name.includes(keyword) || email.includes(keyword) ) {
            monster.style.display = 'block';
            notFound = false;
        } else {
            monster.style.display = 'none';
        };
    };
    if (notFound){
        document.querySelector('.not-found').style.display = 'block';
    } else {
        document.querySelector('.not-found').style.display = 'none';
    };
});

document.querySelector('#search-monster-form').addEventListener('submit', e => {
    e.preventDefault();
});
