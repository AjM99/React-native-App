
import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const BookMarkScreen = () => {
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >This    is thaa Bookmark Screen</Text>    

      <Button style={styles.TextDesign}
      title='click here !!!'
      onPress={() =>alert("button pressed")}
      /> 
    </View>
  );
}

export default BookMarkScreen;

const styles = StyleSheet.create({  
 
    TextDesign:
    {
      marginBottom:5,
      padding:5
    },
})