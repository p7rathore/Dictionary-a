import React from "react";

const Menings = ({ definition1, definition2 }) => {
  return (
    <>
      <div className="Menings-main">
        <div className="Menings1">
          <p className="Menings-text1">{definition1}</p>
        </div>

        <div className="Menings2">
          <p className="Menings-text1">{definition2}</p>
        </div>
      </div>
    </>
  );
};

export default Menings;
