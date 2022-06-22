import React from 'react';

export default function Header() {
  return (
    <section className="header">
      <img
        className="header--img"
        src="https://stackblitz.com/files/react-ls7hs6/github/hermionearcher/airbnb-experiences-clone/master/src/Group 77.png"
      />
      <div className="header--text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activites led by one-of-a-kind hosts -all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
