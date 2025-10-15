import { Text,View,StyleSheet,TextInput,Pressable} from "react-native";

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

export default function JobLisitng(){
   return(
      <View style={styles.listingContainer}>
         <View style={styles.positionContainer}>
            <Text style={styles.roleText}>Developer</Text>
         </View>
         <Text>Job listing</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   listingContainer:{
      borderWidth: 1,
      borderColor: 'red',
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF8F1',

      width: '100%',
      height: '24%',
      marginVertical: '4%',
      
   },
   positionContainer:{
      borderWidth: 1,
      borderColor: 'blue',
      alignSelf: 'flex-start',
      padding: 6,
   },
   roleText:{
      fontWeight: 'bold',
      fontSize: 26,
      color: '#4A3C31'
   },
});