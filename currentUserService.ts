import React, { useEffect, useState, useContext } from 'react';
import PlayerProvider, { PlayerContext } from './currentUserContext';
import axios from 'axios';
// const url =  ngrok.Ngrok + '/api/players'
const url =  'http://localhost:3000/api/profiles/rim'
const url1 =  'http://localhost:3000/api/profiles/gaby'

export default async function getCurrentUser(){
  const  currentPlayer = await fetch(url1) 
  .then((reponse) => reponse.json())
  .then( (responseJson) =>  {
      return responseJson
     })
  .catch((error) => console.error('error in catch ----------',error))
  console.log('currentPlayer&&&&&&&&&&&&&&&&&&&& :>> ', currentPlayer);

  return currentPlayer
 }

 export async function getPlayerAxios() {
  const {Player, setPlayer}  = useContext(PlayerContext)

  await axios.get(url1)
  .then(function (response) {
    console.log('////////////',response.data);
    console.log('Player', Player)
    setPlayer(response.data)
  })
  .catch(function (error) {
    console.log('eeeeeeeeeeeeeeeeeror',error);
  });
 }
