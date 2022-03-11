// Menubar icon
const menuBar = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('.mobile-menu');
menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('change');
  mobileMenu.classList.toggle('show');
  if (menuBar.classList.contains('menu-bar-fix')) {
    menuBar.classList.remove('menu-bar-fix');
  }else {
    menuBar.classList.add('menu-bar-fix');
  }
});

// Guests
const guests = [
  {
    name: 'Ronnie Coleman',
    career: 'Professional Bodybuilder',
    description: 'Ronnie Dean Coleman (born May 13, 1964) is an American retired professional bodybuilder. The winner of the Mr. Olympia title for eight consecutive years, he is regarded as one of the greatest bodybuilders',
    image: 'images/coleman.jpg',
  },
  {
    name: 'Jay Cutler',
    career: 'Professional Bodybuilder',
    description: 'Jason Isaac Cutler (born August 3, 1973) is a retired American professional bodybuilder. An IFBB pro, he is a four-time Mr. Olympia winner, having won in 2006, 2007, 2009, and 2010.',
    image: 'images/cutler.jpg',
  },
  {
    name: 'Phil Heath',
    career: 'Professional Bodybuilder, wrestler',
    description: 'Phillip Jerrod Heath (born December 18, 1979) is an American IFBB professional bodybuilder. He is a seven-time Mr. Olympia winner, having won the competition every year from 2011 to 2017. His latest victory ',
    image: 'images/heath.jpg',
  },
  {
    name: 'Kai Greene',
    career: 'Professional bodybuiler, artist and actor',
    description: 'Leslie Kai Greene (born July 12, 1975), better known as Kai Greene or Kai L. Greene, is an American personal trainer, artist, actor, and retired professional bodybuilder. He came in second place at the ',
    image: 'images/greene.jpg',
  },
  {
    name: 'Jeff Seid',
    career: 'Fitness Model and actor',
    description: 'Jeff Seid (born 12 June 1994) is an American Bodybuilder, Fitness Model, YouTuber, and Social Media Sensation. He is known for participating in the youngest IFBB Professional and Mr. Olympia competition. ',
    image: 'images/seid.jpg',
  },
  {
    name: 'Jeremy Buendia',
    career: 'Fitness Model and bodybuilder',
    description: 'Jeremy Buendia has been competing professionally within the International Federation of Bodybuilding and Fitness (IFBB) since 2013, where he placed 2nd in the Mr. Olympia Mens Physique class. He ',
    image: 'images/buendia.jpg',
  },
];

function guestsCards(info) {
  return `<article class='guest'>
  <div class='img-container'>
    <img src="${info.image}" alt='guest-image'></img>
  </div>
  <div class='info-section'>
    <h2 class='colorMain'>${info.name}</h2>
    <p class='career'>${info.career}</p>
    <hr align='left'>
    <p class='description'>${info.description}</p>
  </div>
</article>`;
}

const guestCardsContainer = document.querySelector('.guests-container');
if (guestCardsContainer) {
  for (let i = 0; i < guests.length; i += 1) {
    guestCardsContainer.innerHTML += guestsCards(guests[i]);
  }
}