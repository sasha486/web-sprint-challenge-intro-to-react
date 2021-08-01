// Write your Character component here
import React from "react";
import styled from 'styled-components'
import CharacterContainer from "./CharacterContainer";
import Loader from './Loader';




const Character = ({characters, isLoading}) => {

  return (
isLoading? (
    <Loader/>
      ):
       <ul className = "list">
      {characters.map((character) => (
        <li className = 'char-list' key={character.name}>
        
          
        
              <h3>{character.name}</h3>
              
              <p> {character.birth_year}</p>
           
         
     
        </li>
      ))}
    </ul>

   
   )

  }


export default Character