document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  const choices = [ 'rock', 'paper', 'scissors' ];

  // Can I group the buttons under one event listener?
  const rock = document.querySelector('#rock');
  rock.addEventListener('click', (event) => {
    playGame(event.target.value);
  });
  const paper = document.querySelector('#paper');
  paper.addEventListener('click', (event) => {
    playGame(event.target.value);
  });
  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', (event) => {
    playGame(event.target.value);
  });

  function playGame(button) {
    const playerChoice = assignPlayerChoice(button);
    document.querySelector('#players-choice').textContent = `You chose ${playerChoice}`;
    const compChoice = assignCompChoice(button);
    document.querySelector('#computers-choice').textContent = `Computer chose ${compChoice}`;
    selectWinner(playerChoice, compChoice);
  };

  function assignPlayerChoice(button) {
    return button;
  };

  function assignCompChoice(button) {
    let compChoices = [...choices]; // what is this syntax called?
    compChoices.splice(choices.indexOf(button), 1);
    return compChoices[Math.floor(Math.random() * 2)];
  };

  function selectWinner(player, computer) {
    if (player === 'rock' && computer === 'scissors'
        || player === 'paper' && computer === 'rock'
        || player === 'scissors' && computer === 'paper') {
          document.querySelector('#result').textContent = 'You win!'
        } else {
          document.querySelector('#result').textContent = 'You lose.'
        };
  };

});
