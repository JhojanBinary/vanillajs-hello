document.addEventListener('DOMContentLoaded', function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const excuseParagraph = document.getElementById('excuse');
  const generateExcuseButton = document.getElementById('generate-excuse');

  generateExcuseButton.addEventListener('click', function() {
    let randomWhoIndex = Math.floor(Math.random() * who.length);
    let randomActionIndex = Math.floor(Math.random() * action.length);
    let randomWhatIndex = Math.floor(Math.random() * what.length);
    let randomWhenIndex = Math.floor(Math.random() * when.length);

    let randomExcuse = who[randomWhoIndex] + ' ' + action[randomActionIndex] + ' ' + what[randomWhatIndex] + ' ' + when[randomWhenIndex];

    excuseParagraph.textContent = randomExcuse;
  });
});
