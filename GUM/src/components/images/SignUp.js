
import {StyleSheet,Button,View,TextInput, Image,Text, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton4 from './CustomButton4';
import { auth,firestore } from '../../../../../firebase';
import React, { useState } from 'react';


const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const handleSignUp = () => {
      auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // User is successfully created
              
              const uid = userCredential.user.uid;
              // Initialize user data in Firestore
              // should be code to add points
              firestore().collection('Users').doc(uid).set({
                  username: username,
                  points: 0,
                  // ...any other initial fields
                  
              })
              .then(() => {
                  console.log("User "+username+ " initialized in Firestore");
                  Alert.alert("User "+username+ " initialized in Firestore");
                  navigation.navigate("IntroVideo")
              })
              .catch((error) => {
                  console.error("Error initializing user data in Firestore:", error);
              });
          })
          .catch((error) => {
              console.error("Error creating user:", error);
          });
  };
    
  const Stack = createStackNavigator();
    return(
      <View style = {styles.container}>
        <View style = {styles.Image}>
         <Image 
           style={{ alignSelf: 'center',top:70 }}
         source={require('./newLogo.png')}/>
         </View>
          <Text>
          <Text>Welcome Back! Make sure your username and password are at least 6+ Characters</Text></Text>
          <>
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
         borderWidth: 1,
        margin:10}}
       placeholder="Password"
       value={password}
       onChangeText={setPassword}
       secureTextEntry
     />
        <TextInput
        style={{
         backgroundColor:'white',
         height: 40,
         borderWidth: 1,
        margin:10}}
       placeholder="User"
       value={username}
       onChangeText={setUsername}
     
     />
       
 
       <CustomButton4  title="Sign Up" onPress={handleSignUp} />
   
     </>
       <View style = {styles.Button}>
      <CustomButton4 title="Alreay have an account? Sign in" onPress={()=> navigation.navigate("Main")}></CustomButton4> 
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
     bottom:-50
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
 export default SignUp