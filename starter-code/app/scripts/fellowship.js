console.log("Linked.");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const lands = ['The Shire', 'Rivendell', 'Mordor'];
const body = document.querySelector('body');

// Part 1

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  const middleEarth = document.createElement('section');

  middleEarth.setAttribute('id', 'middle-earth');

  lands.forEach(landName => {
    const land = document.createElement('article');
    const name = document.createElement('h1');

    name.innerHTML = landName;
    land.appendChild(name);
    middleEarth.appendChild(land);
    body.appendChild(middleEarth);
  });
} 

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  const middleEarth = document.querySelector('#middle-earth');
  const landsList = middleEarth.childNodes;
  const shire = landsList[0];
  const hobbitsList = document.createElement('ul');

  hobbitsList.setAttribute('id', 'hobbits-list');

  hobbits.forEach(hobbitName => {
    const hobbit = document.createElement('li');

    hobbit.setAttribute('class', 'hobbit');
    hobbit.innerHTML = hobbitName;
    hobbitsList.appendChild(hobbit);
  });

  shire.appendChild(hobbitsList)
}

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  const ring = document.createElement('div');
  const hobbitsList = document.querySelector('#hobbits-list');
  const frodo = hobbitsList.childNodes[0];

  ring.setAttribute('id', 'the-ring');
  ring.setAttribute('class', 'magic-imbued-jewelry');
  ring.addEventListener('click', nazgulScreech);
  frodo.appendChild(ring);
}


// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  let buddiesCrew = document.createElement('aside');
  let buddiesList = document.createElement('ul');
  let rivendell = document.querySelector('#middle-earth').childNodes[1];

  buddiesList.setAttribute('id', 'buddies-list');
  buddiesCrew.appendChild(buddiesList);
  rivendell.appendChild(buddiesCrew);

  buddies.forEach(buddyName => {
    let buddy = document.createElement('li');
    buddy.setAttribute('class', 'buddy');
    buddy.innerHTML = buddyName;
    buddiesList.appendChild(buddy);
  });
}

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  let strider = 
    document
      .querySelector('#middle-earth')
      .childNodes[1]
      .childNodes[1]
      .childNodes[0]
      .childNodes[3];

  strider.innerHTML = 'Aragorn';
}

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  let hobbitsList = document.querySelector('#hobbits-list');
  let rivendell = document.querySelector('#middle-earth').childNodes[1].childNodes[1];

  rivendell.appendChild(hobbitsList)
}

// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  let rivendell = document.querySelector('#middle-earth').children[1];
  let theFellowship = document.createElement('div');
  let party = document.createElement('ul');
  let hobbits = document.querySelectorAll('.hobbit');
  let buddies = document.querySelectorAll('.buddy');

  theFellowship.setAttribute('id', 'the-fellowship');
  party.setAttribute('id', 'party');
  
  hobbits.forEach(hobbit => {
    party.append(hobbit);
    console.log(`${hobbit.innerHTML} has joined the party!`);
  });

  buddies.forEach(buddy => {
    party.append(buddy);
    console.log(`${buddy.innerHTML} has joined the party!`);
  });

  theFellowship.append(party);
  rivendell.append(theFellowship);
}

// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  let gandalf = document.querySelectorAll('.buddy')[0];
  
  gandalf.innerHTML = 'Gandalf the White';
  gandalf.style.cssText = 'background: white; border: 2px solid grey; width: 50%; border-radius: 5px;';
}

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  let boromir = document.querySelectorAll('.buddy')[4];
  
  console.log('The Horn of Gondor!');
  boromir.style.cssText = 'text-decoration: line-through;';
  party.removeChild(boromir);
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  let hobbits = document.querySelectorAll('.hobbit');
  let frodo = hobbits[0];
  let sam = hobbits[1];
  let party = document.querySelector('#party');
  let mordor = document.querySelector('#middle-earth').children[2];

  party.removeChild(frodo);
  party.removeChild(sam);

  mordor.append(frodo);
  mordor.append(sam);

  let mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mountDoom.style.cssText = 'border: 2px solid black; border-radius: 5px;';
  mordor.append(mountDoom);
}

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  let gollum = document.createElement('div');
  let hobbits = document.querySelectorAll('.hobbit');
  let frodo = hobbits[2];
  let theRing = frodo.children[0];
  let mountDoom = document.querySelector('#mount-doom');
  let mordor = document.querySelector('#middle-earth').children[2];

  gollum.setAttribute('id', 'gollum');
  mordor.append(gollum);
  frodo.removeChild(theRing)
  gollum.append(theRing)
  mountDoom.append(gollum)
}

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  let gollum = document.querySelector('#gollum');
  let hobbits = document.querySelectorAll('.hobbit');
  let buddies = document.querySelectorAll('.buddy');
  let mordor = document.querySelector('#middle-earth > article:nth-child(3)');
  let mountDoom = document.querySelector('#mount-doom');
  let party = document.querySelector('#party');
  let theShire = document.querySelector('#middle-earth > article:nth-child(1)');

  console.log({mordor});

  mountDoom.removeChild(gollum);
  mordor.removeChild(mountDoom);

  buddies.forEach(buddy => {
    party.remove(buddy);
  });

  hobbits.forEach(hobbit => {
    console.log(hobbit);
    theShire.append(hobbit);
  });
}

makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
makeBuddies();
beautifulStranger();
leaveTheShire();
forgeTheFellowShip();
theBalrog();
hornOfGondor();
itsDangerousToGoAlone();
weWantsIt();
thereAndBackAgain();