import * as React from 'react';
import { StyleSheet } from 'react-native';
import {ActionListContext} from '../listContext'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/api/playing'

export default function TabOneScreen() {
  const [actionList, setActionList] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((responseJson) => setActionList(Object.values(responseJson)))
//       .catch((error) => console.error("error in catch ----------", error));
//    }, [])
// console.log('actionList :>> ', actionList);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
