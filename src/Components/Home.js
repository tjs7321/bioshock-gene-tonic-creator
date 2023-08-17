import React from "react";
import "../App.css";

function Home({ rapture }) {
  const titleClassName = rapture ? "title-rapture" : "title-columbia";
  const subtitleClassName = rapture ? "subtitle-rapture" : "subtitle-columbia";
  const sectionTitleClassName = rapture ? "section-title-rapture" : "section-title-columbia";
  const sectionContentClassName = rapture ? "section-content-rapture" : "section-content-columbia";

  return (
    <div className="home-container">
      <h1 className={titleClassName}>
        {rapture ? "Welcome to Rapture." : "Welcome to Columbia."}
      </h1>
      <p className={subtitleClassName}>
        {rapture ? "No Gods or Kings. Only Man." : "Another Ark, for Another Time."}
      </p>
      
      <div className="info-sections">
        <div className={rapture ? "info-card-rapture" : "info-card-columbia"}>
          <h2 className={sectionTitleClassName}>
            {rapture ? "Rapture Section 1" : "Columbia Section 1"}
          </h2>
          <p className={sectionContentClassName}>
            {rapture ? (
              <>
                I am Andrew Ryan, and I'm here to ask you a question.
                Is a man not entitled to the sweat of his brow?
                'No!' says the man in Washington, 'It belongs to the poor.
                'No!' says the man in the Vatican, 'It belongs to God.
                'No!' says the man in Moscow, 'It belongs to everyone.'
              </>
            ) : (
              "I am Comstock, and I'm here to ask you a question"
            )}
          </p>
        </div>

        <div className={rapture ? "info-card-rapture" : "info-card-columbia"}>
          <h2 className={sectionTitleClassName}>
            {rapture ? "Rapture Section 2" : "Columbia Section 2"}
          </h2>
          <p className={sectionContentClassName}>
          {rapture ? (
              <>
              I rejected those answers; instead, I chose something different.
              I chose the impossible. I chose... Rapture.
              A city where the artist would not fear the censor.
              Where the scientist would not be bound by petty morality.
              Where the great would not be constrained by the small!
              And with the sweat of your brow, Rapture can become your city as well.'
              </>
            ) : (
              "I am Comstock, and I still want to ask you a question"
            )}
          </p>
        </div>

        <div className={rapture ? "info-card-rapture" : "info-card-columbia"}>
          <h2 className={sectionTitleClassName}>
            {rapture ? "Rapture Section 3" : "Columbia Section 3"}
          </h2>
          <p className={sectionContentClassName}>
          {rapture ? (
              <>
                "We've taken notice of your work, and are wholly confident that your talents will be nothing short of squandered on the surface.
                 And that is why we have brought you here. 
                 Meet me down at Fontaine Futuristics when you step out of the bathysphere, would you kindly, and we will explain the rest."
              </>
            ) : (
              "I am Comstock, and if you ignore me once again, so help me god you pinkyless bastard, I will tear a hole in this multiverse you call home"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;




