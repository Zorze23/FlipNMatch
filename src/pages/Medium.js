import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Easy.css';
import bra  from '../assets/Images/Bra.webp';
import chi from '../assets/Images/Chi.webp';
import luc  from '../assets/Images/Luc.webp';
import tri from '../assets/Images/tri.webp';
import can  from '../assets/Images/Can.webp';
import cobweb  from '../assets/Images/cobweb.png';

const IMAGES = { tri, can, bra, chi, luc };

export default function Easy() {

  const navigate = useNavigate();
  const gameRef  = useRef(null);

  useEffect(() => {

    class MixOrMatch {
      constructor(totalTime, cards, navigatePg) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.navigate   = navigatePg;
        this.timerEl = document.getElementById('time-remaining');
        this.flipsEl = document.getElementById('flips');
      }

      startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        this.flipsEl.textContent = this.totalClicks;
        this.timerEl.textContent = this.timeRemaining;
        this.hideCards();
        this.shuffleCards();
        setTimeout(() => {
          this.busy = false;
          this.countdown = this.startCountdown();
        }, 500);
      }

      startCountdown() {
        return setInterval(() => {
          this.timeRemaining--;
          this.timerEl.textContent = this.timeRemaining;
          if (this.timeRemaining === 0) this.gameOver();
        }, 1000);
      }

      hideCards() {
        this.cardsArray.forEach(c => c.classList.remove('visible', 'matched'));
      }

      flipCard(card) {
        if (this.canFlipCard(card)) {
          this.totalClicks++;
          this.flipsEl.textContent = this.totalClicks;
          card.classList.add('visible');
          if (!this.cardToCheck) {
            this.cardToCheck = card;
          } else {
            this.checkForCardMatch(card);
          }
        }
      }

      checkForCardMatch(card) {
        const match = this.getCardType(card) === this.getCardType(this.cardToCheck);
        match ? this.cardMatch(card, this.cardToCheck) : this.cardMismatch(card, this.cardToCheck);
        this.cardToCheck = null;
      }

      getCardType(card) {
        return card.querySelector('.card-front').dataset.value;
      }

      cardMatch(c1, c2) {
        c1.classList.add('matched');
        c2.classList.add('matched');
        this.matchedCards.push(c1, c2);
        if (this.matchedCards.length === this.cardsArray.length) this.victory();
      }

      cardMismatch(c1, c2) {
        this.busy = true;
        setTimeout(() => {
          c1.classList.remove('visible');
          c2.classList.remove('visible');
          this.busy = false;
        }, 800);
      }

      canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
      }

      shuffleCards() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          this.cardsArray[i].style.order = j;
          this.cardsArray[j].style.order = i;
        }
      }

      gameOver() {
        clearInterval(this.countdown);
        this.navigate('/gameover2');
        
      }

      victory() {
        clearInterval(this.countdown);
        this.navigate('/Win2');
      }
    }

    const overlays = Array.from(document.getElementsByClassName('overlay-text'));
    const cards = Array.from(document.getElementsByClassName('card'));
    overlays[0].classList.add('visible');

    gameRef.current = new MixOrMatch(60, cards, navigate);


    overlays.forEach(ov => {
      ov.addEventListener('click', () => {
        ov.classList.remove('visible');
        gameRef.current.startGame();
      });
    });
    cards.forEach(card => card.addEventListener('click',()=>gameRef.current.flipCard(card)));
  }, [navigate]);


const cardSet = [
    'tri','tri',
    'can','can',
    'bra','bra',
    'chi','chi',
    'luc','luc',
    'tri','tri',
    'can','can',
    'bra','bra'
  ];



  return (
    <>
      <header className="top-bar">
      <button className="back-btn" onClick={() => (window.location.href = '/')} >Back</button>
      </header>
      <h1 className="page-title">FLOP N MATCH</h1>

      {/* Overlays */}
      <div className="overlay-text">Click to Start</div>
      <div id="GAME-OVER-TEXT" className="overlay-text">
        GAME OVER
        <div>
          <span className="overlay-text-small">Click to Restart</span>
        </div>
      </div>
      <div id="win-text" className="overlay-text">
        GOOD GAME
        <span className="overlay-text-small">Click to Restart</span>
      </div>

      {/* Info bar + grid */}
      <div className="game-container">
        <div className="game-info-container">
          <div className="game-info">Time : <span id="time-remaining">60</span></div>
          <div className="game-info">Flips : <span id="flips">0</span></div>
        </div>

        {cardSet.map((val, idx) => (
          <div className="card" key={idx}>
            <div className="card-back card-face">
              <img src={cobweb} className="cob-web" alt="cobweb"/>
            </div>
            <div className="card-front card-face" id='img' data-value={val}>
              <img src={IMAGES[val]} className="premier" alt={val}/>
            </div>
          </div>
        ))}
      </div>
    </>
    
  );
}