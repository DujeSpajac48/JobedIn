import { createContext } from "react";
import { Text,View,StyleSheet,TextInput,Pressable} from "react-native";
import JobListing from '../components/JobListing';

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
   return(
      <View style={styles.mainContainer}>
         <Text>HomeScreen</Text>

         <JobListing></JobListing>

      </View>
   );
}

const styles = StyleSheet.create({
   mainContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5EDE3'
   },

});