import {StyleSheet,Button,View,TextInput, Image,Text, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton4 from './CustomButton4';
import { auth,firestore } from '../../../../../firebase';
import React, { useState } from 'react';


const ResetPassword= ({navigation}) => {

  const [email, setEmail] = useState('')
  const auth = getAuth();

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent")
  }
 
  return (

      // Input field for email
      <CustomButton4 title="Reset Password" onClick={triggerResetEmail}>Ripristina password</CustomButton4>

   
  )
}

export default ResetPassword;
