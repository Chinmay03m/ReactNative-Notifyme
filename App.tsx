/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import React, { useEffect } from 'react';

// import { useEffect } from 'react';
import { Alert, PermissionsAndroid, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import app from "@react-native-firebase/app"
import messaging, { firebase } from "@react-native-firebase/messaging"
const App = () => {

  async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

  const requestToken = async ()=>{
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log("token**", token)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    requestUserPermission()
    requestToken()
  }, [])


  // /** foreground notification */

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Push Notification for Vedaz internship</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:'center'
  },
});


export default App;
