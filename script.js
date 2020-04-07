/***************************/
// Helper functions to change modifier deck based on perks
/***************************/
// get perks
function getClassPerks() {
  let classPerks = new Array(15);
  for (i = 0; i < classPerks.length; i++) {
    console.debug(i)
    console.debug(document.getElementById(classPrefix + "Perk" + (i + 1)));
    classPerks[i] = document.getElementById(classPrefix + "Perk" + (i + 1));
    if (classPerks[i].classList.contains("checked"))
      setCookie("perk" + (i + 1), "chosen", 365);
    else {
      setCookie("perk" + (i + 1), "notChosen", 365);
    }
  }
  return classPerks;
}

// remove a card type based on perk
function RemoveXModifierCards(cardType, numCardsToRemove) {
  var i = 0;
  while (i < modDeckArray.length && i < numCardsToRemove) {
    if (modDeckArray[i] === cardType) {
      modDeckArray.splice(i, 1);
    } else i++;
  }
  cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
}

// add a card type based on perk
function AddXModifierCards(cardType, numCardsToAdd) {
  for (var i = 0; i < numCardsToAdd; i++) {
    modDeckArray.push(cardType);
  }
  cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
}

/***************************/
//Section for enabling use of cookies
/***************************/
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var characterSelection = getCookie("character");
  var currentLevel = getCookie("level");
  levelCount=Number(currentLevel);
  if (levelCount>0 && levelCount<10){
    levelDown.classList.remove("at-min");
    levelCounter.innerHTML = "Level: " + levelCount;
  }
  else levelCount=1;

  if (currentLevel =="9"){
    levelUp.classList.add("at-max;");
  }
  
  // Perk check
  var perks = new Array(15);
  perks.fill("");
  for (var i = 0; i < perks.length; i++) {
    perks[i] = getCookie("perk" + (i+1));
  }
  
  switch (characterSelection) {
    case "cragheart":
      cragheart.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "brute":
      brute.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "mindthief":
      mindthief.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "scoundrel":
      scoundrel.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "spellweaver":
      spellweaver.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "tinkerer":
      tinkerer.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "beasttyrant":
      beastTyrant.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "doomstalker":
      doomStalker.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "nightshroud":
      nightshroud.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "sawbones":
      sawbones.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    case "summoner":
      summoner.classList.add("character-selected");
      characterSelected = true;
      confirmCharacterButton.classList.remove("not-without-more-selected");
      break;
    default:
      characterSelected = false;
      break;
  }
}
//
let perks = [];

//flipped card path
let flippedCard = "./Card Back.png";

//Class prefix for finding folders and perks
let classPrefix = "";
let classDirectory = "";

//cards in hand
let handSize = 0;
let cardHand1 = document.getElementById("card1");
let cardHand2 = document.getElementById("card2");
let cardHand3 = document.getElementById("card3");
let cardHand4 = document.getElementById("card4");
let cardHand5 = document.getElementById("card5");
let cardHand6 = document.getElementById("card6");
let cardHand7 = document.getElementById("card7");
let cardHand8 = document.getElementById("card8");
let cardHand9 = document.getElementById("card9");
let cardHand10 = document.getElementById("card10");
let cardHand11 = document.getElementById("card11");
let cardHand12 = document.getElementById("card12");

//cards that are discarded, lost, or active
let discard1 = document.getElementById("discard1");
let discard2 = document.getElementById("discard2");
let discard3 = document.getElementById("discard3");
let discard4 = document.getElementById("discard4");
let discard5 = document.getElementById("discard5");
let discard6 = document.getElementById("discard6");
let discard7 = document.getElementById("discard7");
let discard8 = document.getElementById("discard8");
let discard9 = document.getElementById("discard9");
let discard10 = document.getElementById("discard10");
let discard11 = document.getElementById("discard11");
let discard12 = document.getElementById("discard12");
let lost1 = document.getElementById("lost1");
let lost2 = document.getElementById("lost2");
let lost3 = document.getElementById("lost3");
let lost4 = document.getElementById("lost4");
let lost5 = document.getElementById("lost5");
let lost6 = document.getElementById("lost6");
let lost7 = document.getElementById("lost7");
let lost8 = document.getElementById("lost8");
let lost9 = document.getElementById("lost9");
let lost10 = document.getElementById("lost10");
let lost11 = document.getElementById("lost11");
let lost12 = document.getElementById("lost12");
let active1 = document.getElementById("active1");
let active2 = document.getElementById("active2");
let active3 = document.getElementById("active3");
let active4 = document.getElementById("active4");
let active5 = document.getElementById("active5");
let active6 = document.getElementById("active6");

//buttons for play
let playCardsButton = document.getElementById("play-cards-button");
let discardButton = document.getElementById("discard-button");
let loseButton = document.getElementById("lose-button");
let activateButton = document.getElementById("activate-button");
let recoverDiscardButton = document.getElementById("recover-discard-button");
let shortRestButton = document.getElementById("short-rest-button");
let longRestButton = document.getElementById("long-rest-button");
let discardActiveCardButton = document.getElementById("discard-active-card");
let loseActiveCardButton = document.getElementById("lose-active-card");
let recoverLostCardButton = document.getElementById("recover-lost");
let loseCardFromRestButton = document.getElementById("lose-discard-button");
let rerollShortRestButton = document.getElementById("reroll-random-card-button");
let confirmCharacterButton = document.getElementById("confirm-character-button");
let togglePoison = document.getElementById("toggle-poison");
let toggleWounded = document.getElementById("toggle-wounded");
let toggleImmobilized = document.getElementById("toggle-immobilized");
let toggleDisarmed = document.getElementById("toggle-disarmed");
let toggleStunned = document.getElementById("toggle-stunned");
let toggleMuddled = document.getElementById("toggle-muddled");
let toggleInvisible = document.getElementById("toggle-invisible");
let toggleStrengthened = document.getElementById("toggle-strengthened");
let toggleBearPoison = document.getElementById("toggle-bear-poison");
let toggleBearWounded = document.getElementById("toggle-bear-wounded");
let toggleBearImmobilized = document.getElementById("toggle-bear-immobilized");
let toggleBearDisarmed = document.getElementById("toggle-bear-disarmed");
let toggleBearStunned = document.getElementById("toggle-bear-stunned");
let toggleBearMuddled = document.getElementById("toggle-bear-muddled");
let toggleBearInvisible = document.getElementById("toggle-bear-invisible");
let toggleBearStrengthened = document.getElementById("toggle-bear-strengthened");
let xpUp = document.getElementById("xp-up");
let xpDown = document.getElementById("xp-down");
let healButton = document.getElementById("heal");
let damageButton = document.getElementById("damage");
let lootUp = document.getElementById("loot-up");
let lootDown = document.getElementById("loot-down");
let levelUp = document.getElementById("level-up");
let levelDown = document.getElementById("level-down");
let confirmLevel = document.getElementById("confirm-level");
let goBack = document.getElementById("go-back1");
let goBack2 = document.getElementById("go-back2");
let loseHandCard = document.getElementById("lose-hand-card");
let loseDiscardButton = document.getElementById("lose-discard-button2");

//play cards variables
let playCard1 = "";
let playCard2 = "";

//counters
let cardCount = 0;
let discardCount = 0;
let cardCounter = document.getElementById("card-counter");
let cardsInPlayCounter = 0;
let chooseCardsNumber = document.getElementById("choose-cards-number");
let health = 0;
let xpCount = 0;
let maxHealth = 0;
let levelCounter = document.getElementById("level-counter");
let levelCount = 1;
let trackerSize = 1;
let trackerSizeCounter = document.getElementById("tracker-size");
let card1TrackerCounter = 0;
let card2TrackerCounter = 0;
let card3TrackerCounter = 0;
let card4TrackerCounter = 0;
let card5TrackerCounter = 0;
let card6TrackerCounter = 0;
let numberOfActiveCards = 0;
let bearHealth = 0;
let bearMaxHealth = 0;
let lootCount = 0;

//characters
let brute = document.getElementById("brute");
let cragheart = document.getElementById("cragheart");
let mindthief = document.getElementById("mindthief");
let spellweaver = document.getElementById("spellweaver");
let scoundrel = document.getElementById("scoundrel");
let tinkerer = document.getElementById("tinkerer");
let beastTyrant = document.getElementById("beasttyrant");
let doomStalker = document.getElementById("doomstalker");
let nightshroud = document.getElementById("nightshroud");
let sawbones = document.getElementById("sawbones");
let summoner = document.getElementById("summoner");
let summoner = document.getElementById("sunkeeper");

//status effects
let poisoned = false;
let poisonedToken = document.getElementById("poisoned");
let wounded = false;
let woundedToken = document.getElementById("wounded");
let disarmed = false;
let disarmedToken = document.getElementById("disarmed");
let immobilized = false;
let immobilizedToken = document.getElementById("immobilized");
let stunned = false;
let stunnedToken = document.getElementById("stunned");
let muddled = false;
let muddledToken = document.getElementById("muddled");
let strengthened = false;
let strengthenedToken = document.getElementById("strengthened");
let invisible = false;
let invisibleToken = document.getElementById("invisible");
let bearPoisoned = false;
let bearPoisonedToken = document.getElementById("bear-poisoned");
let bearWounded = false;
let bearWoundedToken = document.getElementById("bear-wounded");
let bearDisarmed = false;
let bearDisarmedToken = document.getElementById("bear-disarmed");
let bearImmobilized = false;
let bearImmobilizedToken = document.getElementById("bear-immobilized");
let bearStunned = false;
let bearStunnedToken = document.getElementById("bear-stunned");
let bearMuddled = false;
let bearMuddledToken = document.getElementById("bear-muddled");
let bearStrengthened = false;
let bearStrengthenedToken = document.getElementById("bear-strengthened");
let bearInvisible = false;
let bearInvisibleToken = document.getElementById("bear-invisible");

let characterSelected = false;
let characterClass = '';
let healthArray= [];

var characterPortraits = document.querySelectorAll(".character");
for (var i = 0; i < characterPortraits.length; i++) {
  (function () {
    var characterPortrait = characterPortraits[i];
    characterPortrait.onclick = () => {
      if (!isSelected(characterPortrait) && !characterSelected) {
        characterSelected = true;
        characterPortrait.classList.add("character-selected");
        confirmCharacterButton.classList.remove("not-without-more-selected");
      } else if (!isSelected(characterPortrait) && characterSelected) {
        var charactersSelected = document.querySelectorAll(
          ".character-selected"
        );
        var selectedCharacter = charactersSelected[0];
        selectedCharacter.classList.remove("character-selected");
        characterPortrait.classList.add("character-selected");
      } else if (isSelected(characterPortrait) && characterSelected) {
        characterSelected = false;
        characterPortrait.classList.remove("character-selected");
        confirmCharacterButton.classList.add("not-without-more-selected");
      }
    };
  }.call(this, i));
}

// set card back images
// assigned after character selected
function setCardBacks(flippedCard) {
  var hand = document.querySelectorAll(".hand");
  for (var j = 0; j < hand.length; j++) {
    (function () {
      var handCardBack = hand[j];
      handCardBack.src = flippedCard;
    }.call(this, j));
  }
}

// set class cards, cookie, back facing card, and show perks
function customizeBasedOnClass(){
  flippedCard = "./"+classDirectory+"/"+classPrefix+"Back.png";
  setCookie("character", characterClass, 365);
  document.getElementById(characterClass+"-perks").classList.remove("hiding");

  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
      for (var i = 0; i < cardsToChooseFrom.length; i++) {
        (function () {
          var cardToChooseFrom = cardsToChooseFrom[i];
          if ((i > -1 && i < (handSize+3)) || i > 14) {
            cardToChooseFrom.innerHTML =
              "<img id ='" +
              `${cardToChooseFrom.id}` +
              "' class = 'chooseCards " +
              `${cardToChooseFrom.id}` +
              "' src = './"+ classDirectory + "/" +classPrefix + i +
              ".png' />";
          } else {
            cardToChooseFrom.innerHTML = "";
          }
        }.call(this, i));
      }
}

// Set health based and show cards available based on level
function customizeBasedOnLevel(){
  maxHealth = healthArray[levelCount-1];
  health = maxHealth;
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  for (var i = 13+(levelCount*2); i < cardsToChooseFrom.length; i++) {
    var cardToChooseFrom = cardsToChooseFrom[i];
    cardToChooseFrom.innerHTML = "";
  }
  var levelTitles = document.querySelectorAll(".level");
  for (var j = levelCount+2; j < levelTitles.length; j++) {
    var levelTitle = levelTitles[j];
    levelTitle.classList.add("hiding");
  }
}

function confirmCharacter() {
  if (characterSelected) {
    if (cragheart.classList.contains("character-selected")) {
        characterClass = "cragheart";
        classPrefix = "ch";
        handSize = 11;
        healthArray=[10,12,14,16,18,20,22,24,26];
        cardHand12.classList.add("hiding");
    } else if (brute.classList.contains("character-selected")) {
        characterClass = "brute";
        classPrefix = "br";
        handSize = 10;
        healthArray=[10,12,14,16,18,20,22,24,26];
        cardHand11.classList.add("hiding");
        cardHand12.classList.add("hiding");
    } else if (mindthief.classList.contains("character-selected")) {
        characterClass = "mindthief";
        classPrefix = "mt";
        handSize = 10;
        healthArray=[6,7,8,9,10,11,12,13,14];
        cardHand11.classList.add("hiding");
        cardHand12.classList.add("hiding");
    } else if (spellweaver.classList.contains("character-selected")) {
        characterClass="spellweaver";
        classPrefix = "sw";
        handSize = 8;
        healthArray=[6,7,8,9,10.11,12,13,14];
        cardHand9.classList.add("hiding");
        cardHand10.classList.add("hiding");
        cardHand11.classList.add("hiding");
        cardHand12.classList.add("hiding");
    } else if (scoundrel.classList.contains("character-selected")) {
        characterClass="scoundrel";
        classPrefix = "sc";
        handSize = 9;
        healthArray=[8,9,11,12,14,15,17,18,20];
        cardHand10.classList.add("hiding");
        cardHand11.classList.add("hiding");
        cardHand12.classList.add("hiding");
    } else if (tinkerer.classList.contains("character-selected")) {
        characterClass="tinkerer";
        classPrefix = "ti";
        handSize = 12;
        healthArray=[8,9,11,12,14,15,17,18,20];
    } else if (doomStalker.classList.contains("character-selected")) {
        characterClass="doomstalker";
        classPrefix = "ds";
        handSize = 12;
        healthArray=[8,9,11,12,14,15,17,18,20];
    } else if (beastTyrant.classList.contains("character-selected")) {
        characterClass="beasttyrant"
        classPrefix = "bt";
        handSize = 10;
        cardHand11.classList.add("hiding");
        cardHand12.classList.add("hiding");
        healthArray=[6,7,8,9,10,11,12,13,14]
        document.getElementById("bear-health").classList.remove("hiding");
        document.getElementById("bear-health-counter").classList.remove("hiding");
        document.getElementById("damage-bear").classList.remove("hiding");
        document.getElementById("heal-bear").classList.remove("hiding");
        document.getElementById("bear-status-effects").classList.remove("hiding");
    } else if (nightshroud.classList.contains("character-selected")) {
        characterClass="nightshroud";
        classPrefix = "ns";
        handSize = 9;
        healthArray=[8,9,11,12,14,15,17,18,20];
        cardHand10.classList.add("hiding");
        cardHand11.classList.add("hiding");
        cardHand12.classList.add("hiding");
    } else if (sawbones.classList.contains("character-selected")) {
        characterClass="sawbones";
        classPrefix = "sb";
        handSize = 10;
        healthArray=[8,9,11,12,14,15,17,18,20];
        cardHand11.classList.add("hiding");
        cardHand12.classList.add("hiding");
    } else if (summoner.classList.contains("character-selected")) {
        characterClass="summoner";
        classPrefix = "su";
        handSize = 9;
        healthArray=[8,9,11,12,14,15,17,18,20];
        cardHand10.classList.add("hiding");
        cardHand11.classList.add("hiding");
        cardHand12.classList.add("hiding");
    } else if (summoner.classList.contains("character-selected")) {
      characterClass="sunkeeper";
      classPrefix = "sk";
      handSize = 11;
      healthArray=[10,12,14,16,18,20,22,24,26];
      cardHand12.classList.add("hiding");
  }
    classDirectory=classPrefix.toUpperCase();
    customizeBasedOnClass();
    customizeBasedOnLevel();
    setCardBacks(flippedCard);
    goBack.classList.remove("hiding");
    document.getElementById("select-class-section").classList.add("hiding");
    document.getElementById("level-selection").classList.add("hiding");
    document.getElementById("perk-section").classList.remove("hiding");
    setCookie("level", `${levelCount}`, 365);
  }
}

