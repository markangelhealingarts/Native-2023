
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import CustomButton4 from './CustomButton4';

const ModerateList=({navigation})=> {
  const Stack = createNativeStackNavigator();
  return (
    
    <View style={styles.container}>
       <Text style={{textAlignVertical: "center",textAlign: "center",}}>Choose Session</Text>
       <View style={styles.buttons}>
        <CustomButton4 title= "Level 2 Session 1"onPress={()=> navigation.navigate("L2S1")}/>
        <CustomButton4 title= "Level 2 Session 2"onPress={()=> navigation.navigate("L2S2")}/>
        <CustomButton4 title= "Level 2 Session 3"onPress={()=> navigation.navigate("L2S3")}/>
        <CustomButton4 title= "Level 2 Session 4"onPress={()=> navigation.navigate("L2S4")}/>
        <CustomButton4 title= "Level 2 Session 5"onPress={()=> navigation.navigate("L2S5")}/>
        <CustomButton4 title= "Level 2 Session 6"onPress={()=> navigation.navigate("L2S6")}/>
           
        
                 
        </View>
              </View>
            )}
     


<View style={{marginTop:50}}>
   
        
      </View>



const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'deepskyblue',
    },

  video: {
    width: 300,
    height: 500,
  },
  buttons: {
    margin: 16
  }
});
export default ModerateList