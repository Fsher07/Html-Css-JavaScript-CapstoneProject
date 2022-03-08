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
    name: 'Вася',
    career: 'Программист',
    description: 'Вася программист, он очень любит писать код',
    image: 'img/guest-1.jpg',
  },
  {
    name: 'Вася',
    career: 'Программист',
    description: 'Вася программист, он очень любит писать код',
    image: 'img/guest-1.jpg',
  },
  {
    name: 'Вася',
    career: 'Программист',
    description: 'Вася программист, он очень любит писать код',
    image: 'img/guest-1.jpg',
  },
  {
    name: 'Вася',
    career: 'Программист',
    description: 'Вася программист, он очень любит писать код',
    image: 'img/guest-1.jpg',
  },
  {
    name: 'Вася',
    career: 'Программист',
    description: 'Вася программист, он очень любит писать код',
    image: 'img/guest-1.jpg',
  },
  {
    name: 'Вася',
    career: 'Программист',
    description: 'Вася программист, он очень любит писать код',
    image: 'img/guest-1.jpg',
  }
]