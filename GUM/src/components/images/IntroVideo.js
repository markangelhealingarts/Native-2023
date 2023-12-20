import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert,StyleSheet,Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import CustomButton4 from "./CustomButton4";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function IntroVideo({navigation}) {
  const [playing, setPlaying] = useState(false);
  
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <View style = {styles.container}>
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"frFlcZ1Xnno"}
        onChangeState={onStateChange}
      />
      
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>Please watch this brief introduction video on Get Up And Move before proceeding.</Text>
      <CustomButton4 title="Continue" onPress={()=> navigation.navigate("Home")}></CustomButton4>
    </View>
    </View>
  );
}
        
    



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
