import React, { useState, useEffect } from "react";
import "../App.css";

function Home({ rapture }) {
  const [fadeInSections, setFadeInSections] = useState([false, false, false]);
  const [openVideoIndex, setOpenVideoIndex] = useState(null); // Keeps track of the open video index

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

  const embeddedYoutubeLinks = rapture
    ? [
        "https://www.youtube.com/embed/yiNgUEpVadk", 
        "https://www.youtube.com/embed/B8P6cZIqORY",
        "https://www.youtube.com/embed/hyur9r0ekZY"
      ]
    : [
        "https://www.youtube.com/embed/yYpAOY-Cy8s", 
        "https://www.youtube.com/embed/MENsqAFLK2s",
        "https://www.youtube.com/embed/u6qoupOSBak"
      ];

  const sectionTitles = rapture
    ? [
        "Welcome To Rapture",
        "Enjoy The Ambience",
        "Introducing.. Andrew Ryan"
      ]
    : [
        "Welcome To Columbia",
        "Can You Spot The SongBird",
        "All Rise For Our Fearless Leader"
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
      "When a soul is born again, what happens to the one left behind in the baptismal water? Is he simply... gone? Or does he exist in some other world, alive, with sin intact?"
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
      "The seed of the prophet shall sit the throne, and drown in flame the mountains of man"
    ),
    rapture ? (
      <>
        "We've taken notice of your work, and are wholly confident that your talents will be nothing short of squandered on the surface.
        And that is why we have brought you here.
        Meet me down at Fontaine Futuristics when you step out of the bathysphere, would you kindly, and we will explain the rest."
      </>
    ) : (
      "One man goes into the waters of baptism, a different man comes out, born again. But who is that man who lies submerged? Perhaps that swimmer is both sinner and saint, until he is revealed unto the eyes of man"
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
        {embeddedYoutubeLinks.map((link, index) => (
          <div
            key={index}
            className={`info-card-container ${rapture ? "info-card-rapture" : "info-card-columbia"} ${fadeInSections[index] ? "fade-in" : ""}`}
          >
            <h2
              className={sectionTitleClassName}
              onClick={() => setOpenVideoIndex(index === openVideoIndex ? null : index)} // Toggle open/close
            >
              {sectionTitles[index]}
            </h2>
            {(openVideoIndex === index || fadeInSections[index]) && (
              <div className={sectionContentClassName}>
                {sectionContents[index]}
                {openVideoIndex === index && (
                  <iframe
                    title={`Embedded Video ${index}`}
                    width="320"
                    height="180"
                    src={link}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


