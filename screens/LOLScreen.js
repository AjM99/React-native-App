import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';


const LOLScreen= ({navigation}) => 
{
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.TextDesign}>   This is thaa LOL Screen</Text>    
      <Button style={styles.TextDesign}
      title='profile!!!'
      onPress={() =>navigation.navigate("Profile")}
      /> 
    </View>
  );
}

export default LOLScreen;
const styles = StyleSheet.create({  
 
    TextDesign:
    {
      marginBottom:5,
      padding:5
    },
})