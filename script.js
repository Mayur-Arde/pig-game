'use strict';

// starting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// starting condition
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
let scores , currentScore , currentPlayer , playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();
// swtich player function
const swtich = function(){
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0 ;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    // toggle the bg/
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Roll the dice function
btnRoll.addEventListener('click',function (){
  if (playing){
    // generate random number
      const dice = Math.trunc(Math.random() * 6) + 1;
      console.log(dice);
      
      // display dice
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;
      
      // check the dice number 
      if (dice !== 1){
        // add to current score 
        currentScore += dice;
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore;
      }else{
        // switch player 
        swtich();
      }
    };
  });


// hold currentScore function
btnHold.addEventListener('click',function (){
  if (playing){
    // diplay currentScore to final score
    scores[currentPlayer] += currentScore;
      // console.log(scores[currentPlayer]);
    document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
  
    // check score is <= 100 to finish game 
    if (scores[currentPlayer] >= 100){
      playing = false;
      diceEl.classList.add('hidden');
  
      document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
    }else{
      // swtich player
      swtich();
    }
  }

});
 
// restart button 
btnNew.addEventListener('click',init);