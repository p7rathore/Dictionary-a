import React, { useState } from "react";
import Search from "../commponents/Search";
import Speek from "../commponents/speek";
import Menings from "../commponents/Menings";
import Lodding from "../commponents/Lodding";
const Dictinory = () => {
  const [name, setName] = useState([""]);
  const [noune, setNoune] = useState([""]);
  const [phonetic, setPhonetic] = useState([""]);
  const [sound, setSound] = useState([""]);
  const [definition1, setDefinition1] = useState([""]);
  const [definition2, setDefinition2] = useState([""]);
  const [lodding, setLodding] = useState(false);
  const [error, setError] = useState([""]);
  const [search, setSearch] = useState(" ");
  const Featchdata = () => {
    setLodding(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.title) {
          setError(result.title);
        } else {
          setError("");
        }

        setName(result[0].word);
        setNoune(result[0].meanings[0].partOfSpeech);
        setPhonetic(result[0].phonetic);
        setSound(result[0].phonetics[0].audio);
        setDefinition1(result[0].meanings[0].definitions[0].definition);
        setDefinition2(result[0].meanings[0].definitions[0].example);
        setLodding(false);
      });
  };

  const searchWords = () => {
    Featchdata();
  };

  return (
    <>
      <div className="dictionary">
        <Search searchWords={searchWords} setSearch={setSearch} error={error} />
        {lodding ? (
          <>
            <Lodding />
          </>
        ) : (
          <>
            <Speek
              name={name}
              noune={noune}
              phonetic={phonetic}
              sound={sound}
            />
            <Menings definition1={definition1} definition2={definition2} />
          </>
        )}
      </div>
    </>
  );
};

export default Dictinory;
