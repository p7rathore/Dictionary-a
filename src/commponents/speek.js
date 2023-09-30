import React from "react";

const speek = ({ name, noune, phonetic, sound }) => {
  var audio = new Audio(sound);

  const SoudPlay = () => {
    // console.log(audio)
    if (sound !== "") {
      audio.play();
    } else {
      alert("audio not supported");
    }
  };

  return (
    <>
      <div className="Speek">
        <div className="text">
        
          <h1 className="name">{name}</h1>
          <div className="noun-text">
            <p className="noune">{noune}</p>
            <p className="noune">{phonetic}</p>
          </div>
        </div>
        <div className="Speek-text-btn" onClick={SoudPlay}>
          <button className="speek-btn">
            <i className="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default speek;
