import React from 'react';
import { Link } from 'react-router-dom';

import easy from '../assets/Images/easy.png';
import medium     from '../assets/Images/medium.png';
import hard    from '../assets/Images/hard.webp';

import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <h1 className="title">FLOP N MATCH</h1>

      <section className="level">
        <h2 className="subtitle">Choose your difficulty level</h2>

        <section className="cards">
          <Link to="/easy" className="card easy">
            <span className="label">EASY</span>
            <img src={easy} alt="Easy icon" />
            <span className="label">EASY</span>
          </Link>

          <Link to="/medium" className="card medium">
            <span className="label">MEDIUM</span>
            <img src={medium} alt="Medium icon" />
            <span className="label">MEDIUM</span>
          </Link>

          <Link to="/hard" className="card hard">
            <span className="label">HARD</span>
            <img src={hard} alt="Hard icon" />
            <span className="label">HARD</span>
          </Link>
        </section>
      </section>
    </main>
  );
}