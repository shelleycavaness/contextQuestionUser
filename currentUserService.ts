import React, { useEffect, useState, useContext } from 'react';

const url =  'http://localhost:3000/api/profiles/rim'
const url1 =  'http://localhost:3000/api/profiles/gigi'

const url2 =  'http://localhost:3000/api/player'
import PlayerProvider, { PlayerContext } from './currentUserContext'
// const {Player, setPlayer}  = React.useContext(PlayerContext)
import axios from 'axios';
// const url =  ngrok.Ngrok + '/api/players'
// import AsyncStorage  from '@react-native-async-storage/async-storage';
// import { useState } from 'react';


export default async function getCurrentUser(){

  const  currentPlayer = await fetch(url) 
  .then((reponse) => reponse.json())
  .then( (responseJson) =>  {
      return responseJson
     })
  .catch((error) => console.error('error in catch ----------',error))
  console.log('currentPlayer&&&&&&&&&&&&&&&&&&&& :>> ', currentPlayer);

  return currentPlayer
 }

 export async function getPlayer() {
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
