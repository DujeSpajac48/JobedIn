import { createContext } from "react";
import { Text,View,StyleSheet,TextInput,Pressable,ScrollView} from "react-native";
import JobListing from '../components/JobListing';
import { useEffect } from "react";

// export const COLORS = {
//    background: '#F5EDE3',     // svijetla bež pozadina ekrana
//    card: '#FFF8F1',           // bež karta (forma)
//    accent: '#E6734B',         // narančasti gumb
//    accentDark: '#C55B3A',     // tamnija narančasta
//    text: '#4A3C31',           // tamno smeđa za tekst
//    textLight: '#8E7D6B',      // svjetlija smeđa za sekundarni tekst
//    border: '#E8DCCA',         // tanka linija obruba inputa
//    white: '#FFFFFF',          // čista bijela
//  };
export default function HomeScreen(){
   // const [jobs,setJobs] = useEffect([]);

   // useEffect(()=>{
   //    loadJobs();
   // },[]);
   // const loadJobs = async()=>{
   //    try {
         
   //    }catch (e)
   // }
   return(
      <View style={styles.mainContainer}>
         <ScrollView 
           style={styles.scrollContainer}
           contentContainerStyle={styles.scrollContent} 
         >
            <Text>HomeScreen</Text>
            <JobListing/>
            <JobListing/>
            <JobListing/>
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   mainContainer:{
      flex: 1,
      backgroundColor: '#F5EDE3',
   },
   scrollContainer:{
      flex: 1,
   },
   scrollContent: {
      alignItems: 'center', 
      paddingVertical: 20
   }
});