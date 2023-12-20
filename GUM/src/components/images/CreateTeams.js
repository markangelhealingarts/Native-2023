import React from 'react';
import {Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity} from 'react-native';
//import Text from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const CreateTeams= ({navigation})=>{
    const Stack = createNativeStackNavigator();
    return(
      <View style = {styles.container}>
    
      <View style={styles.logBox}>
        
      </View>
    
         <Image source={require('./newLogo.png')}/>
          <Text>
          <Text>Welcome Back! Make sure your username and password are at least 5+ Characters</Text></Text>
         <TextInput
           style={{
             height: 40,
             borderColor: 'gray',
             borderWidth: 1,
           }}
           placeholder="Email"
           />
                  <TextInput
             style={{
               height: 40,
               borderColor: 'gray',
               borderWidth: 1,
             }}
             placeholder="Password"
           />
                          <Button title=" Log In" onPress={()=> navigation.navigate("Home")}></Button>
                   <Button title="Already have an account? Login" onPress={()=> navigation.navigate("Main")}></Button>   
                   <View style={styles.container}>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console"></Text>
      </View>
    </View> 
      
              </View>
                  
            
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:2,
    marginHorizontal: 16,
    borderColor:'blue'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:2,
    marginHorizontal: 16,
    borderColor:'blue'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },


})


export default CreateTeams