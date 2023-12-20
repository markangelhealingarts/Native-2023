
import {StyleSheet,View,Image,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import ImageButton from './ImageButton';
import ImageButton1 from './ImageButton1';
import ImageButton2 from './ImageButton2';
import ImageButton3 from './ImageButton3';
import CustomButton4 from './CustomButton4';
import MenuExample from './MenuExample';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';




import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
 } from "react-native-popup-menu";
const link1 = 'https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US';


const Home= ({navigation})=>{
  const [userPoints, setUserPoints] = useState(null);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const userRef = firestore().collection('Users').doc(currentUser.uid);
          const userDoc = await userRef.get();
          if (userDoc.exists) {
            setUserPoints(userDoc.data().points);
            setUserName(userDoc.data().username);
            console.log(userDoc.data());
            console.log(currentUser);
          } else {
            // Handle case where document doesn't exist
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle the error appropriately
      }
    };
    fetchUserData();
  }, []);

    const Stack = createStackNavigator();


    return(
      <View style = {styles.container}>
        <Text>Longevity Points</Text>
        <Text>Streak: {userPoints}</Text>
        <Image 
          style={styles.image}
         source={require('./newLogo.png')}
         justifyContent={'center'}
         
         />
        
          <View style = {styles.button}>
          
            <ImageButton onPress={()=> navigation.navigate("StartMoving")}></ImageButton></View>
            
        <View style = {styles.button1}>
        <ImageButton1 onPress={()=> navigation.navigate("TeachingDemos")}></ImageButton1></View>
    
        <View style = {styles.button2}>
        <ImageButton2 onPress={()=> navigation.navigate("UpdateSchedule")}></ImageButton2></View>
      
        <View style = {styles.button3}>
          
        <ImageButton3 onPress={()=> navigation.navigate("Teams")}></ImageButton3></View>
        <View style = {styles.button4}>
        <CustomButton4 title="Log out" onPress={()=> navigation.navigate("Main")}></CustomButton4>
        <View style = {styles.button5}>
        <CustomButton4 title="Delete User" onPress={()=> navigation.navigate("DeleteUser")}></CustomButton4></View>
     </View>
</View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
 // if you want to fill rows left to right
  },

  button:{
    width:100,
    height:100, // is 50% of container width
    left:50,
    right:100,
    top:150,
  
  },
  button1:{
    width:100,
    height:100, // is 50% of container width
    left:200,
    right:100,
    top:50,
  
  
  },
  button2:{
    width:100,
    height:100, // is 50% of container width
    left:50,
    right:100,
    top:60,
    
  },
  button3:{
    width:100,
    height:100, // is 50% of container width
    left:200,
    top:-20,
    right:100,
   
  },
  button4:{
    borderRadius:30,
    margin:-1,
    left:50,
    width: 150,
    height: 110,
  },
  image:{
    left:150,
    bottom:-100,
    right:10
    },
    buttonText:{
        color:'black'
    },
    button5:{
      borderRadius:30,
      margin:-1,
      left:150,
      bottom:65,
      width: 150,
      height: 110,
    },
    image:{
      left:150,
      bottom:-100,
      right:100
      },
      buttonText:{
          color:'black'
      },
    menu:{
      left:100,
      right:50,
      top:10
    }
    
   
  
  
})
export default Home
  
  




 



