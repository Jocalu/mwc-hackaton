import React from 'react';
import './Landing.scss';

function Landing() {
  return (
    <main className="landing">
      <header>
        <p>
          Ya tienes cuenta?
          <span>Inicia sesión</span>
        </p>
      </header>
      <section>
        <h1>¡Únete a la comunidad!</h1>
        <p>Para empezar, dinos que cuenta te gustaría abrir</p>
        <div>Developers</div>
        <div>Business</div>
      </section>
    </main>
  );
}

export default Landing;
