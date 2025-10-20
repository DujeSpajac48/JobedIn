import { Text,View,StyleSheet,TextInput,Pressable, Alert} from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { userAPI } from "../services/api";
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
export default function LoginScreen(){

   const [showPassword,setShowPassword] = useState(false);
   const [loading,setLoading]= useState(false);
   //napravit handle login logi
   //dodat navigaciju
   //dodat forgot password


   const [formData,setFormData] = useState({
      email: '',
      pass: ''
   })
   const handleChange= async (field,value)=>{
      setFormData(prev=>({
         ...prev,
         [field]: value
      }));
   }
   

   const handleLogin = async() => {
      if (!formData.email || !formData.pass){
         alert('Please fill all required fields');
         return;
      }

      setLoading(true);

      try{
         console.log('Login formdata ',formData);
         const response = await userAPI.login(formData.email, formData.pass);

         if (response?.success) {
            alert('Login successful!');
            console.log('Logged in user:', response.user);
         } else {
            alert(response?.message || 'Login failed');
         }
         
         setFormData({
            email: '',
            pass: ''
         })

      } catch (e){
         console.log('userAPi error', e);
         alert("Login Failed");
      }finally {
         setLoading(false);
      }
   }
   
   return(
      <View style={styles.mainContainer}>
         <View style={styles.logoContainer}>
            <Text style={{fontSize: 60,fontWeight: '300'}}>Jobed</Text><Text style={{fontSize:28,fontWeight: 'bold'}}>In</Text>
         </View>

         <View style={styles.stupidMessageContainer}>
            <Text style={{ textAlign: 'center', fontSize: 15}}>
               Your job is waiting for you — what are you waiting for?{'\n'}
               Start your journey today.
            </Text>
         </View>

         <View style={styles.loginBoxContainer}>
            <View style={styles.sugestionTextContainer}>
                  <View style={styles.textPadding}>
                     <Text style={{color: '#4A3C31'}}>Enter your email</Text>
                  </View>
               <View style={styles.inputContainer}>
                  <TextInput
                  placeholder='mail@example.com'

                  value={formData.email}
                  onChangeText={(text)=>{handleChange('email',text)}}
                  ></TextInput>
               </View>
            </View>

            <View style={styles.sugestionTextContainer}>
                  <View style={styles.textPadding}>
                     <Text style={{color: '#4A3C31'}}>Enter your password</Text>
                  </View>
                  <View style={styles.inputContainerPass}>
                  <TextInput 
                     style={styles.passwordInput}
                     placeholder="..."
                     secureTextEntry={!showPassword}

                     value={formData.pass}
                     onChangeText={(text)=> handleChange('pass',text)}
                  />
                  <Icon 
                     name={showPassword ? 'eye-off' : 'eye'} 
                     size={16} 
                     color="#666" 
                     onPress={() => setShowPassword(!showPassword)}
                  />
               </View>
                  <Pressable style={styles.forgotPassword}>
                     <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                  </Pressable>
            </View>

            <Pressable 
            style={styles.loginButton}
            onPress={handleLogin}
            >

                  <Text style={{color: 'white',fontSize: 18}}>Login</Text>
              
            </Pressable>

            <View style={styles.registerContainer}>
               <Text>Dont have an acount?</Text>
               <Pressable style={styles.registerButton}>
                  <Text style={styles.registerButtonText}>Sign Up</Text>
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
    passwordInput:{
      flex:1,
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
   inputContainerPass:{
      borderColor: '#E8DCCA',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
      backgroundColor: 'white',
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