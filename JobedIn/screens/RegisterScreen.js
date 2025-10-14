import { Text,View,StyleSheet,TextInput,Pressable} from "react-native";


export default function RegisterScreen(){
   return(
      <View style={styles.mainContainer}>
         <View style={styles.logoContainer}>
            <Text style={{fontSize: 60,fontWeight: '300'}}>Jobed</Text><Text style={{fontSize:28,fontWeight: 'bold'}}>In</Text>
         </View>

         <View style={styles.stupidMessageContainer}>
            <Text style={{ textAlign: 'center', fontSize: 15}}>
               Create a JobedIn account
            </Text>
         </View>

         <View style={styles.loginBoxContainer}>
            <View style={styles.sugestionTextContainer}>
                  <View style={styles.textPadding}>
                     <Text>Your first name</Text>
                  </View>
               <View style={styles.inputContainer}>
                  <TextInput
                  placeholder='Petar'
                  ></TextInput>
               </View>
            </View>

            <View style={styles.sugestionTextContainer}>
                  <View style={styles.textPadding}>
                     <Text>Your last name</Text>
                  </View>
               <View style={styles.inputContainer}>
                  <TextInput
                  placeholder='Bosnjak'
                  ></TextInput>
               </View>
            </View>


            {/* ========== */}
            <View style={styles.sugestionTextContainer}>
                  <View style={styles.textPadding}>
                     <Text>Enter your email</Text>
                  </View>
               <View style={styles.inputContainer}>
                  <TextInput
                  placeholder='MaliBosanac@example.com'
                  ></TextInput>
               </View>
            </View>

            <View style={styles.sugestionTextContainer}>
                  <View style={styles.textPadding}>
                     <Text>Enter your password</Text>
                  </View>
               <View style={styles.inputContainer}>
                  <TextInput 
                  placeholder="..."
                  ></TextInput>
               </View>
            </View>

            <Pressable style={styles.loginButton}>

                  <Text style={{color: 'white',fontSize: 18}}>Sign up</Text>
              
            </Pressable>

            <View style={styles.registerContainer}>
               <Text>Alredy have an acount?</Text>
               <Pressable style={styles.registerButton}>
                  <Text style={styles.registerButtonText}>Login</Text>
               </Pressable>
            </View>

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
      marginTop: '20%'
   },
   stupidMessageContainer:{
      marginBottom: "4%",


   },
   
   loginBoxContainer:{
      borderWidth: 0.8,
      borderColor: '#E8DCCA',

      backgroundColor: '#FFF8F1',
      borderRadius: 18,
      // marginTop: '8%' ,
      marginBottom: '20%',
      width:'80%',
      height: '72%',
      alignItems: 'center',
      paddingVertical: '12%',

      //for iphone
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,

   },
   sugestionTextContainer:{
      // borderWidth: 1,
      width: '84%',
      justifyContent: 'space-evenly',
      marginTop: 22,

    },
    
   inputContainer:{
      borderColor: '#E8DCCA',
      borderWidth: 1,

      backgroundColor: 'white',
      // width: '84%',

      borderRadius: 12,

      justifyContent:'center',
      padding: 12,
   },
   textPadding:{
      paddingHorizontal: 8,
   }, 
   forgotPassword:{
      // borderWidth: 1,
      alignItems: 'flex-end',
      paddingRight: 6,
   },
   forgotPasswordText:{
      color: '#4A3C31',
      fontWeight: '600',
      fontSize: 12
   },
   loginButton:{
      borderColor: '#E8DCCA',
      backgroundColor: '#E6734B',
      borderWidth: 1,

      marginTop: 22,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: '12%'

   },
   registerContainer:{
      marginTop:'20%',
      flexDirection: 'row'
   },
   registerButton:{
      // borderWidth: 1,
      paddingHorizontal: 8,
   },
   registerButtonText:{
      fontWeight: 'bold',
      color: '#4A3C31',

   }
})