
import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const SettingScreen = () => {
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >This is thaa Setting Screen</Text>    

      <Button style={styles.TextDesign}
      title='click here !!!'
      onPress={() =>alert("button pressed")}
      /> 
    </View>
  );
}

export default SettingScreen;
const styles = StyleSheet.create({  
 
    TextDesign:
    {
      marginBottom:15,
      marginTop:15,
      padding:15
    },
});