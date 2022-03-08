// Menubar icon
const menuBar = document.querySelectorAll('.menu-bar');
function changeMenuBarIcon() {
  for (let i = 0; i < menuBar.length; i += 1) {
    menuBar[i].classList.toggle('change');
  }
}

// Guests
const guests = [
  {
    name: 'Ronnie Coleman',
    career: 'Professional Bodybuilder',
    description: 'Ronnie Dean Coleman (born May 13, 1964) is an American retired professional bodybuilder. The winner of the Mr. Olympia title for eight consecutive years, he is regarded as one of the greatest bodybuilders of all time. Alongside his eight Mr. Olympia wins, he held the record for most wins as an IFBB professional with 26 titles until it was broken by Dexter Jackson.',
    image: 'images/coleman.jpg',
  },
  {
    name: 'Jay Cutler',
    career: 'Professional Bodybuilder',
    description: 'Вася программист, он очень любит писать код',
    image: 'images/cutler.jpg',
  },
  {
    name: 'Phil Heath',
    career: 'Программист',
    description: 'Вася программист, он очень любит писать код',
    image: 'img/images/heath.jpg',
  },
  {
    name: 'Kai Greene',
    career: 'Программист',
    description: 'Вася программист, он очень любит писать код',
    image: 'images/greene.jpg',
  },
  {
    name: 'Jeff Seid',
    career: 'Jeremy Buendia is an American professional bodybuilder who competes in the IFBB Mens Physique Division. He is a four time Olympia Champion.',
    description: 'Вася программист, он очень любит писать код',
    image: 'images/seid.jpg',
  },
  {
    name: 'Jeremy Buendia',
    career: 'Jeremy Buendia is an American professional bodybuilder who competes in the IFBB Mens Physique Division. He is a four time Olympia Champion.',
    description: 'Jeremy Buendia has been competing professionally within the International Federation of Bodybuilding and Fitness (IFBB) since 2013, where he placed 2nd in the Mr. Olympia Mens Physique class. He subsequently earned the Mens Physique Olympia title in 2014, 2015, 2016, and 2017.[2] He placed 4th in the Mens Physique Olympia 2018',
    image: 'images/buendia.jpg',
  }
]