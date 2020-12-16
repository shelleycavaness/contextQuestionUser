import React, {createContext, useState, useEffect} from 'react';
import getCurrentUser from './currentUserService';

// export const CurrentUserContext = createContext(undefined)
// export const CurrentUserContext = createContext(UserContextType)
// const UserContextType = {}
interface UserInterface {
  currentPlayer: CurrentPlayer
  setCurrentPlayer :(currentPlayer: CurrentPlayer) => void
}
type CurrentPlayer = {} | undefined
export const useContextDefaultValue: UserInterface = {
  currentPlayer:  {}
}
export const CurrentUserContext = createContext<UserInterface | null>(null)

/////////////////////////////////////////////////
export const PlayerContext = createContext<{Player:any,setPlayer:any}>({Player:undefined,setPlayer:undefined})
export default function PlayerProvider (props:any){
  const [Player, setPlayer] = useState({})  
 // the value is an object; and we want access to the user and the setter
  return <PlayerContext.Provider value={{Player, setPlayer}}>  
      {props.children}
      </PlayerContext.Provider>  
} 
/////////////////////////////////////
interface AppContextInterface {
  // name: string;
  // author: string;
  // url: string;
  profile :{}
}
export const AppCtx = React.createContext<AppContextInterface | null>(null);

// Provider in your app
export const sampleAppContext: AppContextInterface = {
  profile:{ image: "", username: "she" }
};