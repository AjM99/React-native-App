import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';


const LOLScreen= ({navigation}) => 
{
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.AppDesign}>   This is thaa LOL Screen</Text>    
      <Button style={styles.AppDesign}
      title='profile!!!'
      onPress={() =>navigation.navigate("Profile")}
      /> 
    </View>
  );
}

export default LOLScreen;
const styles = StyleSheet.create({  
 
    AppDesign:
    {
      marginBottom:5,
      padding:5
    },
})