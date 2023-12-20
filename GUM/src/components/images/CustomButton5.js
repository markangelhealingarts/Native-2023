import React, { useState, useEffect } from 'react';
import { View, Button, Text, Touchable,StyleSheet,TouchableOpacity } from 'react-native';
const CustomButton5 = (props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  useEffect(() => {
    // Set the timeout when the component mounts
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 300000); // 300000 milliseconds = 5 minutes
    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
    <TouchableOpacity 
        onPress={()=> props.onPress?.() }
        style={styles.button}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
      {isButtonDisabled && <Text>Button will be enabled in 5 minutes</Text>}
      </View>
  );
};
export default CustomButton5;

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'darkseagreen',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ggg'
    }
})