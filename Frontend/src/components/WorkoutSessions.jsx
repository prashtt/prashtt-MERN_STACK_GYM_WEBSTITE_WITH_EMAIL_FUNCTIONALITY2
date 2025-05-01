import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      {/* TOP WORKOUT SESSION */}
      <div className="wrapper">
        <div>
          <h1>TOP WORKOUT SESSION</h1>
          <p>
            Push your limits and unlock your true strength with our top-rated workout sessions
            designed to energize and inspire.
          </p>
        </div>
        <img src="img11.jpg" alt="workout" />
        <img src="img12.jpg" alt="workout" />
      </div>

      {/* FEATURED BOOTCAMPS */}
      <h2 className="featured-heading">FEATURED BOOTCAMPS</h2>
      <p className="bootcamp-subtitle">
        Join our featured bootcamp and experience the ultimate blend of intense training,
        community spirit, and unstoppable motivation.
      </p>

      <div className="bootcamps">
        <div>
          <h4>Ignite Your Inner Fire</h4>
          <p>
            Challenge yourself with workouts that spark passion, build discipline, and drive lasting results.
          </p>
        </div>
        <div>
          <h4>Train Hard, Stay Strong</h4>
          <p>
            Every session is a step closer to the strongest version of yourself. Never settle, keep moving!
          </p>
        </div>
        <div>
          <h4>Unleash Your Potential</h4>
          <p>
            Break barriers and redefine what's possible with tailored programs built just for you.
          </p>
        </div>
        <div>
          <h4>Strength in Every Move</h4>
          <p>
            From your first rep to your final sprint, feel the power of focused, high-energy training.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;



