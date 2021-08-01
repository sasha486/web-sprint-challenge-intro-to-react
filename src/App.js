import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import Character from "./components/Character";
import CharacterContainer from "./components/CharacterContainer";

const App = () => {
  const [baseURL] = useState("https://swapi.dev/api/people/");
  const [characters, setCharacters] = useState([]);
   const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.results);
         setLoading(false);
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <CharacterContainer>
          <Character characters={characters} isLoading={isLoading} />
        </CharacterContainer>
      </div>
    </>
  );
};

export default App;
