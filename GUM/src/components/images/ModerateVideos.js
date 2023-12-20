import YoutubePlayer from 'react-native-youtube-iframe';
import {View,Text,StyleSheet, ScrollView,Alert} from 'react-native';
import { auth, firestore } from '../../../../../firebase';
import { DocumentSnapshot, collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';


const ModerateVideos=({navigation})=> {
  console.log("rendering page")
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchVideos = async () => {
        const querySnapshot =  await firestore().collection('GuidingVideos').where("Level","==",2).orderBy("Session").get();
        const videoData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVideos(videoData);
    };
    fetchVideos();
}, []);
const updatePoints = async () => {
  try {
    const currentUser = auth().currentUser;
    if (currentUser) {
      const userRef = firestore().collection('Users').doc(currentUser.uid);
      const userDoc = await userRef.get();
      if (userDoc.exists) {
        // Use FieldValue.increment to update points
        await userRef.update({
          points: firestore.FieldValue.increment(6)
        });
        // Alert and navigation can be here or after the update operation
        Alert.alert("User now has +6 points!");
        navigation.navigate("Home");
        // Logging updated data requires another get() call
        const updatedUserDoc = await userRef.get();
        console.log(updatedUserDoc.data());
      } else {
        // Handle case where document doesn't exist
        console.error("User document does not exist");
      }
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
  return (
    
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          
        {videos.map(video => (
       <View>
       <Text>Level 2 Session {video.Session}</Text>
       
        
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
export default ModerateVideos