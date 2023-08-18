import React, { useState, useEffect } from "react";
import "../App.css";

function Home({ rapture }) {
  const [fadeInSections, setFadeInSections] = useState([false, false, false]);

  useEffect(() => {
    // Set the fade-in animations with delays for each section
    const timeouts = [
      setTimeout(() => setFadeInSections((prev) => [true, prev[1], prev[2]]), 0),    // Fade-in Section 1 immediately
      setTimeout(() => setFadeInSections((prev) => [prev[0], true, prev[2]]), 1000), // Fade-in Section 2 after 1 second
      setTimeout(() => setFadeInSections((prev) => [prev[0], prev[1], true]), 2000)  // Fade-in Section 3 after 2 seconds
    ];
  
    // Clear the timeouts on unmount
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  const titleClassName = rapture ? "title-rapture" : "title-columbia";
  const subtitleClassName = rapture ? "subtitle-rapture" : "subtitle-columbia";
  const sectionTitleClassName = rapture ? "section-title-rapture" : "section-title-columbia";
  const sectionContentClassName = rapture ? "section-content-rapture" : "section-content-columbia";

  const youtubeLinks = rapture
  ? [
      "https://www.youtube.com/watch?v=yiNgUEpVadk", 
      "https://www.youtube.com/watch?v=B8P6cZIqORY",
      "https://www.youtube.com/watch?v=xR-xJKOAq0o"
    ]
  : [
      "https://www.youtube.com/watch?v=yYpAOY-Cy8s", 
      "https://www.youtube.com/watch?v=MENsqAFLK2s",
      "https://www.youtube.com/watch?v=H0BaglQSn4k"
    ];


  const sectionContents = [
    rapture ? (
      <>
        I am Andrew Ryan, and I'm here to ask you a question.
        Is a man not entitled to the sweat of his brow?
        "No!" says the man in Washington, "It belongs to the poor."
        "No!" says the man in the Vatican, "It belongs to God."
        "No!" says the man in Moscow, "It belongs to everyone."
      </>
    ) : (
      "I am Comstock, and I'm here to ask you a question"
    ),
    rapture ? (
      <>
        I rejected those answers; instead, I chose something different.
        I chose the impossible. I chose... Rapture.
        A city where the artist would not fear the censor.
        Where the scientist would not be bound by petty morality.
        Where the great would not be constrained by the small!
        And with the sweat of your brow, Rapture can become your city as well.
      </>
    ) : (
      "I am Comstock, and I still want to ask you a question"
    ),
    rapture ? (
      <>
        "We've taken notice of your work, and are wholly confident that your talents will be nothing short of squandered on the surface.
        And that is why we have brought you here.
        Meet me down at Fontaine Futuristics when you step out of the bathysphere, would you kindly, and we will explain the rest."
      </>
    ) : (
      "I am Comstock, and if you ignore me once again, so help me god you pinkyless bastard, I will tear a hole in this multiverse you call home"
    )
  ];

  return (
    <div className="home-container">
      <h1 className={titleClassName}>
        {rapture ? "Welcome to Rapture." : "Welcome to Columbia."}
      </h1>
      <p className={subtitleClassName}>
        {rapture ? "No Gods or Kings. Only Man." : "Another Ark, for Another Time."}
      </p>

      <div className="info-sections">
        {youtubeLinks.map((link, index) => (
          <div
            key={index}
            className={`info-card-container ${rapture ? "info-card-rapture" : "info-card-columbia"} ${fadeInSections[index] ? "fade-in" : ""}`}
          >
            <h2 className={sectionTitleClassName}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {rapture ? `Rapture Section ${index + 1}` : `Columbia Section ${index + 1}`}
              </a>
            </h2>
            <p className={sectionContentClassName}>
              {sectionContents[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;






