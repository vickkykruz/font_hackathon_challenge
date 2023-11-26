// let accordion = document.querySelector('.accordionBox'),
//     accordionItem = document.querySelectorAll('.accordionItem');
//     accordionItem.forEach(elem => {
//       elem.addEventListener('click', function(e) {
//         e.srcElement.parentElement.classList.toggle('active');
//       });
//     });

let accordion = document.querySelector('.accordionBox'),
  accordionItem = document.querySelectorAll('.accordionItem');

accordionItem.forEach(elem => {
  elem.addEventListener('click', function(e) {
    // Remove 'active' class from all accordion items
    accordionItem.forEach(item => {
      if (item !== e.currentTarget) {
        item.classList.remove('active');
      }
    });

    // Toggle 'active' class on the clicked accordion item
    e.currentTarget.classList.toggle('active');
  });
});
