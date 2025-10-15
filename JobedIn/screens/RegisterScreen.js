import { Text,View,StyleSheet,TextInput,Pressable,} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import  {userAPI}  from '../services/api';

export default function RegisterScreen(){
   const [showPassword,setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);

   const [formData,setFormData] = useState({
      name: '',
      lastName: '',
      email: '',
      pass: '',
      role: null
   })

   const handleChange = async (field, value)=>{
      setFormData(prev =>({
         ...prev,
         [field]: value
         
      }))
   };

   const handleRegister = async () => {
      if (!formData.name || !formData.email || !formData.pass) {
         alert('Please fill all required fields');
         return;
      }
   
      setLoading(true);
   
      try {
         console.log('Sending:', formData);
         const response = await userAPI.register({
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.pass, 
            role: formData.role
         });
         
         if (response.success) {
            alert('Account created successfully!');
            // reset form
            setFormData({
               name: '',
               lastName: '',
               email: '', 
               pass: '',      
               role: null
            });
            setSelectedRole(null);
         }
      } catch (error) {
         console.log('Registration error:', error);
         alert(error.message || 'Registration failed');
      } finally {
         setLoading(false);
      }
   };

   

   //role button background
   const [selectedRole, setSelectedRole] = useState(null);
   const roles = [
      {
         value: 0,
         label: 'Employee',
         color: '#8E7D6B'  //brown
      },
      {
         value: 1, 
         label: 'Employer',
         color: '#C55B3A'  // orange
      }
   ];

   const toggleRole = () => {
      let newRole;
      
      if (selectedRole === null) {
        newRole = roles[0]; //  first click sets to employee(0)
      } else {
        const newValue = selectedRole.value === 0 ? 1 : 0;
        newRole = roles[newValue];
      }
      
      setSelectedRole(newRole);
      
      //updates formData  role val
      setFormData(prev => ({
        ...prev,
        role: newRole.value
      }));
    }
   console.log('Form data:', formData);
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
                  value={formData.name}
                  onChangeText={(text) => handleChange('name',text)}
                  
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

                  value={formData.lastName}
                  onChangeText={(text) => handleChange('lastName',text)}
                  />
               </View>
            </View>

            <View style={styles.sugestionTextContainer}>
                  <View style={styles.textPadding}>
                     <Text>Enter your email</Text>
                  </View>
               <View style={styles.inputContainer}>
                  <TextInput
                  placeholder='MaliBosanac@example.com'

                  value={formData.email}
                  onChangeText={(text)=> handleChange('email',text)}
                  />
               </View>
            </View>

            <View style={styles.sugestionTextContainer}>
               <View style={styles.textPadding}>
                  <Text>Enter your password</Text>
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
            </View>  

            <Pressable 
            style={[
               styles.roleButton,
               {backgroundColor: selectedRole ? selectedRole.color : 'grey'}
            ]}
            onPress={toggleRole}
         >
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
               {selectedRole ? selectedRole.label : 'Select Role'}
            </Text>
         </Pressable>

            <Pressable 
               style={[styles.loginButton, loading && { opacity: 0.7 }]}
               onPress={handleRegister}
               disabled={loading}
            >
               <Text style={{color: 'white', fontSize: 18}}>
                  {loading ? 'Creating Account...' : 'Sign up'}
               </Text>
            </Pressable>
            
            <View style={styles.registerContainer}>
               <Text>Already have an acount?</Text>
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
   passwordInput:{
      flex:1,
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
inputContainer:{
      borderColor: '#E8DCCA',
      borderWidth: 1,
      backgroundColor: 'white',
      // width: '84%',
      borderRadius: 12,
      justifyContent:'center',
      padding: 12,
   },
   showPassContainer:{
      borderWidth: 1,
      // alignSelf: 'flex-end',
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

      marginTop: '12%',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: '10%'

   },
   roleButton:{
      borderWidth: 1,
      width: '80%',
      marginTop: '8%',
      height: '8%',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 
   },
   registerContainer:{
      marginTop:'14%',
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