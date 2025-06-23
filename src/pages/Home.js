import React from 'react';
import { Link } from 'react-router-dom';

import easy from '../assets/Images/easy.jpg';
import medium     from '../assets/Images/Medium.jpg';
import hard    from '../assets/Images/Hardbutton.jpg';

import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <h1 className="title">FLIP N MATCH</h1>

      <section className="level">
        <h2 className="subtitle">Choose your difficulty level</h2>

        <section className="cards">
          <Link to="/easy" className="card easy">
            <img src={easy} alt="Easy icon" />
          </Link>

          <Link to="/medium" className="card medium">
            <img src={medium} alt="Medium icon" />
          </Link>

          <Link to="/hard" className="card hard">
            <img src={hard} alt="Hard icon" />
          </Link>
        </section>
      </section>
    </main>
  );
}
