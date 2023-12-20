/* eslint-disable no-undef */
import YoutubePlayer from 'react-native-youtube-iframe';
import {View,Text,StyleSheet, ScrollView,Alert} from 'react-native';
import { auth, firestore } from '../../../../../firebase';
import React, { useState, useEffect } from 'react';


const EasyVideos=({navigation})=> {
  console.log("rendering page")
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchVideos = async () => {
      const querySnapshot =  await firestore().collection('GuidingVideos').where("Level","==",1).orderBy("Session").get();
        const videoData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVideos(videoData);
        console.log(querySnapshot)
    };
    fetchVideos();
}, []);
  return (
    
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        {videos.map(video => (
          <View>
          <Text>Level 1 Session {video.Session}</Text>
                 <YoutubePlayer
                 key={video.id}
                 height={300}
                 play={false}
                 videoId={video.YtUrl}
                 
               />
              </View>
            ))}
     

</ScrollView>
<View style={{marginTop:50}}>
      

      </View>
</View>

)};


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
export default EasyVideos