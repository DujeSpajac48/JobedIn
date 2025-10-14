import { Text,View,StyleSheet,Pressable} from "react-native";


export default function LoginScreen(){
   return(
      <View style={styles.mainContainer}>
         <View style={styles.logoContainer}>
            <Text style={{fontSize: 60,fontWeight: '300'}}>Jobed</Text><Text style={{fontSize:28,fontWeight: 'bold'}}>In</Text>
         </View>

         <View style={styles.stupidMessageContainer}>
            <Text style={{ textAlign: 'center', fontSize: 16}}>
               Your job is waiting for you — what are you waiting for?{'\n'}
               Start your journey today.
            </Text>
         </View>

         <View style={styles.loginBoxContainer}>
            <View style={styles.sugestionTextContainer}>
               <Text>Email</Text>
               <View style={styles.inputContainer}>
                  <Text>Email</Text>
               </View>
            </View>
            <View style={styles.inputContainer}>
                <Text>Pass/forgot pass button</Text>
            </View>

            <Pressable style={styles.loginButton}>

                  <Text style={{color: 'white',fontSize: 18}}>Login</Text>
              
            </Pressable>

            <Text>register</Text>




         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   mainContainer:{
      flex:1,

      // borderColor: '#E8DCCA',
      // borderWidth: 3,
      // alignContent: 'center',
      backgroundColor: '#F5EDE3',
      justifyContent: 'center',
      alignItems: 'center',
   },
   logoContainer:{
      flexDirection: 'row',
   },
   stupidMessageContainer:{
      marginTop: "4%"

   },
   
   loginBoxContainer:{
      borderWidth: 0.8,
      borderColor: '#E8DCCA',

      backgroundColor: '#FFF8F1',
      borderRadius: 18,
      marginTop: '18%' ,
      width:'80%',
      height: '52%',
      alignItems: 'center',
      justifyContent: 'space-evenly'
   },
   sugestionTextContainer:{
      borderWidth: 1,

      width: '84%',
      justifyContent: 'space-between',

      height:'10%'
      
   },
   inputContainer:{
      borderColor: '#E8DCCA',
      borderWidth: 1,

      backgroundColor: 'white',
      // width: '84%',
      height: '12%',
      borderRadius: 12,

      justifyContent:'center',
      padding: 12,
   },
   loginButton:{
      borderColor: '#E8DCCA',
      backgroundColor: '#E6734B',
      borderWidth: 1,

      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: '10%'

   }
})