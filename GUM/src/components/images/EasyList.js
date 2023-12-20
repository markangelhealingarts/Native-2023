
import {View,Text,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CustomButton4 from './CustomButton4';
const EasyList=({navigation})=> {

  const Stack = createNativeStackNavigator();

  return (
    
    
    
    
    <View style={styles.container}>
       <Text style={{textAlignVertical: "center",textAlign: "center",}}>Choose Session</Text>
       <View style={styles.buttons}>
        <CustomButton4 title= "Level 1 Session 1"onPress={()=> navigation.navigate("L1S1")}/>
        <CustomButton4 title= "Level 1 Session 2"onPress={()=> navigation.navigate("L1S2")}/>
        <CustomButton4 title= "Level 1 Session 3"onPress={()=> navigation.navigate("L1S3")}/>
        <CustomButton4 title= "Level 1 Session 4"onPress={()=> navigation.navigate("L1S4")}/>
        <CustomButton4 title= "Level 1 Session 5"onPress={()=> navigation.navigate("L1S5")}/>
        <CustomButton4 title= "Level 1 Session 6"onPress={()=> navigation.navigate("L1S6")}/>
           
        
                 
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
export default EasyList