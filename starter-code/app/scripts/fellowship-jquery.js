$(document).ready(() => {
  console.log('jq up and running!');
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

  let allHobbits, allBuddies;
  
  // jQuery Selectors
  let $middleEarth, $theShire, $rivendell, $mordor, $mountDoom;
  let $hobbitsList, $buddiesList, $theFellowship;
  let $frodo, $sam, $gollum, $gandalf, $strider, $boromir;
  let $theRing;

  let $messageBox = $('.message-box');;

  // Helper Funcs
  function updateMessageBox(message, clearPrevText = false) {
    if (clearPrevText) {
      $messageBox.html('');
      $messageBox.append(`<span class="fadeInLoad">${message}</span>`);
    } 
      $messageBox.append(`<span class="fadeInLoad">${message}</span>`);
  }

  function clearTheBoard() {
    $('#middle-earth').remove();
  }

  // Part 1

  function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    $(body).append('<section id="middle-earth" />');
    $middleEarth = $('#middle-earth');
    
    lands.forEach(land => $middleEarth.append(`<article class="fadeInLoad land" id="${land.replace(/\s+/g, '-').toLowerCase()}"><h1>${land}</h1></article>`));
    
    // update jQ selectors
    $theShire = $('#middle-earth > article:nth-child(1)');
    $rivendell = $('#middle-earth > article:nth-child(2)');
    $mordor = $('#middle-earth > article:nth-child(3)');

    updateMessageBox('The Journey Begineth...');
  }
  
  // Part 2

  function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit
    $theShire.append('<ul class="hobbits" />');
    $hobbitsList = $('.hobbits');
    hobbits.forEach(hobbit => $hobbitsList.append(`<li class="fadeInLoad hobbit" id="${hobbit.slice(0, 3).toLowerCase()}">${hobbit}</li>`));

    // update jQ selectors
    $frodo = $('#fro');
    $sam = $('#sam');
    
    updateMessageBox('But what about second breakfast?', true);
  }

  // Part 3

  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    // add the ring as a child of Frodo
    $frodo.append('<div class="fadeInLoad magic-imbued-jewelry" id="the-ring" />');

    // update jQ selectors
    $theRing = $('#the-ring').on('click', () => nazgulScreech());
    
    updateMessageBox('Keep it safe...', true)
  }

  // Part 4

  function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    $rivendell.append('<aside><ul class="buddies" /></aside>')
    $buddiesList = $('.buddies');

    buddies.forEach(buddy => $buddiesList.append(`<li class="fadeInLoad buddy" id="${buddy.slice(0, 3).toLowerCase()}">${buddy}</li>`));

    // update jQ selectors
    $gandalf = $('#gan');
    $strider = $('#str');
    $boromir = $('#bor');

    updateMessageBox('Yoohoo...Running Crew...', true);
  }

  // Part 5

  function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    $strider.html('Aragorn');

    updateMessageBox('What\'s a Strider?', true);
  }

  // Part 6

  function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    $rivendell.append($hobbitsList);
    updateMessageBox('We\'re off to see the wizard!', true);
  }

  // Part 7

  function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    $rivendell.append('<div class="fadeInLoad" id="the-fellowship" />');
    $theFellowship = $('#the-fellowship');
    
    allHobbits = document.querySelectorAll('.hobbit');
    allBuddies = document.querySelectorAll('.buddy');

    allHobbits.forEach(hobbit => {
      $theFellowship.append(hobbit);
      updateMessageBox(`${hobbit.innerText} has joined the partay!`);
    });
    
    allBuddies.forEach(buddy => {
      $theFellowship.append(buddy);
      updateMessageBox(`${buddy.innerText} has joined the partay!`);
    });
  }

  // Part 8

  function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    $gandalf
      .html('Gandalf the White')
      .css({ 
        'background': 'white', 
        'border': '2px solid grey' 
      });
    
    updateMessageBox('YOU SHALL NOT PASS', true);
  }

  // Part 9

  function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    updateMessageBox('Someone done bloweth on the Horn of Gondor!', true);
    setTimeout(() => updateMessageBox('Boromir, he dead.'), 4000);
    setTimeout(() => ($boromir.css({ 'text-decoration': 'line-through' })), 1000);
    setTimeout(() => $boromir.remove(), 4000);
  }

  // Part 10

  function itsDangerousToGoAlone() {
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    $mordor.append($frodo);
    $mordor.append($sam);
    $mordor.append('<div id="mount-doom" />');
    $mountDoom = $('#mount-doom');
  }

  // Part 11

  function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
    $mordor.append('<div class="fadeInLoad" id="gollum" />');
    $gollum = $('#gollum');
    $gollum.append($theRing);
    $mountDoom.append($gollum);
  }

  // Part 12

  function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
    $gollum.remove();
    $rivendell.find('.buddy').remove();
    $theShire.append(allHobbits);
    updateMessageBox('There and back again', true);
  }

  // Event Listeners
  $('.controls-btn').on('click', (e) => {
    switch(parseInt(e.target.dataset.id)) {
      case 0: 
        makeMiddleEarth();
        break;
      case 1: 
        makeHobbits();
        break;
      case 2: 
        keepItSecretKeepItSafe();
        break;
      case 3: 
        makeBuddies();
        break;
      case 4: 
        beautifulStranger();
        break;
      case 5: 
        leaveTheShire();
        break;
      case 6: 
        forgeTheFellowShip();
        break;
      case 7: 
        theBalrog();
        break;
      case 8: 
        hornOfGondor();
        break;
      case 9: 
        itsDangerousToGoAlone();
        break;
      case 10: 
        weWantsIt();
        break;
      case 11: 
        thereAndBackAgain();
        break;
      case 12:
        clearTheBoard();
      default:
    }
  });

  // setTimeout(makeHobbits, 6000);
  // setTimeout(keepItSecretKeepItSafe, 9000);
  // setTimeout(makeBuddies, 12000);
  // setTimeout(beautifulStranger, 15000);
  // setTimeout(leaveTheShire, 18000);
  // setTimeout(forgeTheFellowShip, 21000);
  // setTimeout(theBalrog, 24000);
  // setTimeout(hornOfGondor, 27000);
  // setTimeout(itsDangerousToGoAlone, 30000);
  // setTimeout(weWantsIt, 33000);
  // setTimeout(thereAndBackAgain, 36000);
});