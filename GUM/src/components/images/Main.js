import React, { useState} from 'react';
import auth from '@react-native-firebase/auth';
import {StyleSheet,View,Alert,TextInput, Image,Text, KeyboardAvoidingView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton4 from './CustomButton4';
const Main = ({navigation})=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        navigation.navigate("Home")
        Alert.alert("User " +email+ " signed in!")
        
      })
      .catch(error => {
        console.error(error);
      });
    }
    const resetPassword=()=>{
      auth().sendPasswordResetEmail(email,password,auth)
  .then(() => {
    console.log("Password sent!");
   Alert.alert("Passowrd reset email sent to "+email+"!");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  };
  const Stack = createStackNavigator();
    return(
     
      <View style = {styles.container}>
        <View style = {styles.Image}>
      
         <Image 
           style={{ alignSelf: 'center' ,top:75}}
         source={require('./newLogo.png')}/>
         </View>
          <Text>
          <Text>Welcome Back! Remeber to stay signed in and never miss a workout!</Text></Text>
          <>
          <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}/>
          <TextInput
       
       style={{
        
         backgroundColor:'white',
         height: 40,
         borderWidth: 1,
        margin:10}}
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
       keyboardType='email-address'
      
     />
       <TextInput
        style={{
         backgroundColor:'white',
         height: 40,
         margin:10,
         borderWidth: 1,}}
       placeholder="Password"
       value={password}
       onChangeText={setPassword}
       secureTextEntry
       
     />
      

      <CustomButton4  title="Sign In" onPress={handleSignIn} />
       <CustomButton4  title="Reset Password" onPress={resetPassword} />
  
    </>
    

      <View style = {styles.Button}>
     <CustomButton4 title="New to GUM? Sign Up" onPress={()=> navigation.navigate("SignUp")}></CustomButton4> 
     </View>  
                  
   
        <Text testID="pressable_press_console"></Text>
      </View>
   
             
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
  },
  CustomButton4:{
    bottom:-35
  },
  Button:{
    bottom:10,
    text:'darkseagreen'
  },
  Image:{
      top:-100,
      height:100,
     
  }
});
export default Main