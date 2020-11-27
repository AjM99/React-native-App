// In App.js in a new project

import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';// for left slide
import MainTabScreen from './screens/MainTabScreen';


const Drawer = createDrawerNavigator();

const  App = () => 
{
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainTabScreen} />
      <Drawer.Screen name="Detail" component={MainTabScreen} />
      <Drawer.Screen name="UltraDetail" component={MainTabScreen} />
      <Drawer.Screen name="LOL" component={MainTabScreen} />
      <Drawer.Screen name="Profile" component={MainTabScreen} />
     </Drawer.Navigator>
      {/*<Stack.Navigator screenOptions={{       //screen options arediffent than stylesheet/style
      headerStyle:
      {
        backgroundColor:'#ffff00'
      },
      headerTintColor:'#000000',//header tint is title color
      headerTitleStyle:
      {
        fontWeight:'bold',
      }
      }}> 
        <Stack.Screen  //stack navi is for creating screen 
        name="Home" component={HomeScreen} 
        /> 
        <Stack.Screen  name="Detail" component={DetailScreen}  /> 
        <Stack.Screen  name="UltraDetail" component={UltraDetailScreen}  /> 
    </Stack.Navigator>*/}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({  
 
  AppDesign:
  {
    marginBottom:5,
    padding:5
  },
  
})
export default App;