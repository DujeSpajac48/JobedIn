import { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import JobListing from '../components/JobListing';
import { jobAPI } from '../services/api';

export default function HomeScreen(){
   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      loadJobs();
   }, []);

   const loadJobs = async () => {
      try {
         console.log('Loading jobs...');
         const response = await jobAPI.getJobListings();
         setJobs(response.data);
         console.log('Jobs loaded:', response.data.length);
      } catch (error) {
         console.log('Error loading jobs:', error);
      } finally {
         setLoading(false);
      }
   };

   if (loading) {
      return (
         <SafeAreaView style={styles.mainContainer}> 
            <Text>Loading jobs...</Text>
         </SafeAreaView>
      );
   }

   return(
      <SafeAreaView style={styles.mainContainer}> 
         <ScrollView 
           style={styles.scrollContainer}
           contentContainerStyle={styles.scrollContent} 
         >
            <Text style={styles.title}>Available Jobs</Text>
            
            {jobs.length === 0 ? (
               <Text>No jobs available</Text>
            ) : (
               jobs.map(job => (
                  <JobListing key={job.id} job={job} />
               ))
            )}
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      backgroundColor: '#F5EDE3',
   },
   scrollContainer: {
      flex: 1,
   },
   scrollContent: {
      alignItems: 'center', 
      paddingVertical: 20
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#4A3C31'
   }
});