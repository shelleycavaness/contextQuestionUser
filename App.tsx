
import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import CurrentUserProvider, { AppCtx, CurrentUserContext, sampleAppContext, useContextDefaultValue } from './currentUserContext';
import getCurrentUser, {getPlayerAxios} from './currentUserService';
import PlayerProvider, { PlayerContext } from './currentUserContext'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // const [currentPlayer, setCurrentPlayer] = useState(useContextDefaultValue)  
  const {Player, setPlayer}  = React.useContext(PlayerContext)

  useEffect(() => {
    async function fetchPlayer(){
        try{
          // await getPlayerAxios()
          await getCurrentUser()
          setPlayer(await getCurrentUser());  
        } catch(err){
          console.log('err in player ╮(─▽─)╭       :>> ', err);
        }
      }
    fetchPlayer()  
  }, [])
  useEffect(()=>{
  console.log('test context :>> ', setPlayer);
  console.log('test context :>> ', Player);

  }, [Player])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
         <PlayerProvider>
      
         {/* <AppCtx.Provider value={sampleAppContext}> */}
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        {/* </AppCtx.Provider> */}
        </PlayerProvider>
  
      </SafeAreaProvider>
    );
  }
}
