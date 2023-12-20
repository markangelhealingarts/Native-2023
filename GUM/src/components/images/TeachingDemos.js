
import {Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity, StatusBar,PaperProvider,Linking} from 'react-native';
//import Text from 'react-native'
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CustomButton from './CustomButton';
import CustomButton1 from './CustomButton1';
import CustomButton2 from './CustomButton2';

const TeachingDemos= ({navigation})=>{
    const Stack = createNativeStackNavigator();
    return(
      <View style = {styles.container}>
        <SafeAreaView>
        <Image 
          style={styles.image}
         source={require('./movingIcon.png')}
         justifyContent={'right'}
/><Text style={{textAlignVertical: "center",textAlign: "center",}}>Choose a mode </Text>
          
                    <CustomButton1 title="Easy" onPress={()=> navigation.navigate("EasyVideos")}></CustomButton1>
                   <CustomButton title="Moderate" onPress={()=> navigation.navigate("ModerateVideos")}></CustomButton>  
                   <CustomButton2 title="Vigorous" onPress={()=> navigation.navigate("VigorousVideos")}></CustomButton2> 
                  <StatusBar style="auto"/>
                   </SafeAreaView>
    </View>         
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    padding:2,
    marginHorizontal: 16,
    padding: '10px 60px',
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
  image:{
    width:100,
    height:100,
    justifyContent: 'center',
    right:-125,
    top:-100
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    flexDirection: "column",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
  },
 });



export default TeachingDemos