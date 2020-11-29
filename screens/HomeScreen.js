import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const HomeScreen =({navigation}) => 
{
  return (                // this will have things that will appear screen
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.TextDesign}>This is thaa Home Screen</Text>  
      <Button style={styles.ButtonDesign}
      title='press    to open Detail !!'
      onPress={() =>navigation.navigate("Detail")//the name Detail should be same as screeen
               }
      />
    </View>
  );
}


export default HomeScreen;
const styles = StyleSheet.create({  
 
    TextDesign:
    {
      marginBottom:5,
      padding:5
    },

    ButtonDesign:
    {
      marginBottom:5,
      padding:5
    },

})