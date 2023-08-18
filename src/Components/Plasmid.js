import React, {useState} from "react";

function Plasmid({ rapture, title, tagline, effect, image, video }) {

  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  function openModal(){
    setModal(!modal);
  };

  function spinner() {
    setVideoLoading(!videoLoading);
  };


  return (
    <div
    onClick={openModal}
    className={rapture?"plasmidCardRapture":"plasmidCardColumbia"}>
      <p className={rapture?"plasmidTitleRapture":"plasmidTitleColumbia"}>{rapture ? title.rapture : title.columbia}</p>
      <img className={rapture?"plasmidImageRapture":"plasmidImageColumbia"}
        src={rapture ? image.rapture : image.columbia}
        alt="plasmid/vigor icon"
      />
      <p className={rapture?"taglineRapture":"taglineColumbia"}>{rapture ? tagline.rapture : tagline.columbia}</p>
      {/* <p className="tagline">{rapture ? effect.rapture : effect.columbia}</p> */}
      {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <button
                  className={rapture?"modal__closeRapture":"modal__closeColumbia"}
                  arial-label="Close modal"
                  onClick={setModal}
                >X</button>
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <button
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className={rapture?"modal__video-styleRapture":"modal__video-styleColumbia"}
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={rapture ? video.rapture : video.columbia}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
    </div>
  );
}

export default Plasmid;