confirmCharacterButton.onclick = () => {
  confirmCharacter();
};

//card selecting functions
var cards = document.querySelectorAll(".chooseCardsTable");
for (var i = 0; i < cards.length; i++) {
  (function () {
    var card = cards[i];
    card.onclick = function () {
      if (!isSelected(card.firstChild) && cardCount < handSize) {
        card.firstChild.classList.add("add-border");
        cardCount++;
        cardCounter.innerHTML = cardCount + "/" + handSize;
        if (cardCount === handSize) {
          confirmHandButton.classList.remove("not-without-more-selected");
        }
        if (cardHand1.classList.contains("flipped")) {
          cardHand1.src = card.firstChild.src;
          cardHand1.classList.remove("flipped");
          cardHand1.classList.add(`${this.id}`);
        } else if (cardHand2.classList.contains("flipped")) {
          cardHand2.src = card.firstChild.src;
          cardHand2.classList.remove("flipped");
          cardHand2.classList.add(`${this.id}`);
        } else if (cardHand3.classList.contains("flipped")) {
          cardHand3.src = card.firstChild.src;
          cardHand3.classList.remove("flipped");
          cardHand3.classList.add(`${this.id}`);
        } else if (cardHand4.classList.contains("flipped")) {
          cardHand4.src = card.firstChild.src;
          cardHand4.classList.remove("flipped");
          cardHand4.classList.add(`${this.id}`);
        } else if (cardHand5.classList.contains("flipped")) {
          cardHand5.src = card.firstChild.src;
          cardHand5.classList.remove("flipped");
          cardHand5.classList.add(`${this.id}`);
        } else if (cardHand6.classList.contains("flipped")) {
          cardHand6.src = card.firstChild.src;
          cardHand6.classList.remove("flipped");
          cardHand6.classList.add(`${this.id}`);
        } else if (cardHand7.classList.contains("flipped")) {
          cardHand7.src = card.firstChild.src;
          cardHand7.classList.remove("flipped");
          cardHand7.classList.add(`${this.id}`);
        } else if (cardHand8.classList.contains("flipped")) {
          cardHand8.src = card.firstChild.src;
          cardHand8.classList.remove("flipped");
          cardHand8.classList.add(`${this.id}`);
        } else if (cardHand9.classList.contains("flipped")) {
          cardHand9.src = card.firstChild.src;
          cardHand9.classList.remove("flipped");
          cardHand9.classList.add(`${this.id}`);
        } else if (cardHand10.classList.contains("flipped")) {
          cardHand10.src = card.firstChild.src;
          cardHand10.classList.remove("flipped");
          cardHand10.classList.add(`${this.id}`);
        } else if (cardHand11.classList.contains("flipped")) {
          cardHand11.src = card.firstChild.src;
          cardHand11.classList.remove("flipped");
          cardHand11.classList.add(`${this.id}`);
        } else if (cardHand12.classList.contains("flipped")) {
          cardHand12.src = card.firstChild.src;
          cardHand12.classList.remove("flipped");
          cardHand12.classList.add(`${this.id}`);
        }
      } else {
        card.firstChild.classList.remove("add-border");
        if (cardHand1.classList.contains(`${this.id}`)) {
          flipCard(cardHand1);
          cardHand1.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand2.classList.contains(`${this.id}`)) {
          flipCard(cardHand2);
          cardHand2.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand3.classList.contains(`${this.id}`)) {
          flipCard(cardHand3);
          cardHand3.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand4.classList.contains(`${this.id}`)) {
          flipCard(cardHand4);
          cardHand4.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand5.classList.contains(`${this.id}`)) {
          flipCard(cardHand5);
          cardHand5.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand6.classList.contains(`${this.id}`)) {
          flipCard(cardHand6);
          cardHand6.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand7.classList.contains(`${this.id}`)) {
          flipCard(cardHand7);
          cardHand7.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand8.classList.contains(`${this.id}`)) {
          flipCard(cardHand8);
          cardHand8.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand9.classList.contains(`${this.id}`)) {
          flipCard(cardHand9);
          cardHand9.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand10.classList.contains(`${this.id}`)) {
          flipCard(cardHand10);
          cardHand10.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand11.classList.contains(`${this.id}`)) {
          flipCard(cardHand11);
          cardHand11.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        } else if (cardHand12.classList.contains(`${this.id}`)) {
          flipCard(cardHand12);
          cardHand12.classList.remove("hiding");
          confirmHandButton.classList.add("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

const isSelected = (card) => {
  if (
    card.classList.contains("add-border") ||
    card.classList.contains("discard-selected") ||
    card.classList.contains("lost-selected") ||
    card.classList.contains("active-selected") ||
    card.classList.contains("character-selected")
  ) {
    return true;
  } else {
    return false;
  }
};

const isFlipped = (card) => {
  if (card.classList.contains("flipped")) {
    return true;
  } else {
    return false;
  }
};

const flipCard = (card) => {
  card.src = flippedCard;
  card.className = "";
  card.classList.add("flipped");
  card.classList.add("hand");
  card.classList.add("hiding");
  if (!handChosen) {
    cardCount--;
    cardCounter.innerHTML = cardCount + "/" + handSize;
  }
};

const getCard1 = (card) => {
  playCard1 = card.src;
  flipCard(card);
};

const getCard2 = (card) => {
  playCard2 = card.src;
  flipCard(card);
};

const flipChosenCard = (card) => {
  card.src = flippedCard;
  card.className = "";
  card.classList.add("flipped");
  card.classList.add("card-in-play");
};

const flipDiscard = (card) => {
  card.src = flippedCard;
  card.className = "";
  card.classList.add("flipped");
  card.classList.add("discarded");
  card.classList.add("hiding");
};

const flipActive = (card) => {
  card.src = flippedCard;
  card.className = "";
  card.classList.add("flipped");
  card.classList.add("active-card");
  card.classList.add("hiding");
};

const flipLost = (card) => {
  card.src = flippedCard;
  card.className = "";
  card.classList.add("flipped");
  card.classList.add("lost");
  card.classList.add("hiding");
};

//Confirm button variables and function
let confirmHandButton = document.getElementById("confirm-hand");
let initialTable = document.getElementById("initial-table");
let handChosen = false;
let blessesInDeck = document.getElementById("blessesInDeck");
let cursesInDeck = document.getElementById("cursesInDeck");

confirmHandButton.onclick = () => {
  if (cardCount === handSize) {
    initialTable.parentNode.removeChild(initialTable);
    document.getElementById("play-game").className = "visible";
    document
      .getElementById("chosen-cards-title")
      .setAttribute("style", "border: 1px solid white; text-align:center");
    document
      .getElementById("active-cards-title")
      .setAttribute("style", "border: 1px solid white; text-align:center");
    document
      .getElementById("discarded-cards-title")
      .setAttribute("style", "border: 1px solid white; text-align:center");
    document
      .getElementById("lost-cards-title")
      .setAttribute("style", "border: 1px solid white; text-align:center");
    confirmHandButton.classList.add("hiding");
    goBack.classList.add("hiding");
    goBack2.classList.add("hiding");
    playCardsButton.classList.remove("hiding");
    playCardsButton.classList.add("visible");
    cardCount = 0;
    handChosen = true;
    cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
    longRestButton.classList.add("not-without-more-cards");
    shortRestButton.classList.add("not-without-more-cards");
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
    loseCardFromRestButton.classList.add("not-unless-resting");
    rerollShortRestButton.classList.add("not-unless-resting");
    recoverDiscardButton.classList.add("not-without-more-selected");
    recoverLostCardButton.classList.add("not-without-more-selected");
    playCardsButton.classList.add("not-without-more-cards");
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
    healButton.classList.add("at-max");
    xpDown.classList.add("at-min");
    decreaseTrackerSize.classList.add("at-min");
    loseHandCard.classList.remove("hiding");
    shuffleDeck();
  }
};

//function for clicking Hand
var hand = document.querySelectorAll(".hand");
for (var i = 0; i < hand.length; i++) {
  (function () {
    var handCard = hand[i];
    handCard.onclick = function () {
      if (
        isFlipped(chosenCard1) &&
        isFlipped(chosenCard2) &&
        mustLoseCount < 1
      ) {
        if (
          !isSelected(handCard) &&
          handChosen === true &&
          cardCount < 2 &&
          !isFlipped(handCard)
        ) {
          handCard.classList.add("add-border");
          cardCount++;
          if (cardCount === 2) {
            playCardsButton.classList.remove("not-without-more-cards");
            loseHandCard.classList.add("not-without-more-selected");
          } else if (cardCount === 1) {
            loseHandCard.classList.remove("not-without-more-selected");
          }
        } else if (isSelected(handCard)) {
          handCard.classList.remove("add-border");
          cardCount--;
          playCardsButton.classList.add("not-without-more-cards");
          if (cardCount === 1) {
            loseHandCard.classList.remove("not-without-more-selected");
          } else if (cardCount === 0) {
            loseHandCard.classList.add("not-without-more-selected");
          }
        }
      } else {
        if (
          !isSelected(handCard) &&
          handChosen === true &&
          cardCount < 1 &&
          !isFlipped(handCard)
        ) {
          handCard.classList.add("add-border");
          cardCount++;
          loseHandCard.classList.remove("not-without-more-selected");
        } else if (
          !isSelected(handCard) &&
          handChosen === true &&
          cardCount === 1
        ) {
          for (var j = 0; j < hand.length; j++) {
            if (hand[j].classList.contains("add-border")) {
              hand[j].classList.remove("add-border");
              j = hand.length;
            }
          }
          handCard.classList.add("add-border");
        } else if (isSelected(handCard)) {
          handCard.classList.remove("add-border");
          cardCount--;
          loseHandCard.classList.add("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

playCardsButton.onclick = () => {
  //document.getElementById("hand-cards").style.backgroundColor = "red";
  if (cardCount === 2 && mustLoseCount < 1 && !shortResting && !longResting) {
    if (cardHand1.classList.contains("add-border")) {
      getCard1(cardHand1);
    } else if (cardHand2.classList.contains("add-border")) {
      getCard1(cardHand2);
    } else if (cardHand3.classList.contains("add-border")) {
      getCard1(cardHand3);
    } else if (cardHand4.classList.contains("add-border")) {
      getCard1(cardHand4);
    } else if (cardHand5.classList.contains("add-border")) {
      getCard1(cardHand5);
    } else if (cardHand6.classList.contains("add-border")) {
      getCard1(cardHand6);
    } else if (cardHand7.classList.contains("add-border")) {
      getCard1(cardHand7);
    } else if (cardHand8.classList.contains("add-border")) {
      getCard1(cardHand8);
    } else if (cardHand9.classList.contains("add-border")) {
      getCard1(cardHand9);
    } else if (cardHand10.classList.contains("add-border")) {
      getCard1(cardHand10);
    } else if (cardHand11.classList.contains("add-border")) {
      getCard1(cardHand11);
    }
    if (cardHand2.classList.contains("add-border")) {
      getCard2(cardHand2);
    } else if (cardHand3.classList.contains("add-border")) {
      getCard2(cardHand3);
    } else if (cardHand4.classList.contains("add-border")) {
      getCard2(cardHand4);
    } else if (cardHand5.classList.contains("add-border")) {
      getCard2(cardHand5);
    } else if (cardHand6.classList.contains("add-border")) {
      getCard2(cardHand6);
    } else if (cardHand7.classList.contains("add-border")) {
      getCard2(cardHand7);
    } else if (cardHand8.classList.contains("add-border")) {
      getCard2(cardHand8);
    } else if (cardHand9.classList.contains("add-border")) {
      getCard2(cardHand9);
    } else if (cardHand10.classList.contains("add-border")) {
      getCard2(cardHand10);
    } else if (cardHand11.classList.contains("add-border")) {
      getCard2(cardHand11);
    } else if (cardHand12.classList.contains("add-border")) {
      getCard2(cardHand12);
    }
    cardCount = 0;
    chosenCard1.src = playCard1;
    chosenCard1.classList.remove("flipped");
    chosenCard2.src = playCard2;
    chosenCard2.classList.remove("flipped");
    cardsInPlayCounter = 2;
    shortRestButton.classList.add("not-while-in-play");
    longRestButton.classList.add("not-while-in-play");
    loseCardFromRestButton.classList.add("not-while-in-play");
    rerollShortRestButton.classList.add("not-while-in-play");
    playCardsButton.classList.add("not-without-more-cards");
  }
};

let chosenCard1 = document.getElementById("chosen-card-1");
let chosenCard2 = document.getElementById("chosen-card-2");
let chosenCounter = 0;
chosenCard1.onclick = () => {
  if (
    chosenCounter < 1 &&
    !isSelected(chosenCard1) &&
    !isFlipped(chosenCard1) &&
    mustLoseCount < 1
  ) {
    chosenCard1.classList.add("add-border");
    chosenCounter++;
    discardButton.classList.remove("not-without-more-selected");
    loseButton.classList.remove("not-without-more-selected");
    activateButton.classList.remove("not-without-more-selected");
  } else if (chosenCounter === 1 && isSelected(chosenCard1)) {
    chosenCard1.classList.remove("add-border");
    chosenCounter--;
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  } else if (
    chosenCounter == 1 &&
    !isSelected(chosenCard1) &&
    !isFlipped(chosenCard1)
  ) {
    chosenCard2.classList.remove("add-border");
    chosenCard1.classList.add("add-border");
  }
};

chosenCard2.onclick = () => {
  if (
    chosenCounter < 1 &&
    !isSelected(chosenCard2) &&
    !isFlipped(chosenCard2) &&
    mustLoseCount < 1
  ) {
    chosenCard2.classList.add("add-border");
    chosenCounter++;
    discardButton.classList.remove("not-without-more-selected");
    loseButton.classList.remove("not-without-more-selected");
    activateButton.classList.remove("not-without-more-selected");
  } else if (chosenCounter == 1 && isSelected(chosenCard2)) {
    chosenCard2.classList.remove("add-border");
    chosenCounter--;
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  } else if (
    chosenCounter == 1 &&
    !isSelected(chosenCard2) &&
    !isFlipped(chosenCard2)
  ) {
    chosenCard1.classList.remove("add-border");
    chosenCard2.classList.add("add-border");
  }
};

discardButton.onclick = () => {
  if (chosenCard1.classList.contains("add-border") && mustLoseCount < 1) {
    if (discard1.classList.contains("flipped")) {
      discard1.src = chosenCard1.src;
      discard1.classList.remove("hiding");
      discard1.classList.remove("flipped");
    } else if (discard2.classList.contains("flipped")) {
      discard2.src = chosenCard1.src;
      discard2.classList.remove("hiding");
      discard2.classList.remove("flipped");
    } else if (discard3.classList.contains("flipped")) {
      discard3.src = chosenCard1.src;
      discard3.classList.remove("hiding");
      discard3.classList.remove("flipped");
    } else if (discard4.classList.contains("flipped")) {
      discard4.src = chosenCard1.src;
      discard4.classList.remove("hiding");
      discard4.classList.remove("flipped");
    } else if (discard5.classList.contains("flipped")) {
      discard5.src = chosenCard1.src;
      discard5.classList.remove("hiding");
      discard5.classList.remove("flipped");
    } else if (discard6.classList.contains("flipped")) {
      discard6.src = chosenCard1.src;
      discard6.classList.remove("hiding");
      discard6.classList.remove("flipped");
    } else if (discard7.classList.contains("flipped")) {
      discard7.src = chosenCard1.src;
      discard7.classList.remove("hiding");
      discard7.classList.remove("flipped");
    } else if (discard8.classList.contains("flipped")) {
      discard8.src = chosenCard1.src;
      discard8.classList.remove("hiding");
      discard8.classList.remove("flipped");
    } else if (discard9.classList.contains("flipped")) {
      discard9.src = chosenCard1.src;
      discard9.classList.remove("hiding");
      discard9.classList.remove("flipped");
    } else if (discard10.classList.contains("flipped")) {
      discard10.src = chosenCard1.src;
      discard10.classList.remove("hiding");
      discard10.classList.remove("flipped");
    } else if (discard11.classList.contains("flipped")) {
      discard11.src = chosenCard1.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped");
    } else if (discard12.classList.contains("flipped")) {
      discard12.src = chosenCard1.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped");
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    discardCount++;
    cardsInPlayCounter--;
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
    if (discardCount > 1) {
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  }
  if (chosenCard2.classList.contains("add-border") && mustLoseCount < 1) {
    if (discard1.classList.contains("flipped")) {
      discard1.src = chosenCard2.src;
      discard1.classList.remove("hiding");
      discard1.classList.remove("flipped");
    } else if (discard2.classList.contains("flipped")) {
      discard2.src = chosenCard2.src;
      discard2.classList.remove("hiding");
      discard2.classList.remove("flipped");
    } else if (discard3.classList.contains("flipped")) {
      discard3.src = chosenCard2.src;
      discard3.classList.remove("hiding");
      discard3.classList.remove("flipped");
    } else if (discard4.classList.contains("flipped")) {
      discard4.src = chosenCard2.src;
      discard4.classList.remove("hiding");
      discard4.classList.remove("flipped");
    } else if (discard5.classList.contains("flipped")) {
      discard5.src = chosenCard2.src;
      discard5.classList.remove("hiding");
      discard5.classList.remove("flipped");
    } else if (discard6.classList.contains("flipped")) {
      discard6.src = chosenCard2.src;
      discard6.classList.remove("hiding");
      discard6.classList.remove("flipped");
    } else if (discard7.classList.contains("flipped")) {
      discard7.src = chosenCard2.src;
      discard7.classList.remove("hiding");
      discard7.classList.remove("flipped");
    } else if (discard8.classList.contains("flipped")) {
      discard8.src = chosenCard2.src;
      discard8.classList.remove("hiding");
      discard8.classList.remove("flipped");
    } else if (discard9.classList.contains("flipped")) {
      discard9.src = chosenCard2.src;
      discard9.classList.remove("hiding");
      discard9.classList.remove("flipped");
    } else if (discard10.classList.contains("flipped")) {
      discard10.src = chosenCard2.src;
      discard10.classList.remove("hiding");
      discard10.classList.remove("flipped");
    } else if (discard11.classList.contains("flipped")) {
      discard11.src = chosenCard2.src;
      discard11.classList.remove("hiding");
      discard11.classList.remove("flipped");
    } else if (discard12.classList.contains("flipped")) {
      discard12.src = chosenCard2.src;
      discard12.classList.remove("hiding");
      discard12.classList.remove("flipped");
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    discardCount++;
    cardsInPlayCounter--;
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
    }
    if (discardCount > 1) {
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardButton.classList.add("not-without-more-selected");
    loseButton.classList.add("not-without-more-selected");
    activateButton.classList.add("not-without-more-selected");
  }
};

loseButton.onclick = () => {
  if (chosenCard1.classList.contains("add-border") && mustLoseCount < 1) {
    if (lost1.classList.contains("flipped")) {
      lost1.src = chosenCard1.src;
      lost1.classList.remove("hiding");
      lost1.classList.remove("flipped");
    } else if (lost2.classList.contains("flipped")) {
      lost2.src = chosenCard1.src;
      lost2.classList.remove("hiding");
      lost2.classList.remove("flipped");
    } else if (lost3.classList.contains("flipped")) {
      lost3.src = chosenCard1.src;
      lost3.classList.remove("hiding");
      lost3.classList.remove("flipped");
    } else if (lost4.classList.contains("flipped")) {
      lost4.src = chosenCard1.src;
      lost4.classList.remove("hiding");
      lost4.classList.remove("flipped");
    } else if (lost5.classList.contains("flipped")) {
      lost5.src = chosenCard1.src;
      lost5.classList.remove("hiding");
      lost5.classList.remove("flipped");
    } else if (lost6.classList.contains("flipped")) {
      lost6.src = chosenCard1.src;
      lost6.classList.remove("hiding");
      lost6.classList.remove("flipped");
    } else if (lost7.classList.contains("flipped")) {
      lost7.src = chosenCard1.src;
      lost7.classList.remove("hiding");
      lost7.classList.remove("flipped");
    } else if (lost8.classList.contains("flipped")) {
      lost8.src = chosenCard1.src;
      lost8.classList.remove("hiding");
      lost8.classList.remove("flipped");
    } else if (lost9.classList.contains("flipped")) {
      lost9.src = chosenCard1.src;
      lost9.classList.remove("hiding");
      lost9.classList.remove("flipped");
    } else if (lost10.classList.contains("flipped")) {
      lost10.src = chosenCard1.src;
      lost10.classList.remove("hiding");
      lost10.classList.remove("flipped");
    } else if (lost11.classList.contains("flipped")) {
      lost11.src = chosenCard1.src;
      lost11.classList.remove("hiding");
      lost11.classList.remove("flipped");
    } else if (lost12.classList.contains("flipped")) {
      lost12.src = chosenCard1.src;
      lost12.classList.remove("hiding");
      lost12.classList.remove("flipped");
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    cardsInPlayCounter--;
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
  if (chosenCard2.classList.contains("add-border") && mustLoseCount < 1) {
    if (lost1.classList.contains("flipped")) {
      lost1.src = chosenCard2.src;
      lost1.classList.remove("hiding");
      lost1.classList.remove("flipped");
    } else if (lost2.classList.contains("flipped")) {
      lost2.src = chosenCard2.src;
      lost2.classList.remove("hiding");
      lost2.classList.remove("flipped");
    } else if (lost3.classList.contains("flipped")) {
      lost3.src = chosenCard2.src;
      lost3.classList.remove("hiding");
      lost3.classList.remove("flipped");
    } else if (lost4.classList.contains("flipped")) {
      lost4.src = chosenCard2.src;
      lost4.classList.remove("hiding");
      lost4.classList.remove("flipped");
    } else if (lost5.classList.contains("flipped")) {
      lost5.src = chosenCard2.src;
      lost5.classList.remove("hiding");
      lost5.classList.remove("flipped");
    } else if (lost6.classList.contains("flipped")) {
      lost6.src = chosenCard2.src;
      lost6.classList.remove("hiding");
      lost6.classList.remove("flipped");
    } else if (lost7.classList.contains("flipped")) {
      lost7.src = chosenCard2.src;
      lost7.classList.remove("hiding");
      lost7.classList.remove("flipped");
    } else if (lost8.classList.contains("flipped")) {
      lost8.src = chosenCard2.src;
      lost8.classList.remove("hiding");
      lost8.classList.remove("flipped");
    } else if (lost9.classList.contains("flipped")) {
      lost9.src = chosenCard2.src;
      lost9.classList.remove("hiding");
      lost9.classList.remove("flipped");
    } else if (lost10.classList.contains("flipped")) {
      lost10.src = chosenCard2.src;
      lost10.classList.remove("hiding");
      lost10.classList.remove("flipped");
    } else if (lost11.classList.contains("flipped")) {
      lost11.src = chosenCard2.src;
      lost11.classList.remove("hiding");
      lost11.classList.remove("flipped");
    } else if (lost12.classList.contains("flipped")) {
      lost12.src = chosenCard2.src;
      lost12.classList.remove("hiding");
      lost12.classList.remove("flipped");
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    cardsInPlayCounter--;
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
};

activateButton.onclick = () => {
  if (
    chosenCard1.classList.contains("add-border") &&
    mustLoseCount < 1 &&
    numberOfActiveCards < 6
  ) {
    if (active1.classList.contains("flipped")) {
      active1.src = chosenCard1.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active2.classList.contains("flipped")) {
      active2.src = chosenCard1.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active3.classList.contains("flipped")) {
      active3.src = chosenCard1.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active4.classList.contains("flipped")) {
      active4.src = chosenCard1.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active5.classList.contains("flipped")) {
      active5.src = chosenCard1.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active6.classList.contains("flipped")) {
      active6.src = chosenCard1.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped");
      numberOfActiveCards++;
    }
    flipChosenCard(chosenCard1);
    chosenCounter--;
    cardsInPlayCounter--;
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
  if (
    chosenCard2.classList.contains("add-border") &&
    mustLoseCount < 1 &&
    numberOfActiveCards < 6
  ) {
    if (active1.classList.contains("flipped")) {
      active1.src = chosenCard2.src;
      active1.classList.remove("hiding");
      active1.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active2.classList.contains("flipped")) {
      active2.src = chosenCard2.src;
      active2.classList.remove("hiding");
      active2.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active3.classList.contains("flipped")) {
      active3.src = chosenCard2.src;
      active3.classList.remove("hiding");
      active3.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active4.classList.contains("flipped")) {
      active4.src = chosenCard2.src;
      active4.classList.remove("hiding");
      active4.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active5.classList.contains("flipped")) {
      active5.src = chosenCard2.src;
      active5.classList.remove("hiding");
      active5.classList.remove("flipped");
      numberOfActiveCards++;
    } else if (active6.classList.contains("flipped")) {
      active6.src = chosenCard2.src;
      active6.classList.remove("hiding");
      active6.classList.remove("flipped");
      numberOfActiveCards++;
    }
    flipChosenCard(chosenCard2);
    chosenCounter--;
    cardsInPlayCounter--;
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove("not-while-in-play");
      longRestButton.classList.remove("not-while-in-play");
      loseCardFromRestButton.classList.remove("not-while-in-play");
      rerollShortRestButton.classList.remove("not-while-in-play");
      discardButton.classList.add("not-without-more-selected");
      loseButton.classList.add("not-without-more-selected");
      activateButton.classList.add("not-without-more-selected");
    }
  }
};

let discardsSelected = 0;
var discards = document.querySelectorAll(".discarded");
for (var i = 0; i < discards.length; i++) {
  (function () {
    var discardedCard = discards[i];
    discardedCard.onclick = function () {
      if (
        !isSelected(discardedCard) &&
        mustLoseCount < 1 &&
        discardsSelected === 0
      ) {
        discardedCard.classList.add("discard-selected");
        discardsSelected++;
        loseDiscardButton.classList.remove("not-without-more-selected");
        if (longResting) {
          loseCardFromRestButton.classList.remove("not-unless-resting");
        } else {
          recoverDiscardButton.classList.remove("not-without-more-selected");
        }
      } else if (!isSelected(discardedCard) && discardsSelected === 1) {
        var selectedDiscardedCards = document.querySelectorAll(
          ".discard-selected"
        );
        var selectedDiscardedCard = selectedDiscardedCards[0];
        selectedDiscardedCard.classList.remove("discard-selected");
        discardedCard.classList.add("discard-selected");
      } else if (isSelected(discardedCard) && discardsSelected === 1) {
        discardedCard.classList.remove("discard-selected");
        discardsSelected--;
        loseDiscardButton.classList.add("not-without-more-selected");
        if (longResting) {
          loseCardFromRestButton.classList.add("not-unless-resting");
        } else {
          recoverDiscardButton.classList.add("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

let lostSelectedCounter = 0;
var lostCards = document.querySelectorAll(".lost");
for (var i = 0; i < lostCards.length; i++) {
  (function () {
    var lostCard = lostCards[i];
    lostCard.onclick = function () {
      if (!isSelected(lostCard) && lostSelectedCounter === 0) {
        lostCard.classList.add("lost-selected");
        lostSelectedCounter++;
        recoverLostCardButton.classList.remove("not-without-more-selected");
      } else if (!isSelected(lostCard) && lostSelectedCounter === 1) {
        var selectedLostCards = document.querySelectorAll(".lost-selected");
        var selectedLostCard = selectedLostCards[0];
        selectedLostCard.classList.remove("lost-selected");
        lostCard.classList.add("lost-selected");
      } else {
        lostCard.classList.remove("lost-selected");
        lostSelectedCounter--;
        recoverLostCardButton.classList.add("not-without-more-selected");
      }
    };
  }.call(this, i));
}

let activesSelected = 0;
var actives = document.querySelectorAll(".active-card");
for (var i = 0; i < actives.length; i++) {
  (function () {
    var activeCard = actives[i];
    activeCard.onclick = function () {
      if (!isSelected(activeCard) && activesSelected === 0) {
        activeCard.classList.add("active-selected");
        activesSelected++;
        discardActiveCardButton.className = "button";
        loseActiveCardButton.className = "button";
        createActiveTracker.className = "button";
        if (activeCard.classList.contains("has-tracker")) {
          createActiveTracker.classList.add("not-without-more-selected");
        }
      } else if (!isSelected(activeCard) && activesSelected === 1) {
        var activeCardsSelected = document.querySelectorAll(".active-selected");
        var activeCardSelected = activeCardsSelected[0];
        activeCard.classList.add("active-selected");
        activeCardSelected.classList.remove("active-selected");
        discardActiveCardButton.classList.remove("not-without-more-selected");
        loseActiveCardButton.classList.remove("not-without-more-selected");
        createActiveTracker.classList.remove("not-without-more-selected");
        if (activeCard.classList.contains("has-tracker")) {
          createActiveTracker.classList.add("not-without-more-selected");
        }
      } else {
        activeCard.classList.remove("active-selected");
        activesSelected--;
        discardActiveCardButton.classList.add("not-without-more-selected");
        loseActiveCardButton.classList.add("not-without-more-selected");
        createActiveTracker.classList.add("not-without-more-selected");
      }
    };
  }.call(this, i));
}

const shortRestLoop = (card) => {
  if (!card.classList.contains("flipped")) {
    card.classList.add("must-lose");
    card.insertAdjacentHTML(
      "afterend",
      "<br/><p class = 'must-lose'>Must Lose</p>"
    );
    mustLoseCount++;
  }
};

let mustLose = false;
let shortResting = false;
let mustLoseCount = 0;
shortRestButton.onclick = () => {
  if (
    mustLoseCount === 0 &&
    discardCount > 1 &&
    cardsInPlayCounter === 0 &&
    !longResting &&
    !shortResting
  ) {
    playCardsButton.classList.add("not-while-resting");
    shortRestButton.classList.add("not-while-resting");
    longRestButton.classList.add("not-while-resting");
    loseCardFromRestButton.classList.remove("not-unless-resting");
    rerollShortRestButton.classList.remove("not-unless-resting");
    recoverDiscardButton.classList.add("not-without-more-selected");
    loseDiscardButton.classList.add("not-without-more-selected");
    mustLose = true;
    shortResting = true;
    var discardedCards = document.querySelectorAll(".discarded");
    for (var i = 0; i < discardedCards.length; i++) {
      var discardedCard = discardedCards[i];
      (function () {
        discardedCard.classList.remove("discard-selected");
      }.call(this, i));
    }
    let randomCard = Math.floor(Math.random() * discardCount);
    switch (randomCard) {
      case 0:
        for (var i = 0; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 1:
        for (var i = 1; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 2:
        for (var i = 2; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 3:
        for (var i = 3; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 4:
        for (var i = 4; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 5:
        for (var i = 5; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 6:
        for (var i = 6; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 7:
        for (var i = 7; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 8:
        for (var i = 8; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 9:
        for (var i = 9; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 10:
        for (var i = 10; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 11:
        for (var i = 11; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
    }
  }
};

loseCardFromRestButton.onclick = () => {
  if (mustLoseCount > 0 && mustLose && shortResting) {
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    rerollShortRestButton.classList.remove("can-only-do-once");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    rerollShortRestButton.classList.add("not-unless-resting");
    loseDiscardButton.classList.add("not-without-more-selected");
    mustLose = false;
    shortResting = false;
    var mustLoseCards = document.querySelectorAll(".must-lose");
    var mustLoseCard = mustLoseCards[0];
    (function () {
      for (var i = 0; i < lostCards.length; i++) {
        var lostCard1 = lostCards[i];
        if (lostCard1.classList.contains("flipped")) {
          lostCard1.classList.remove("flipped");
          lostCard1.classList.remove("hiding");
          lostCard1.src = mustLoseCard.src;
          i = lostCards.length;
        }
      }
    }.call(this, i));
    mustLoseCount = 0;
    discardCount = 0;
    discardsSelected = 0;
    mustLoseCard.nextSibling.remove();
    mustLoseCard.nextSibling.remove();
    flipDiscard(mustLoseCard);
    var discardedCards = document.querySelectorAll(".discarded");
    var cardsInHand = document.querySelectorAll(".hand");
    for (var j = 0; j < discardedCards.length; j++) {
      (function () {
        var discardedCard = discardedCards[j];
        if (!discardedCard.classList.contains("flipped")) {
          for (var k = 0; k < cardsInHand.length; k++) {
            (function () {
              var cardInHand = cardsInHand[k];
              if (cardInHand.classList.contains("flipped")) {
                cardInHand.src = discardedCard.src;
                cardInHand.classList.remove("flipped");
                cardInHand.classList.remove("hiding");
                flipDiscard(discardedCard);
                k = cardsInHand.length;
              }
            }.call(this, k));
          }
        }
      }.call(this, j));
    }
  } else if (longResting && discardsSelected === 1) {
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    loseDiscardButton.classList.add("not-without-more-selected");
    longResting = false;
    mustLose = false;
    var selectedDiscards = document.querySelectorAll(".discard-selected");
    var selectedDiscard = selectedDiscards[0];
    selectedDiscard.classList.remove("discard-selected");
    discardsSelected = 0;
    (function () {
      for (var i = 0; i < lostCards.length; i++) {
        var lostCard1 = lostCards[i];
        if (lostCard1.classList.contains("flipped")) {
          lostCard1.classList.remove("flipped");
          lostCard1.classList.remove("hiding");
          lostCard1.src = selectedDiscard.src;
          i = lostCards.length;
        }
      }
    }.call(this, i));
    discardCount = 0;
    Element.prototype.remove = function () {
      this.parentElement.removeChild(this);
    };
    document.getElementById("choose-to-lose").remove();
    flipDiscard(selectedDiscard);
    var discardedCards = document.querySelectorAll(".discarded");
    var cardsInHand = document.querySelectorAll(".hand");
    for (var j = 0; j < discardedCards.length; j++) {
      (function () {
        var discardedCard = discardedCards[j];
        if (!discardedCard.classList.contains("flipped")) {
          for (var k = 0; k < cardsInHand.length; k++) {
            (function () {
              var cardInHand = cardsInHand[k];
              if (cardInHand.classList.contains("flipped")) {
                cardInHand.src = discardedCard.src;
                cardInHand.classList.remove("flipped");
                cardInHand.classList.remove("hiding");
                flipDiscard(discardedCard);
                k = cardsInHand.length;
              }
            }.call(this, k));
          }
        }
      }.call(this, j));
    }
    if (poisoned) {
      poisoned = false;
      poisonedToken.classList.add("hiding");
      healButton.classList.remove("poisoned");
      wounded = false;
      woundedToken.classList.add("hiding");
    } else if (health < maxHealth) {
      health = health + 2;
      healthCounter.innerHTML = health + "/" + maxHealth;
      wounded = false;
      woundedToken.classList.add("hiding");
      if (health > maxHealth) {
        health = maxHealth;
        healthCounter.innerHTML = health + "/" + maxHealth;
      }
    }
  }
};

rerollShortRestButton.onclick = () => {
  if (mustLoseCount === 1) {
    rerollShortRestButton.classList.add("can-only-do-once");
    health--;
    healButton.classList.remove("at-max");
    healthCounter.innerHTML = health + "/" + maxHealth;
    var discardedCards = document.querySelectorAll(".discarded");
    for (var i = 0; i < discardedCards.length; i++) {
      var discardedCard = discardedCards[i];
      (function () {
        discardedCard.classList.remove("discard-selected");
        if (discardedCard.classList.contains("must-lose")) {
          discardedCard.classList.add("unloseable");
          i = discardedCards.length;
          discardedCard.classList.remove("must-lose");
          discardedCard.nextSibling.remove();
          discardedCard.nextSibling.remove();
        }
      }.call(this, i));
    }
    var randomCard2 = Math.floor(Math.random() * discardCount);
    var unloseable = document.querySelectorAll(".unloseable");
    var unloseableCard = unloseable[0];
    unloseableCard.classList.remove("unloseable");
    while (unloseableCard === discardedCards[randomCard2]) {
      randomCard2 = Math.floor(Math.random() * discardCount);
    }
    switch (randomCard2) {
      case 0:
        for (var i = 0; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 1:
        for (var i = 1; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 2:
        for (var i = 2; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 3:
        for (var i = 3; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 4:
        for (var i = 4; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 5:
        for (var i = 5; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 6:
        for (var i = 6; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 7:
        for (var i = 7; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 8:
        for (var i = 8; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 9:
        for (var i = 9; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 10:
        for (var i = 10; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
      case 11:
        for (var i = 11; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i];
          shortRestLoop(discardedCard);
          i = discardedCards.length;
        }
        break;
    }
  }
};

let longResting = false;
longRestButton.onclick = () => {
  if (
    discardCount > 1 &&
    mustLoseCount === 0 &&
    cardsInPlayCounter === 0 &&
    !shortResting &&
    !longResting
  ) {
    document
      .getElementById("discard-table")
      .insertAdjacentHTML(
        "beforebegin",
        "<p id = 'choose-to-lose'>Choose One Card to Lose</p><br/>"
      );
    playCardsButton.classList.add("not-while-resting");
    shortRestButton.classList.add("not-while-resting");
    longRestButton.classList.add("not-while-resting");
    recoverDiscardButton.classList.add("not-without-more-selected");
    mustLose = true;
    longResting = true;
    if (discardsSelected === 1) {
      loseCardFromRestButton.classList.remove("not-unless-resting");
    }
  }
};

recoverDiscardButton.onclick = () => {
  if (!shortResting && !longResting && !mustLose && discardsSelected > 0) {
    discardsSelected = 0;
    discardCount--;
    recoverDiscardButton.classList.add("not-without-more-selected");
    loseDiscardButton.classList.add("not-without-more-selected");
    var selectedDiscards = document.querySelectorAll(".discard-selected");
    var selectedDiscard = selectedDiscards[0];
    selectedDiscard.classList.remove("discard-selected");
    var cardsInHand = document.querySelectorAll(".hand");
    for (var i = 0; i < cardsInHand.length; i++) {
      (function () {
        var cardInHand = cardsInHand[i];
        if (cardInHand.classList.contains("flipped")) {
          cardInHand.src = selectedDiscard.src;
          cardInHand.classList.remove("flipped");
          cardInHand.classList.remove("hiding");
          flipDiscard(selectedDiscard);
          i = cardsInHand.length;
        }
      }.call(this, i));
    }
    if (discardCount < 2) {
      shortRestButton.classList.add("not-without-more-cards");
      longRestButton.classList.add("not-without-more-cards");
    }
  }
};

discardActiveCardButton.onclick = () => {
  if (!mustLose && activesSelected === 1) {
    var activeCardsSelected = document.querySelectorAll(".active-selected");
    var activeCardSelected = activeCardsSelected[0];
    for (var i = 0; i < discards.length; i++) {
      var discardedCard = discards[i];
      if (discardedCard.classList.contains("flipped")) {
        discardedCard.src = activeCardSelected.src;
        discardedCard.classList.remove("flipped");
        discardedCard.classList.remove("hiding");
        i = discards.length;
        flipActive(activeCardSelected);
        activesSelected = 0;
        numberOfActiveCards--;
        discardCount++;
      }
    }
    if (discardCount > 1) {
      shortRestButton.classList.remove("not-without-more-cards");
      longRestButton.classList.remove("not-without-more-cards");
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
  }
};

loseActiveCardButton.onclick = () => {
  if (activesSelected === 1) {
    var activeCardsSelected = document.querySelectorAll(".active-selected");
    var activeCardSelected = activeCardsSelected[0];
    for (var i = 0; i < lostCards.length; i++) {
      var lostCard = lostCards[i];
      if (lostCard.classList.contains("flipped")) {
        lostCard.src = activeCardSelected.src;
        lostCard.classList.remove("flipped");
        lostCard.classList.remove("hiding");
        i = lostCards.length;
        flipActive(activeCardSelected);
        activesSelected = 0;
        numberOfActiveCards--;
      }
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
  }
};

recoverLostCardButton.onclick = () => {
  if (!shortResting && !longResting && !mustLose && lostSelectedCounter > 0) {
    lostSelectedCounter = 0;
    var selectedLostCards = document.querySelectorAll(".lost-selected");
    var selectedLostCard = selectedLostCards[0];
    recoverLostCardButton.classList.add("not-without-more-selected");
    selectedLostCard.classList.remove("lost-selected");
    var cardsInHand = document.querySelectorAll(".hand");
    for (var i = 0; i < cardsInHand.length; i++) {
      (function () {
        var cardInHand = cardsInHand[i];
        if (cardInHand.classList.contains("flipped")) {
          cardInHand.src = selectedLostCard.src;
          cardInHand.classList.remove("flipped");
          cardInHand.classList.remove("hiding");
          flipLost(selectedLostCard);
          i = cardsInHand.length;
        }
      }.call(this, i));
    }
  }
};

togglePoison.onclick = () => {
  if (!poisoned) {
    poisoned = true;
    poisonedToken.classList.remove("hiding");
    healButton.classList.add("poisoned");
  } else {
    poisoned = false;
    poisonedToken.classList.add("hiding");
    healButton.classList.remove("poisoned");
  }
};

toggleBearPoison.onclick = () => {
  if (!bearPoisoned) {
    bearPoisoned = true;
    bearPoisonedToken.classList.remove("hiding");
    healBearButton.classList.add("poisoned");
  } else {
    bearPoisoned = false;
    bearPoisonedToken.classList.add("hiding");
    healBearButton.classList.remove("poisoned");
  }
};

toggleWounded.onclick = () => {
  if (!wounded) {
    wounded = true;
    woundedToken.classList.remove("hiding");
  } else {
    wounded = false;
    woundedToken.classList.add("hiding");
  }
};

toggleBearWounded.onclick = () => {
  if (!bearWounded) {
    bearWounded = true;
    bearWoundedToken.classList.remove("hiding");
  } else {
    bearWounded = false;
    bearWoundedToken.classList.add("hiding");
  }
};

toggleImmobilized.onclick = () => {
  if (!immobilized) {
    immobilized = true;
    immobilizedToken.classList.remove("hiding");
  } else {
    immobilized = false;
    immobilizedToken.classList.add("hiding");
  }
};

toggleBearImmobilized.onclick = () => {
  if (!bearImmobilized) {
    bearImmobilized = true;
    bearImmobilizedToken.classList.remove("hiding");
  } else {
    bearImmobilized = false;
    bearImmobilizedToken.classList.add("hiding");
  }
};

toggleDisarmed.onclick = () => {
  if (!disarmed) {
    disarmed = true;
    disarmedToken.classList.remove("hiding");
  } else {
    disarmed = false;
    disarmedToken.classList.add("hiding");
  }
};

toggleBearDisarmed.onclick = () => {
  if (!bearDisarmed) {
    bearDisarmed = true;
    bearDisarmedToken.classList.remove("hiding");
  } else {
    bearDisarmed = false;
    bearDisarmedToken.classList.add("hiding");
  }
};

toggleStunned.onclick = () => {
  if (!stunned) {
    stunned = true;
    stunnedToken.classList.remove("hiding");
  } else {
    stunned = false;
    stunnedToken.classList.add("hiding");
  }
};

toggleBearStunned.onclick = () => {
  if (!bearStunned) {
    bearStunned = true;
    bearStunnedToken.classList.remove("hiding");
  } else {
    bearStunned = false;
    bearStunnedToken.classList.add("hiding");
  }
};

toggleMuddled.onclick = () => {
  if (!muddled) {
    muddled = true;
    muddledToken.classList.remove("hiding");
  } else {
    muddled = false;
    muddledToken.classList.add("hiding");
  }
};

toggleBearMuddled.onclick = () => {
  if (!bearMuddled) {
    bearMuddled = true;
    bearMuddledToken.classList.remove("hiding");
  } else {
    bearMuddled = false;
    bearMuddledToken.classList.add("hiding");
  }
};

toggleInvisible.onclick = () => {
  if (!invisible) {
    invisible = true;
    invisibleToken.classList.remove("hiding");
  } else {
    invisible = false;
    invisibleToken.classList.add("hiding");
  }
};

toggleBearInvisible.onclick = () => {
  if (!bearInvisible) {
    bearInvisible = true;
    bearInvisibleToken.classList.remove("hiding");
  } else {
    bearInvisible = false;
    bearInvisibleToken.classList.add("hiding");
  }
};

toggleStrengthened.onclick = () => {
  if (!strengthened) {
    strengthened = true;
    strengthenedToken.classList.remove("hiding");
  } else {
    strengthened = false;
    strengthenedToken.classList.add("hiding");
  }
};

toggleBearStrengthened.onclick = () => {
  if (!bearStrengthened) {
    bearStrengthened = true;
    bearStrengthenedToken.classList.remove("hiding");
  } else {
    bearStrengthened = false;
    bearStrengthenedToken.classList.add("hiding");
  }
};

let healthCounter = document.getElementById("health-counter");
let xpCounter = document.getElementById("xp-counter");
let bearHealthCounter = document.getElementById("bear-health-counter");
let lootCounter = document.getElementById("loot-counter");

xpUp.onclick = () => {
  xpCount++;
  xpCounter.innerHTML = xpCount;
  xpDown.classList.remove("at-min");
};

xpDown.onclick = () => {
  if (xpCount > 0) {
    xpCount--;
    xpCounter.innerHTML = xpCount;
    if (xpCount === 0) {
      xpDown.classList.add("at-min");
    }
  }
};

lootUp.onclick = () => {
  lootCount++;
  lootCounter.innerHTML = lootCount;
  lootDown.classList.remove("at-min");
};

lootDown.onclick = () => {
  if (lootCount > 0) {
    lootCount--;
    lootCounter.innerHTML = lootCount;
    if (lootCount === 0) {
      lootDown.classList.add("at-min");
    }
  }
};

healButton.onclick = () => {
  if (!poisoned && health < maxHealth) {
    health++;
    healthCounter.innerHTML = health + "/" + maxHealth;
    damageButton.classList.remove("at-min");
    wounded = false;
    woundedToken.classList.add("hiding");
    if (health === maxHealth) {
      healButton.classList.add("at-max");
    }
  }
};
damageButton.onclick = () => {
  if (health > 0) {
    health--;
    healthCounter.innerHTML = health + "/" + maxHealth;
    healButton.classList.remove("at-max");
    if (health === 0) {
      damageButton.classList.add("at-min");
    }
  }
};

let healBearButton = document.getElementById("heal-bear");
let damageBearButton = document.getElementById("damage-bear");

healBearButton.onclick = () => {
  if (!poisoned && bearHealth < bearMaxHealth) {
    bearHealth++;
    bearHealthCounter.innerHTML =
      "Bear Health<br/>" + bearHealth + "/" + bearMaxHealth;
    damageBearButton.classList.remove("at-min");
    bearWounded = false;
    bearWoundedToken.classList.add("hiding");
    if (bearHealth === bearMaxHealth) {
      healBearButton.classList.add("at-max");
    }
  }
};
damageBearButton.onclick = () => {
  if (bearHealth > 0) {
    bearHealth--;
    bearHealthCounter.innerHTML =
      "Bear Health<br/>" + bearHealth + "/" + bearMaxHealth;
    healBearButton.classList.remove("at-max");
    if (bearHealth === 0) {
      damageBearButton.classList.add("at-min");
    }
  }
};

levelUp.onclick = () => {
  if (levelCount < 9) {
    levelCount++;
    levelCounter.innerHTML = "Level: " + levelCount;
    levelDown.classList.remove("at-min");
    if (levelCount === 9) {
      levelUp.classList.add("at-max");
    }
  }
};

levelDown.onclick = () => {
  if (levelCount > 1) {
    levelCount--;
    levelCounter.innerHTML = "Level: " + levelCount;
    levelUp.classList.remove("at-max");
    if (levelCount === 1) {
      levelDown.classList.add("at-min");
    }
  }
};

let createActiveTracker = document.getElementById("create-active-tracker");
let increaseTrackerSize = document.getElementById("increase-tracker-size");
let decreaseTrackerSize = document.getElementById("decrease-tracker-size");
let tracker11 = document.getElementById("tracker1-1");
let tracker12 = document.getElementById("tracker1-2");
let tracker13 = document.getElementById("tracker1-3");
let tracker14 = document.getElementById("tracker1-4");
let tracker15 = document.getElementById("tracker1-5");
let tracker16 = document.getElementById("tracker1-6");
let tracker21 = document.getElementById("tracker2-1");
let tracker22 = document.getElementById("tracker2-2");
let tracker23 = document.getElementById("tracker2-3");
let tracker24 = document.getElementById("tracker2-4");
let tracker25 = document.getElementById("tracker2-5");
let tracker26 = document.getElementById("tracker2-6");
let tracker31 = document.getElementById("tracker3-1");
let tracker32 = document.getElementById("tracker3-2");
let tracker33 = document.getElementById("tracker3-3");
let tracker34 = document.getElementById("tracker3-4");
let tracker35 = document.getElementById("tracker3-5");
let tracker36 = document.getElementById("tracker3-6");
let tracker41 = document.getElementById("tracker4-1");
let tracker42 = document.getElementById("tracker4-2");
let tracker43 = document.getElementById("tracker4-3");
let tracker44 = document.getElementById("tracker4-4");
let tracker45 = document.getElementById("tracker4-5");
let tracker46 = document.getElementById("tracker4-6");
let tracker51 = document.getElementById("tracker5-1");
let tracker52 = document.getElementById("tracker5-2");
let tracker53 = document.getElementById("tracker5-3");
let tracker54 = document.getElementById("tracker5-4");
let tracker55 = document.getElementById("tracker5-5");
let tracker56 = document.getElementById("tracker5-6");
let tracker61 = document.getElementById("tracker6-1");
let tracker62 = document.getElementById("tracker6-2");
let tracker63 = document.getElementById("tracker6-3");
let tracker64 = document.getElementById("tracker6-4");
let tracker65 = document.getElementById("tracker6-5");
let tracker66 = document.getElementById("tracker6-6");

increaseTrackerSize.onclick = () => {
  if (trackerSize < 6) {
    trackerSize++;
    trackerSizeCounter.innerHTML = "Tracker Size: " + trackerSize;
    decreaseTrackerSize.classList.remove("at-min");
    if (trackerSize === 6) {
      increaseTrackerSize.classList.add("at-max");
    }
  }
};

decreaseTrackerSize.onclick = () => {
  if (trackerSize > 1) {
    trackerSize--;
    trackerSizeCounter.innerHTML = "Tracker Size: " + trackerSize;
    increaseTrackerSize.classList.remove("at-max");
    if (trackerSize === 1) {
      decreaseTrackerSize.classList.add("at-min");
    }
  }
};

createActiveTracker.onclick = () => {
  var activeCardsWithBorder = document.querySelectorAll(".active-selected");
  activeCardWithBorder = activeCardsWithBorder[0];
  if (!activeCardWithBorder.classList.contains("has-tracker")) {
    switch (trackerSize) {
      case 1:
        var activeCards = document.querySelectorAll(".active-card");
        for (var i = 0; i < activeCards.length; i++) {
          (function () {
            var activeCard = activeCards[i];
            if (
              activeCard.classList.contains("active-selected") &&
              !activeCard.classList.contains("has-tracker")
            ) {
              activeCard.classList.remove("active-selected");
              activeCard.classList.add("has-tracker");
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    ".tracker-button1"
                  );
                  var card1Tracker1 = card1Trackers[0];
                  card1Tracker1.classList.remove("invisible");
                  card1TrackerCounter = 1;
                  break;
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    ".tracker-button2"
                  );
                  var card2Tracker1 = card2Trackers[0];
                  card2Tracker1.classList.remove("invisible");
                  card2TrackerCounter = 1;
                  break;
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    ".tracker-button3"
                  );
                  var card3Tracker1 = card3Trackers[0];
                  card3Tracker1.classList.remove("invisible");
                  card3TrackerCounter = 1;
                  break;
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    ".tracker-button4"
                  );
                  var card4Tracker1 = card4Trackers[0];
                  card4Tracker1.classList.remove("invisible");
                  card4TrackerCounter = 1;
                  break;
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    ".tracker-button5"
                  );
                  var card5Tracker1 = card5Trackers[0];
                  card5Tracker1.classList.remove("invisible");
                  card5TrackerCounter = 1;
                  break;
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    ".tracker-button6"
                  );
                  var card6Tracker1 = card6Trackers[0];
                  card6Tracker1.classList.remove("invisible");
                  card6TrackerCounter = 1;
                  break;
              }
            }
          }.call(this, i));
        }
        break;
      case 2:
        var activeCards = document.querySelectorAll(".active-card");
        for (var i = 0; i < activeCards.length; i++) {
          (function () {
            var activeCard = activeCards[i];
            if (
              activeCard.classList.contains("active-selected") &&
              !activeCard.classList.contains("has-tracker")
            ) {
              activeCard.classList.remove("active-selected");
              activeCard.classList.add("has-tracker");
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    ".tracker-button1"
                  );
                  for (var j = 0; j < card1Trackers.length; j++) {
                    (function () {
                      var card1Tracker = card1Trackers[j];
                      if (j < 2) {
                        card1Tracker.classList.remove("invisible");
                        card1TrackerCounter = 2;
                      }
                    }.call(this, j));
                  }
                  break;
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    ".tracker-button2"
                  );
                  for (var j = 0; j < card2Trackers.length; j++) {
                    (function () {
                      var card2Tracker = card2Trackers[j];
                      if (j < 2) {
                        card2Tracker.classList.remove("invisible");
                        card2TrackerCounter = 2;
                      }
                    }.call(this, j));
                  }
                  break;
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    ".tracker-button3"
                  );
                  for (var j = 0; j < card3Trackers.length; j++) {
                    (function () {
                      var card3Tracker = card3Trackers[j];
                      if (j < 2) {
                        card3Tracker.classList.remove("invisible");
                        card3TrackerCounter = 2;
                      }
                    }.call(this, j));
                  }
                  break;
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    ".tracker-button4"
                  );
                  for (var j = 0; j < card4Trackers.length; j++) {
                    (function () {
                      var card4Tracker = card4Trackers[j];
                      if (j < 2) {
                        card4Tracker.classList.remove("invisible");
                        card4TrackerCounter = 2;
                      }
                    }.call(this, j));
                  }
                  break;
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    ".tracker-button5"
                  );
                  for (var j = 0; j < card5Trackers.length; j++) {
                    (function () {
                      var card5Tracker = card5Trackers[j];
                      if (j < 2) {
                        card5Tracker.classList.remove("invisible");
                        card5TrackerCounter = 2;
                      }
                    }.call(this, j));
                  }
                  break;
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    ".tracker-button6"
                  );
                  for (var j = 0; j < card6Trackers.length; j++) {
                    (function () {
                      var card6Tracker = card6Trackers[j];
                      if (j < 2) {
                        card6Tracker.classList.remove("invisible");
                        card6TrackerCounter = 2;
                      }
                    }.call(this, j));
                  }
                  break;
              }
            }
          }.call(this, i));
        }
        break;
      case 3:
        var activeCards = document.querySelectorAll(".active-card");
        for (var i = 0; i < activeCards.length; i++) {
          (function () {
            var activeCard = activeCards[i];
            if (
              activeCard.classList.contains("active-selected") &&
              !activeCard.classList.contains("has-tracker")
            ) {
              activeCard.classList.remove("active-selected");
              activeCard.classList.add("has-tracker");
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    ".tracker-button1"
                  );
                  for (var j = 0; j < card1Trackers.length; j++) {
                    (function () {
                      var card1Tracker = card1Trackers[j];
                      if (j < 3) {
                        card1Tracker.classList.remove("invisible");
                        card1TrackerCounter = 3;
                      }
                    }.call(this, j));
                  }
                  break;
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    ".tracker-button2"
                  );
                  for (var j = 0; j < card2Trackers.length; j++) {
                    (function () {
                      var card2Tracker = card2Trackers[j];
                      if (j < 3) {
                        card2Tracker.classList.remove("invisible");
                        card2TrackerCounter = 3;
                      }
                    }.call(this, j));
                  }
                  break;
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    ".tracker-button3"
                  );
                  for (var j = 0; j < card3Trackers.length; j++) {
                    (function () {
                      var card3Tracker = card3Trackers[j];
                      if (j < 3) {
                        card3Tracker.classList.remove("invisible");
                        card3TrackerCounter = 3;
                      }
                    }.call(this, j));
                  }
                  break;
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    ".tracker-button4"
                  );
                  for (var j = 0; j < card4Trackers.length; j++) {
                    (function () {
                      var card4Tracker = card4Trackers[j];
                      if (j < 3) {
                        card4Tracker.classList.remove("invisible");
                        card4TrackerCounter = 3;
                      }
                    }.call(this, j));
                  }
                  break;
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    ".tracker-button5"
                  );
                  for (var j = 0; j < card5Trackers.length; j++) {
                    (function () {
                      var card5Tracker = card5Trackers[j];
                      if (j < 3) {
                        card5Tracker.classList.remove("invisible");
                        card5TrackerCounter = 3;
                      }
                    }.call(this, j));
                  }
                  break;
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    ".tracker-button6"
                  );
                  for (var j = 0; j < card6Trackers.length; j++) {
                    (function () {
                      var card6Tracker = card6Trackers[j];
                      if (j < 3) {
                        card6Tracker.classList.remove("invisible");
                        card6TrackerCounter = 3;
                      }
                    }.call(this, j));
                  }
                  break;
              }
            }
          }.call(this, i));
        }
        break;
      case 4:
        var activeCards = document.querySelectorAll(".active-card");
        for (var i = 0; i < activeCards.length; i++) {
          (function () {
            var activeCard = activeCards[i];
            if (
              activeCard.classList.contains("active-selected") &&
              !activeCard.classList.contains("has-tracker")
            ) {
              activeCard.classList.remove("active-selected");
              activeCard.classList.add("has-tracker");
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    ".tracker-button1"
                  );
                  for (var j = 0; j < card1Trackers.length; j++) {
                    (function () {
                      var card1Tracker = card1Trackers[j];
                      if (j < 4) {
                        card1Tracker.classList.remove("invisible");
                        card1TrackerCounter = 4;
                      }
                    }.call(this, j));
                  }
                  break;
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    ".tracker-button2"
                  );
                  for (var j = 0; j < card2Trackers.length; j++) {
                    (function () {
                      var card2Tracker = card2Trackers[j];
                      if (j < 4) {
                        card2Tracker.classList.remove("invisible");
                        card2TrackerCounter = 4;
                      }
                    }.call(this, j));
                  }
                  break;
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    ".tracker-button3"
                  );
                  for (var j = 0; j < card3Trackers.length; j++) {
                    (function () {
                      var card3Tracker = card3Trackers[j];
                      if (j < 4) {
                        card3Tracker.classList.remove("invisible");
                        card3TrackerCounter = 4;
                      }
                    }.call(this, j));
                  }
                  break;
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    ".tracker-button4"
                  );
                  for (var j = 0; j < card4Trackers.length; j++) {
                    (function () {
                      var card4Tracker = card4Trackers[j];
                      if (j < 4) {
                        card4Tracker.classList.remove("invisible");
                        card4TrackerCounter = 4;
                      }
                    }.call(this, j));
                  }
                  break;
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    ".tracker-button5"
                  );
                  for (var j = 0; j < card5Trackers.length; j++) {
                    (function () {
                      var card5Tracker = card5Trackers[j];
                      if (j < 4) {
                        card5Tracker.classList.remove("invisible");
                        card5TrackerCounter = 4;
                      }
                    }.call(this, j));
                  }
                  break;
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    ".tracker-button6"
                  );
                  for (var j = 0; j < card6Trackers.length; j++) {
                    (function () {
                      var card6Tracker = card6Trackers[j];
                      if (j < 4) {
                        card6Tracker.classList.remove("invisible");
                        card6TrackerCounter = 4;
                      }
                    }.call(this, j));
                  }
                  break;
              }
            }
          }.call(this, i));
        }
        break;
      case 5:
        var activeCards = document.querySelectorAll(".active-card");
        for (var i = 0; i < activeCards.length; i++) {
          (function () {
            var activeCard = activeCards[i];
            if (
              activeCard.classList.contains("active-selected") &&
              !activeCard.classList.contains("has-tracker")
            ) {
              activeCard.classList.remove("active-selected");
              activeCard.classList.add("has-tracker");
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    ".tracker-button1"
                  );
                  for (var j = 0; j < card1Trackers.length; j++) {
                    (function () {
                      var card1Tracker = card1Trackers[j];
                      if (j < 5) {
                        card1Tracker.classList.remove("invisible");
                        card1TrackerCounter = 5;
                      }
                    }.call(this, j));
                  }
                  break;
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    ".tracker-button2"
                  );
                  for (var j = 0; j < card2Trackers.length; j++) {
                    (function () {
                      var card2Tracker = card2Trackers[j];
                      if (j < 5) {
                        card2Tracker.classList.remove("invisible");
                        card2TrackerCounter = 5;
                      }
                    }.call(this, j));
                  }
                  break;
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    ".tracker-button3"
                  );
                  for (var j = 0; j < card3Trackers.length; j++) {
                    (function () {
                      var card3Tracker = card3Trackers[j];
                      if (j < 5) {
                        card3Tracker.classList.remove("invisible");
                        card3TrackerCounter = 5;
                      }
                    }.call(this, j));
                  }
                  break;
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    ".tracker-button4"
                  );
                  for (var j = 0; j < card4Trackers.length; j++) {
                    (function () {
                      var card4Tracker = card4Trackers[j];
                      if (j < 5) {
                        card4Tracker.classList.remove("invisible");
                        card4TrackerCounter = 5;
                      }
                    }.call(this, j));
                  }
                  break;
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    ".tracker-button5"
                  );
                  for (var j = 0; j < card5Trackers.length; j++) {
                    (function () {
                      var card5Tracker = card5Trackers[j];
                      if (j < 5) {
                        card5Tracker.classList.remove("invisible");
                        card5TrackerCounter = 5;
                      }
                    }.call(this, j));
                  }
                  break;
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    ".tracker-button6"
                  );
                  for (var j = 0; j < card6Trackers.length; j++) {
                    (function () {
                      var card6Tracker = card6Trackers[j];
                      if (j < 5) {
                        card6Tracker.classList.remove("invisible");
                        card6TrackerCounter = 5;
                      }
                    }.call(this, j));
                  }
                  break;
              }
            }
          }.call(this, i));
        }
        break;
      case 6:
        var activeCards = document.querySelectorAll(".active-card");
        for (var i = 0; i < activeCards.length; i++) {
          (function () {
            var activeCard = activeCards[i];
            if (
              activeCard.classList.contains("active-selected") &&
              !activeCard.classList.contains("has-tracker")
            ) {
              activeCard.classList.remove("active-selected");
              activeCard.classList.add("has-tracker");
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    ".tracker-button1"
                  );
                  for (var j = 0; j < card1Trackers.length; j++) {
                    (function () {
                      var card1Tracker = card1Trackers[j];
                      if (j < 6) {
                        card1Tracker.classList.remove("invisible");
                        card1TrackerCounter = 6;
                      }
                    }.call(this, j));
                  }
                  break;
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    ".tracker-button2"
                  );
                  for (var j = 0; j < card2Trackers.length; j++) {
                    (function () {
                      var card2Tracker = card2Trackers[j];
                      if (j < 6) {
                        card2Tracker.classList.remove("invisible");
                        card2TrackerCounter = 6;
                      }
                    }.call(this, j));
                  }
                  break;
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    ".tracker-button3"
                  );
                  for (var j = 0; j < card3Trackers.length; j++) {
                    (function () {
                      var card3Tracker = card3Trackers[j];
                      if (j < 6) {
                        card3Tracker.classList.remove("invisible");
                        card3TrackerCounter = 6;
                      }
                    }.call(this, j));
                  }
                  break;
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    ".tracker-button4"
                  );
                  for (var j = 0; j < card4Trackers.length; j++) {
                    (function () {
                      var card4Tracker = card4Trackers[j];
                      if (j < 6) {
                        card4Tracker.classList.remove("invisible");
                        card4TrackerCounter = 6;
                      }
                    }.call(this, j));
                  }
                  break;
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    ".tracker-button5"
                  );
                  for (var j = 0; j < card5Trackers.length; j++) {
                    (function () {
                      var card5Tracker = card5Trackers[j];
                      if (j < 6) {
                        card5Tracker.classList.remove("invisible");
                        card5TrackerCounter = 6;
                      }
                    }.call(this, j));
                  }
                  break;
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    ".tracker-button6"
                  );
                  for (var j = 0; j < card6Trackers.length; j++) {
                    (function () {
                      var card6Tracker = card6Trackers[j];
                      if (j < 6) {
                        card6Tracker.classList.remove("invisible");
                        card6TrackerCounter = 6;
                      }
                    }.call(this, j));
                  }
                  break;
              }
            }
          }.call(this, i));
        }
        break;
    }
    discardActiveCardButton.classList.add("not-without-more-selected");
    loseActiveCardButton.classList.add("not-without-more-selected");
    createActiveTracker.classList.add("not-without-more-selected");
    activesSelected = 0;
  }
};

var trackerUseButtons1 = document.querySelectorAll(".tracker-button1");
for (var i = 0; i < trackerUseButtons1.length; i++) {
  (function () {
    var trackerUseButton1 = trackerUseButtons1[i];
    trackerUseButton1.onclick = () => {
      if (trackerUseButton1 === trackerUseButtons1[0]) {
        trackerUseButton1.classList.add("invisible");
      } else if (
        trackerUseButton1.previousSibling.classList.contains("invisible")
      ) {
        trackerUseButton1.classList.add("invisible");
      }
      if (
        card1TrackerCounter === 1 &&
        trackerUseButton1 === trackerUseButtons1[0]
      ) {
        active1.classList.remove("has-tracker");
        if (active1.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card1TrackerCounter === 2 &&
        trackerUseButton1 === trackerUseButtons1[1]
      ) {
        active1.classList.remove("has-tracker");
        if (active1.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card1TrackerCounter === 3 &&
        trackerUseButton1 === trackerUseButtons1[2]
      ) {
        active1.classList.remove("has-tracker");
        if (active1.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card1TrackerCounter === 4 &&
        trackerUseButton1 === trackerUseButtons1[3]
      ) {
        active1.classList.remove("has-tracker");
        if (active1.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card1TrackerCounter === 5 &&
        trackerUseButton1 === trackerUseButtons1[4]
      ) {
        active1.classList.remove("has-tracker");
        if (active1.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card1TrackerCounter === 6 &&
        trackerUseButton1 === trackerUseButtons1[5]
      ) {
        active1.classList.remove("has-tracker");
        if (active1.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

var trackerUseButtons2 = document.querySelectorAll(".tracker-button2");
for (var i = 0; i < trackerUseButtons2.length; i++) {
  (function () {
    var trackerUseButton2 = trackerUseButtons2[i];
    trackerUseButton2.onclick = () => {
      if (trackerUseButton2 === trackerUseButtons2[0]) {
        trackerUseButton2.classList.add("invisible");
      } else if (
        trackerUseButton2.previousSibling.classList.contains("invisible")
      ) {
        trackerUseButton2.classList.add("invisible");
      }
      if (
        card2TrackerCounter === 1 &&
        trackerUseButton2 === trackerUseButtons2[0]
      ) {
        active2.classList.remove("has-tracker");
        if (active2.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card2TrackerCounter === 2 &&
        trackerUseButton2 === trackerUseButtons2[1]
      ) {
        active2.classList.remove("has-tracker");
        if (active2.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card2TrackerCounter === 3 &&
        trackerUseButton2 === trackerUseButtons2[2]
      ) {
        active2.classList.remove("has-tracker");
        if (active2.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card2TrackerCounter === 4 &&
        trackerUseButton2 === trackerUseButtons2[3]
      ) {
        active2.classList.remove("has-tracker");
        if (active2.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card2TrackerCounter === 5 &&
        trackerUseButton2 === trackerUseButtons2[4]
      ) {
        active2.classList.remove("has-tracker");
        if (active2.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card2TrackerCounter === 6 &&
        trackerUseButton2 === trackerUseButtons2[5]
      ) {
        active2.classList.remove("has-tracker");
        if (active2.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

var trackerUseButtons3 = document.querySelectorAll(".tracker-button3");
for (var i = 0; i < trackerUseButtons3.length; i++) {
  (function () {
    var trackerUseButton3 = trackerUseButtons3[i];
    trackerUseButton3.onclick = () => {
      if (trackerUseButton3 === trackerUseButtons3[0]) {
        trackerUseButton3.classList.add("invisible");
      } else if (
        trackerUseButton3.previousSibling.classList.contains("invisible")
      ) {
        trackerUseButton3.classList.add("invisible");
      }
      if (
        card3TrackerCounter === 1 &&
        trackerUseButton3 === trackerUseButtons3[0]
      ) {
        active3.classList.remove("has-tracker");
        if (active3.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card3TrackerCounter === 2 &&
        trackerUseButton3 === trackerUseButtons3[1]
      ) {
        active3.classList.remove("has-tracker");
        if (active3.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card3TrackerCounter === 3 &&
        trackerUseButton3 === trackerUseButtons3[2]
      ) {
        active3.classList.remove("has-tracker");
        if (active3.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card3TrackerCounter === 4 &&
        trackerUseButton3 === trackerUseButtons3[3]
      ) {
        active3.classList.remove("has-tracker");
        if (active3.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card3TrackerCounter === 5 &&
        trackerUseButton3 === trackerUseButtons3[4]
      ) {
        active3.classList.remove("has-tracker");
        if (active3.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card3TrackerCounter === 6 &&
        trackerUseButton3 === trackerUseButtons3[5]
      ) {
        active3.classList.remove("has-tracker");
        if (active3.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

var trackerUseButtons4 = document.querySelectorAll(".tracker-button4");
for (var i = 0; i < trackerUseButtons4.length; i++) {
  (function () {
    var trackerUseButton4 = trackerUseButtons4[i];
    trackerUseButton4.onclick = () => {
      if (trackerUseButton4 === trackerUseButtons4[0]) {
        trackerUseButton4.classList.add("invisible");
      } else if (
        trackerUseButton4.previousSibling.classList.contains("invisible")
      ) {
        trackerUseButton4.classList.add("invisible");
      }
      if (
        card4TrackerCounter === 1 &&
        trackerUseButton4 === trackerUseButtons4[0]
      ) {
        active4.classList.remove("has-tracker");
        if (active4.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card4TrackerCounter === 2 &&
        trackerUseButton4 === trackerUseButtons4[1]
      ) {
        active4.classList.remove("has-tracker");
        if (active4.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card4TrackerCounter === 3 &&
        trackerUseButton4 === trackerUseButtons4[2]
      ) {
        active4.classList.remove("has-tracker");
        if (active4.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card4TrackerCounter === 4 &&
        trackerUseButton4 === trackerUseButtons4[3]
      ) {
        active4.classList.remove("has-tracker");
        if (active4.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card4TrackerCounter === 5 &&
        trackerUseButton4 === trackerUseButtons4[4]
      ) {
        active4.classList.remove("has-tracker");
        if (active4.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card4TrackerCounter === 6 &&
        trackerUseButton4 === trackerUseButtons4[5]
      ) {
        active4.classList.remove("has-tracker");
        if (active4.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

var trackerUseButtons5 = document.querySelectorAll(".tracker-button5");
for (var i = 0; i < trackerUseButtons5.length; i++) {
  (function () {
    var trackerUseButton5 = trackerUseButtons5[i];
    trackerUseButton5.onclick = () => {
      if (trackerUseButton5 === trackerUseButtons5[0]) {
        trackerUseButton5.classList.add("invisible");
      } else if (
        trackerUseButton5.previousSibling.classList.contains("invisible")
      ) {
        trackerUseButton5.classList.add("invisible");
      }
      if (
        card5TrackerCounter === 1 &&
        trackerUseButton5 === trackerUseButtons5[0]
      ) {
        active5.classList.remove("has-tracker");
        if (active5.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card5TrackerCounter === 2 &&
        trackerUseButton5 === trackerUseButtons5[1]
      ) {
        active5.classList.remove("has-tracker");
        if (active5.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card5TrackerCounter === 3 &&
        trackerUseButton5 === trackerUseButtons5[2]
      ) {
        active5.classList.remove("has-tracker");
        if (active5.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card5TrackerCounter === 4 &&
        trackerUseButton5 === trackerUseButtons5[3]
      ) {
        active5.classList.remove("has-tracker");
        if (active5.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card5TrackerCounter === 5 &&
        trackerUseButton5 === trackerUseButtons5[4]
      ) {
        active5.classList.remove("has-tracker");
        if (active5.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card5TrackerCounter === 6 &&
        trackerUseButton5 === trackerUseButtons5[5]
      ) {
        active5.classList.remove("has-tracker");
        if (active5.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

var trackerUseButtons6 = document.querySelectorAll(".tracker-button6");
for (var i = 0; i < trackerUseButtons6.length; i++) {
  (function () {
    var trackerUseButton6 = trackerUseButtons6[i];
    trackerUseButton6.onclick = () => {
      if (trackerUseButton6 === trackerUseButtons6[0]) {
        trackerUseButton6.classList.add("invisible");
      } else if (
        trackerUseButton6.previousSibling.classList.contains("invisible")
      ) {
        trackerUseButton6.classList.add("invisible");
      }
      if (
        card6TrackerCounter === 1 &&
        trackerUseButton6 === trackerUseButtons6[0]
      ) {
        active6.classList.remove("has-tracker");
        if (active6.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card6TrackerCounter === 2 &&
        trackerUseButton6 === trackerUseButtons6[1]
      ) {
        active6.classList.remove("has-tracker");
        if (active6.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card6TrackerCounter === 3 &&
        trackerUseButton6 === trackerUseButtons6[2]
      ) {
        active6.classList.remove("has-tracker");
        if (active6.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card6TrackerCounter === 4 &&
        trackerUseButton6 === trackerUseButtons6[3]
      ) {
        active6.classList.remove("has-tracker");
        if (active6.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card6TrackerCounter === 5 &&
        trackerUseButton6 === trackerUseButtons6[4]
      ) {
        active6.classList.remove("has-tracker");
        if (active6.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      } else if (
        card6TrackerCounter === 6 &&
        trackerUseButton6 === trackerUseButtons6[5]
      ) {
        active6.classList.remove("has-tracker");
        if (active6.classList.contains("active-selected")) {
          createActiveTracker.classList.remove("not-without-more-selected");
        }
      }
    };
  }.call(this, i));
}

goBack.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  var handCards = document.querySelectorAll(".hand");
  document.getElementById("select-class-section").classList.remove("hiding");
  document.getElementById("level-selection").classList.remove("hiding");
  confirmHandButton.classList.add("not-without-more-selected");
  resetModiferDeckArray();
  var perkLists = document.querySelectorAll(".perks");
  for (var j = 0; j < perkLists.length; j++) {
    var perkList = perkLists[j];
    perkList.classList.add("hiding");
  }
  goBack.classList.add("hiding");
  goBack2.classList.add("hiding");
  document.getElementById("perk-section").classList.add("hiding");
  document.getElementById("bear-health").classList.add("hiding");
  document.getElementById("bear-health-counter").classList.add("hiding");
  document.getElementById("damage-bear").classList.add("hiding");
  document.getElementById("heal-bear").classList.add("hiding");
  document.getElementById("bear-status-effects").classList.add("hiding");
  flipCard(cardHand1);
  flipCard(cardHand2);
  flipCard(cardHand3);
  flipCard(cardHand4);
  flipCard(cardHand5);
  flipCard(cardHand6);
  flipCard(cardHand7);
  flipCard(cardHand8);
  flipCard(cardHand9);
  flipCard(cardHand10);
  flipCard(cardHand11);
  flipCard(cardHand12);
  cardHand1.classList.remove("hiding");
  cardHand2.classList.remove("hiding");
  cardHand3.classList.remove("hiding");
  cardHand4.classList.remove("hiding");
  cardHand5.classList.remove("hiding");
  cardHand6.classList.remove("hiding");
  cardHand7.classList.remove("hiding");
  cardHand8.classList.remove("hiding");
  cardHand9.classList.remove("hiding");
  cardHand10.classList.remove("hiding");
  cardHand11.classList.remove("hiding");
  cardHand12.classList.remove("hiding");
  cardCount = 0;
  cardCounter.innerHTML = cardCount + "/" + handSize;
  var levelTitles = document.querySelectorAll(".level");
  for (var k = 3; k < levelTitles.length; k++) {
    var levelTitle = levelTitles[k];
    levelTitle.classList.remove("hiding");
  }
  for (var i = 0; i < cardsToChooseFrom.length; i++) {
    (function () {
      var card = cardsToChooseFrom[i];
      card.firstChild.classList.remove("add-border");
    }.call(this, i));
  }
};

goBack2.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll(".chooseCardsTable");
  var handCards = document.querySelectorAll(".hand");
  document.getElementById("initial-table").classList.add("hiding");
  document.getElementById("hand-cards").classList.add("hiding");
  document.getElementById("confirm-buttons").classList.add("hiding");
  confirmHandButton.classList.add("not-without-more-selected");
  resetModiferDeckArray();

  goBack.classList.remove("hiding");
  goBack2.classList.add("hiding");
  document.getElementById("perk-section").classList.remove("hiding");
  flipCard(cardHand1);
  flipCard(cardHand2);
  flipCard(cardHand3);
  flipCard(cardHand4);
  flipCard(cardHand5);
  flipCard(cardHand6);
  flipCard(cardHand7);
  flipCard(cardHand8);
  flipCard(cardHand9);
  flipCard(cardHand10);
  flipCard(cardHand11);
  flipCard(cardHand12);
  for (var j = 0; j < 12; j++) {
    var eachCardInHand = handCards[j];
    eachCardInHand.classList.add("hiding");
  }
  cardCount = 0;
  cardCounter.innerHTML = cardCount + "/" + handSize;
  var levelTitles = document.querySelectorAll(".level");
  for (var k = levelCount + 3; k < levelTitles.length; k++) {
    var levelTitle = levelTitles[k];
    levelTitle.classList.add("hiding");
  }
  for (var i = 0; i < cardsToChooseFrom.length; i++) {
    (function () {
      var card = cardsToChooseFrom[i];
      card.firstChild.classList.remove("add-border");
    }.call(this, i));
  }
};

loseDiscardButton.onclick = () => {
  var selectedDiscards = document.querySelectorAll(".discard-selected");
  if (discardsSelected === 1) {
    for (var i = 0; i < lostCards.length; i++) {
      var lostCard = lostCards[i];
      if (lostCard.classList.contains("flipped")) {
        lostCard.src = selectedDiscards[0].src;
        lostCard.classList.remove("flipped");
        lostCard.classList.remove("hiding");
        i = lostCards.length;
        flipDiscard(selectedDiscards[0]);
        discardsSelected--;
        discardCount--;
        recoverDiscardButton.classList.add("not-without-more-selected");
        loseDiscardButton.classList.add("not-without-more-selected");
        loseCardFromRestButton.classList.add("not-unless-resting");
      }
    }
  }
  if (discardCount === 0 && longResting) {
    longResting = false;
    mustLose = false;
    playCardsButton.classList.remove("not-while-resting");
    shortRestButton.classList.remove("not-while-resting");
    longRestButton.classList.remove("not-while-resting");
    loseCardFromRestButton.classList.add("not-unless-resting");
    shortRestButton.classList.add("not-without-more-cards");
    longRestButton.classList.add("not-without-more-cards");
    loseDiscardButton.classList.add("not-without-more-selected");
    Element.prototype.remove = function () {
      this.parentElement.removeChild(this);
    };
    document.getElementById("choose-to-lose").remove();
  }
};

loseHandCard.onclick = () => {
  if (cardCount === 1) {
    var cardsInHand = document.querySelectorAll(".hand");
    for (var j = 0; j < cardsInHand.length; j++) {
      var cardInHand = cardsInHand[j];
      if (cardInHand.classList.contains("add-border")) {
        for (var i = 0; i < lostCards.length; i++) {
          var lostCard = lostCards[i];
          if (lostCard.classList.contains("flipped")) {
            lostCard.src = cardInHand.src;
            lostCard.classList.remove("flipped");
            lostCard.classList.remove("hiding");
            i = lostCards.length;
            flipCard(cardInHand);
            cardCount--;
            loseHandCard.classList.add("not-without-more-selected");
          }
        }
      }
    }
  }
};

function resetModiferDeckArray() {
  modDeckArray = [];
  // add 6 plus 0
  for (i = 0; i < 6; i++) {
    modDeckArray.push(plus0Card);
  }
  // add 5 plus and minus 1
  for (i = 0; i < 5; i++) {
    modDeckArray.push(plus1Card);
    modDeckArray.push(minus1Card);
  }
  // add plus two and minus two, and reshuffle cards
  modDeckArray.push(minus2Card);
  modDeckArray.push(plus2Card);
  modDeckArray.push(curseShuffle);
  modDeckArray.push(blessShuffle);
}

//attack modifiers
let modifierDeck = document.getElementById("amDeck");
let playedModifiers = document.getElementById("playedModifiers");
let plus0Card = "./plus0.png";
let plus1Card = "./plus1.png";
let minus1Card = "./minus1.png";
let minus2Card = "./minus2.png";
let plus2Card = "./plus2.png";
let curseShuffle = "./curseShuffle.png";
let blessShuffle = "./blessShuffle.png";
let blessCard = "./status-effect/bless.png";
let curseCard = "./status-effect/curse.png";
let minus1 = "./newMinus1.png";
let modDeckArray = [];
resetModiferDeckArray();
let defaultDeckArray = [];
let playedModifierArray = [];
let mustShuffle = document.getElementById("mustShuffle");
let blessButton = document.getElementById("bless");
let curseButton = document.getElementById("curse");
let shuffleModsButton = document.getElementById("shuffleMods");
let numOfCurses = 0;
let numOfBlesses = 0;
let addMinusOne = document.getElementById("add-minus-1");
let cardsInDeckText = document.getElementById("cardsInDeck");
let resetDeckButton = document.getElementById("reset-deck");
let usedMods = document.getElementById("used-modifier-cards");

modifierDeck.onclick = () => {
  if (modDeckArray.length > 0) {
    playedModifierArray.push(modDeckArray[0]);
    var DOM_img = document.createElement("img");
    DOM_img.src = playedModifierArray[playedModifierArray.length - 1];
    usedMods.appendChild(DOM_img);
    playedModifiers.classList.remove("hiding");
    playedModifiers.src = playedModifierArray[playedModifierArray.length - 1];
    playedModifiers.classList.add(`${modDeckArray[0]}`);
    modDeckArray.splice(0, 1);
    if (modDeckArray.length === 0) {
      modifierDeck.classList.add("hiding");
    }
    if (
      playedModifiers.classList.contains("./curseShuffle.png") ||
      playedModifiers.classList.contains("./blessShuffle.png")
    ) {
      mustShuffle.classList.remove("invisible");
    }
    if (playedModifiers.classList.contains("./status-effect/curse.png")) {
      numOfCurses--;
      cursesInDeck.innerHTML = "Extra Curses in Deck: " + numOfCurses;
    }
    if (playedModifiers.classList.contains("./status-effect/bless.png")) {
      numOfBlesses--;
      blessesInDeck.innerHTML = "Extra Blesses in Deck: " + numOfBlesses;
    }
    if (
      playedModifiers.classList.contains("./status-effect/bless.png") ||
      playedModifiers.classList.contains("./status-effect/curse.png")
    ) {
      playedModifierArray.splice(playedModifierArray.length - 1, 1);
      playedModifiers.classList.remove("./status-effect/bless.png");
      playedModifiers.classList.remove("./status-effect/curse.png");
    }
    cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
  }
};

function shuffleModifierDeck() {
  while (playedModifierArray.length > 0) {
    modDeckArray.push(playedModifierArray[playedModifierArray.length - 1]);
    playedModifierArray.pop();
    playedModifiers.src = "";
    modifierDeck.src = "./amBack.png";
    mustShuffle.classList.add("invisible");
    playedModifiers.className = "attack-modifier";
    playedModifiers.classList.add("hiding");
    modifierDeck.classList.remove("hiding");
    cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
    usedMods.innerHTML = "";
    shuffleDeck();
  }
}

function shuffleDeck() {
  var deckCopy = modDeckArray.slice();
  modDeckArray = [];
  while (deckCopy.length > 0) {
    var randomNumber = Math.floor(Math.random() * deckCopy.length);
    modDeckArray.push(deckCopy[randomNumber]);
    deckCopy.splice(randomNumber, 1);
  }
}

shuffleModsButton.onclick = () => {
  shuffleModifierDeck();
};

function blessDeck() {
  if (numOfBlesses < 10) {
    modDeckArray.push(blessCard);
    modifierDeck.classList.remove("hiding");
    numOfBlesses++;
    cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
    shuffleDeck();
    blessesInDeck.innerHTML = "Extra Blesses in Deck: " + numOfBlesses;
  }
}

blessButton.onclick = () => {
  blessDeck();
};

function curseDeck() {
  if (numOfCurses < 10) {
    modDeckArray.push(curseCard);
    modifierDeck.classList.remove("hiding");
    numOfCurses++;
    cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
    shuffleDeck();
    cursesInDeck.innerHTML = "Extra Curses in Deck: " + numOfCurses;
  }
}

curseButton.onclick = () => {
  curseDeck();
};

function addMinus1() {
  modDeckArray.push(minus1Card);
  cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
}

addMinusOne.onclick = () => {
  addMinus1();
};

function resetDeck() {
  shuffleModifierDeck();
  modDeckArray = defaultDeckArray.slice();
  numOfCurses = 0;
  numOfBlesses = 0;
  cardsInDeckText.innerHTML = "Cards in Deck: " + modDeckArray.length;
  blessesInDeck.innerHTML = "Extra Blesses in Deck: " + numOfBlesses;
  cursesInDeck.innerHTML = "Extra Curses in Deck: " + numOfCurses;
  shuffleDeck();
}

resetDeckButton.onclick = () => {
  resetDeck();
};

var checkboxes = document.querySelectorAll(".checkbox");
for (var i = 0; i < checkboxes.length; i++) {
  (function () {
    var checkbox = checkboxes[i];
    checkbox.onclick = () => {
      if (!checkbox.classList.contains("checked")) {
        checkbox.classList.add("checked");
      } else {
        checkbox.classList.remove("checked");
      }
    };
  }.call(this, i));
}

function confirmPerks() {
  document.getElementById("initial-table").classList.remove("hiding");
  document.getElementById("hand-cards").classList.remove("hiding");
  let revealedCards = document.querySelectorAll(".hand");
  for (let i = 0; i < handSize; i++) {
    let revealedCard = revealedCards[i];
    revealedCard.classList.remove("hiding");
  }
  document.getElementById("confirm-buttons").classList.remove("hiding");
  chooseCardsNumber.innerHTML = "Choose " + handSize + " Cards";
  cardCounter.innerHTML = "0/" + handSize;
  healthCounter.innerHTML = health + "/" + maxHealth;
  bearHealthCounter.innerHTML =
    "Bear Health<br/>" + bearHealth + "/" + bearMaxHealth;
  xpCounter.innerHTML = xpCount;
  chosenCard1.src = flippedCard;
  chosenCard2.src = flippedCard;
  trackerSizeCounter.innerHTML = "Tracker Size: " + trackerSize;
  document.getElementById("perk-section").classList.add("hiding");
  goBack2.classList.remove("hiding");
}



let brConfirmPerksButton = document.getElementById("brConfirmPerksButton");
let btConfirmPerksButton = document.getElementById("btConfirmPerksButton");
let chConfirmPerksButton = document.getElementById("chConfirmPerksButton");
let swConfirmPerksButton = document.getElementById("swConfirmPerksButton");
let scConfirmPerksButton = document.getElementById("scConfirmPerksButton");
let tiConfirmPerksButton = document.getElementById("tiConfirmPerksButton");
let nsConfirmPerksButton = document.getElementById("nsConfirmPerksButton");
let sbConfirmPerksButton = document.getElementById("sbConfirmPerksButton");
let skConfirmPerksButton = document.getElementById("skConfirmPerksButton");
let suConfirmPerksButton = document.getElementById("suConfirmPerksButton");
let dsConfirmPerksButton = document.getElementById("dsConfirmPerksButton");
let mtConfirmPerksButton = document.getElementById("mtConfirmPerksButton");

//Summoner Perks
suConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
    
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus2Card, 1);
    AddXModifierCards("./suPerks/suPlus0.png", 2);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./suPerks/suPlus1.png", 1);
  }
  if (classPerks[3].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./suPerks/suPlus1.png", 1);
  }
  if (classPerks[4].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./suPerks/suPlus1.png", 1);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suPlus2.png", 1);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suPlus2.png", 1);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suRollingWound.png", 2);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suRollingPoison.png", 2);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suRollingHeal1.png", 2);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suRollingHeal1.png", 2);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suRollingHeal1.png", 2);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suRollingFire.png", 1);
    AddXModifierCards("./suPerks/suRollingWind.png", 1);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suRollingDark.png", 1);
    AddXModifierCards("./suPerks/suRollingEarth.png", 1);
  }
  if (classPerks[14].classList.contains("checked")) {
    AddXModifierCards("./suPerks/suPlus1.png", 2);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//Doomstalker Perks
dsConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 2);
    AddXModifierCards("./dsPerks/dsPlus1.png", 2);
  }
  if (classPerks[3].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 2);
    AddXModifierCards("./dsPerks/dsPlus1.png", 2);
  }
  if (classPerks[4].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 2);
    AddXModifierCards("./dsPerks/dsPlus1.png", 2);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsRollingPlus1.png", 2);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsRollingPlus1.png", 2);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsPlus2Muddle.png", 1);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsPlus1Poison.png", 1);    
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsPlus1Wound.png", 1);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsPlus1Immobilize.png", 1);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsPlus0Stun.png", 1);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsRollingAddTarget.png", 1);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./dsPerks/dsRollingAddTarget.png", 1);
  }
  if (classPerks[14].classList.contains("checked")) {
    // no deck mod
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//Mindthief perks
mtConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 4);
  }
  if (classPerks[3].classList.contains("checked")) {
    RemoveXModifierCards(plus1Card, 2);
    AddXModifierCards("./mtPerks/mtPlus2.png", 1);
  }
  if (classPerks[4].classList.contains("checked")) {
    RemoveXModifierCards(minus2Card, 2);
    AddXModifierCards("./mtPerks/mtPlus0.png", 1);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtFrostPlus2.png", 1);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtFrostPlus2.png", 1);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtRollingPlus1.png", 1);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtRollingPlus1.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtRollingPull1.png", 3);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtRollingMuddle.png", 3);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtRollingImmobilize.png", 2);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtRollingStun.png", 2);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./mtPerks/mtRollingDisarm.png", 1);
    AddXModifierCards("./mtPerks/mtRollingMuddle.png", 1);
  }
  if (classPerks[14].classList.contains("checked")) {
    // no deck mod
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

// Cragheart Perks Button
chConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 4);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./chPerks/chPlus1.png", 1);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./chPerks/chPlus1.png", 1);
  }
  if (classPerks[3].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./chPerks/chPlus1.png", 1);
  }
  if (classPerks[4].classList.contains("checked")) {
    AddXModifierCards(minus2Card, 1);
    AddXModifierCards(plus2Card, 2);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./chPerks/chPlus1Immobilize.png", 1);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./chPerks/chPlus1Immobilize.png", 1);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./chPerks/chPlus2Muddle.png", 1);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./chPerks/chPlus2Muddle.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./chPerks/chRollingPush2.png", 2);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./chPerks/chRollingEarth.png", 2);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./chPerks/chRollingEarth.png", 2);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./chPerks/chRollingWind.png", 2);
  }
  if (classPerks[13].classList.contains("checked")) {
    //nothing to do on mod deck
  }
  if (classPerks[14].classList.contains("checked")) {
    //nothing to do on mod deck
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//Brute
brConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./brPerks/brPlus1.png", 1);
  }
  if (classPerks[2].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brPlus1.png", 2);
  }
  if (classPerks[3].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brPlus1.png", 2);
  }
  if (classPerks[4].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brPlus3.png", 1);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brRollingPush1.png", 3);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brRollingPush1.png", 3);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brRollingPierce3.png", 2);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brRollingStun.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brRollingStun.png", 1);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brRollingDisarm.png", 1);
    AddXModifierCards("./brPerks/brRollingMuddle.png", 1);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brRollingAddTarget.png", 1);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brRollingAddTarget.png", 1);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brPlus1Shield.png", 1);
  }
  if (classPerks[14].classList.contains("checked")) {
    AddXModifierCards("./brPerks/brPlus1.png", 1);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//spellweaver
swConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 4);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 4);
    AddXModifierCards("./swPerks/swPlus1.png", 1);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 4);
    AddXModifierCards("./swPerks/swPlus1.png", 1);
  }
  if (classPerks[3].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus1.png", 1);
    AddXModifierCards("./swPerks/swPlus1.png", 1);
  }
  if (classPerks[4].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus1.png", 1);
    AddXModifierCards("./swPerks/swPlus1.png", 1);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus0Stun.png", 1);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus1Wound.png", 1);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus1Immobilize.png", 1);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus1Curse.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus2Fire.png", 1);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus2Fire.png", 1);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus2Frost.png", 1);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swPlus2Frost.png", 1);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swRollingEarth.png", 1);
    AddXModifierCards("./swPerks/swRollingWind.png", 1);
  }
  if (classPerks[14].classList.contains("checked")) {
    AddXModifierCards("./swPerks/swRollingLight.png", 1);
    AddXModifierCards("./swPerks/swRollingDark.png", 1);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//Scoundrel
scConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(minus0Card, 4);
  }
  if (classPerks[3].classList.contains("checked")) {
    RemoveXModifierCards(minus2Card, 1);
    AddXModifierCards("./scPerks/scPlus0.png", 1);
  }
  if (classPerks[4].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./scPerks/scPlus1.png", 1);
  }
  if (classPerks[5].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 1);
    AddXModifierCards("./scPerks/scPlus2.png", 1);
  }
  if (classPerks[6].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 1);
    AddXModifierCards("./scPerks/scPlus2.png", 1);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./scPerks/scRollingPlus1.png", 2);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./scPerks/scRollingPlus1.png", 2);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./scPerks/scRollingPierce3.png", 2);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./scPerks/scRollingPoison.png", 2);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./scPerks/scRollingPoison.png", 2);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./scPerks/scRollingMuddle.png", 2);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./scPerks/scRollingInvisible.png", 2);
  }
  if (classPerks[14].classList.contains("checked")) {
    //no deck mods
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//Tinkerer
tiConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(minus2Card, 2);
    AddXModifierCards("./tiPerks/tiPlus0.png", 1);
  }
  if (classPerks[3].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus1.png", 2);
  }
  if (classPerks[4].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus3.png", 1);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiRollingFire.png", 2);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiRollingMuddle.png", 3);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus1Wound.png", 1);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus1Wound.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus1Immobilize.png", 1);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus1Immobilize.png", 1);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus1Heal2.png", 1);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus1Heal2.png", 1);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./tiPerks/tiPlus0AddTarget.png", 1);
  }
  if (classPerks[14].classList.contains("checked")) {
    // no deck mods
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//Beast tyrant
btConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./btPerks/btPlus1.png", 1);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./btPerks/btPlus1.png", 1);
  }
  if (classPerks[3].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 1);
    AddXModifierCards("./btPerks/btPlus1.png", 1);
  }
  if (classPerks[4].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 1);
    AddXModifierCards("./btPerks/btPlus2.png", 1);
  }
  if (classPerks[5].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 1);
    AddXModifierCards("./btPerks/btPlus2.png", 1);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./btPerks/btPlus1Wound.png", 1);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./btPerks/btPlus1Wound.png", 1);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./btPerks/btPlus1Immobilize.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./btPerks/btPlus1Immobilize.png", 1);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./btPerks/btRollingHeal1.png", 2);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./btPerks/btRollingHeal1.png", 2);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./btPerks/btRollingHeal1.png", 2);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./btPerks/btRollingEarth.png", 2);
  }
  if (classPerks[14].classList.contains("checked")) {
    // no deck mods
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//nightshroud
let hasMinus1 = 0;
nsConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 4);
  }
  if (classPerks[3].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsMinus1Dark.png", 1);
    hasMinus1++;
  }
  if (classPerks[4].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsMinus1Dark.png", 1);
    hasMinus1++;
  }
  if (classPerks[5].classList.contains("checked") && hasMinus1 > 0) {
    hasMinus1--;
    RemoveXModifierCards("./nsPerks/nsMinus1Dark.png", 1);
    AddXModifierCards("./nsPerks/nsPlus1Dark.png", 1);
  }
  if (classPerks[6].classList.contains("checked") && hasMinus1 > 0) {
    hasMinus1--;
    RemoveXModifierCards("./nsPerks/nsMinus1Dark.png", 1);
    AddXModifierCards("./nsPerks/nsPlus1Dark.png", 1);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsPlus1Invisible.png", 1);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsPlus1Invisible.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsRollingMuddle.png", 3);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsRollingMuddle.png", 3);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsRollingHeal1.png", 2);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsRollingCurse.png", 2);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsRollingAddTarget.png", 1);
  }
  if (classPerks[14].classList.contains("checked")) {
    AddXModifierCards("./nsPerks/nsPlus1.png", 2);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//sawbones
sbConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 4);
  }
  if (classPerks[3].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 1);
    AddXModifierCards("./sbPerks/sbPlus2.png", 1);
  }
  if (classPerks[4].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 1);
    AddXModifierCards("./sbPerks/sbPlus2.png", 1);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbRollingPlus2.png", 1);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbRollingPlus2.png", 1);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbImmobilizePlus1.png", 1);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbImmobilizePlus1.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbRollingWound.png", 2);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbRollingWound.png", 2);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbRollingStun.png", 1);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbRollingSelfHealPlus3.png", 1);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbRollingSelfHealPlus3.png", 1);
  }
  if (classPerks[14].classList.contains("checked")) {
    AddXModifierCards("./sbPerks/sbRefreshItem.png", 1);
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

// sunkeeper
skConfirmPerksButton.onclick = () => {
  var classPerks = getClassPerks();
  
  if (classPerks[0].classList.contains("checked")) {
    RemoveXModifierCards(minus1Card, 2);
  }
  if (classPerks[1].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 4);
  }
  if (classPerks[2].classList.contains("checked")) {
    RemoveXModifierCards(minus2Card, 1);
    AddXModifierCards("./skPerks/skPlus0.png", 1);
  }
  if (classPerks[3].classList.contains("checked")) {
    RemoveXModifierCards(plus0Card, 1);
    AddXModifierCards("./skPerks/skPlus2.png", 1);
  }
  if (classPerks[4].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingPlus1.png", 2);
  }
  if (classPerks[5].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingPlus1.png", 2);
  }
  if (classPerks[6].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingSelfHeal1.png", 2);
  }
  if (classPerks[7].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingSelfHeal1.png", 2);
  }
  if (classPerks[8].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingStun.png", 1);
  }
  if (classPerks[9].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingLight.png", 2);
  }
  if (classPerks[10].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingLight.png", 2);
  }
  if (classPerks[11].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingStun.png", 1);
  }
  if (classPerks[12].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skRollingSelfShield1.png", 2);
  }
  if (classPerks[13].classList.contains("checked")) {
    AddXModifierCards("./skPerks/skPlus1.png", 2);
  }
  if (classPerks[14].classList.contains("checked")) {
    // no deck mods
  }
  defaultDeckArray = modDeckArray.slice();
  confirmPerks();
};

//Modal for showing what is in the played modifier deck

var zoomModal = document.getElementById("zoomModal");
var close = document.getElementsByClassName("close")[0];
playedModifiers.onclick = function () {
  zoomModal.style.display = "block";
};

close.onclick = function () {
  zoomModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == zoomModal) {
    zoomModal.style.display = "none";
  }
};

