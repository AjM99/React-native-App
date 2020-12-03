// In App.js in a new project

import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';// for left slide
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from "./screens/Drawer";

const Drawer = createDrawerNavigator();

const  App = () => 
{
  return (
    <NavigationContainer>
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MainTabScreen} />
      <Drawer.Screen name="Wall" component={MainTabScreen} />
      <Drawer.Screen name="Notification" component={MainTabScreen} />
      <Drawer.Screen name="Explore" component={MainTabScreen} />
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