import { Text, View, StyleSheet, Pressable } from "react-native";
export default function JobListing({ job }){ 
   return(
      <View style={styles.listingContainer}>
         <View style={styles.topRowContainer}>
            <View style={styles.positionContainer}>
               <Text style={styles.roleText}>{job?.role || 'UI/UX Designer'}</Text> 
            </View>
            <View style={styles.workTypeContainer}>
               <Text style={styles.workTypeText}>{job?.location || 'Remote'}</Text> 
            </View>
         </View>

         <View style={styles.jobListingCompanyDetails}>
            <Text style={styles.textStyleJobListing}>Employer ID: {job?.employer_id || 'N/A'}</Text> 
            <Text style={styles.textStyleJobListing}>{job?.location || 'Location'}</Text>
            <Text style={styles.textStyleJobListing}>{job?.roleFilled ? 'Filled' : 'Available'}</Text> 
            <Text style={styles.textStyleJobListing}>{job?.hourlyRate ? `${job.hourlyRate}€/h` : 'Satnica'}</Text> 
         </View>

         <View style={styles.jobDescriptionContainer}>
            <Text style={styles.jobDescriptionText}>
               {job?.jobDesc || 'A job description should appear here...'} 
            </Text>
         </View>

         <View style={styles.bottomRowContainer}>
            <View>
               <Text style={styles.dateText}>
                  Listed: {job?.dateListed || '03/02/2025'} 
               </Text>
            </View>

            <Pressable style={styles.applyButton}>
               <Text style={styles.applyText}>Apply</Text>
            </Pressable>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   listingContainer: {
      borderWidth: 0.2,
      borderColor: 'red',
      backgroundColor: '#FFF8F1',
      width: '96%',
      minHeight: 180,
      marginVertical: 10,
      padding: 12,
      borderRadius: 12,
   },
   topRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8,
   },
   positionContainer: {
      flex: 1,
   },
   workTypeContainer: {
      backgroundColor: 'lightblue',
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 6,
   },
   workTypeText: {
      fontSize: 12,
      fontWeight: '500',
   },
   roleText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#4A3C31'
   },
   jobListingCompanyDetails: {
      width: '68%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
   },
   textStyleJobListing: {
      color: 'grey',
      fontSize: 12,
   },
   jobDescriptionContainer: {
      marginVertical: 8,
      maxHeight: 80,
   },
   jobDescriptionText: {
      color: '#2F4F4F',
      fontSize: 14,
      lineHeight: 18,
   },
   bottomRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
   },
   dateText: {
      fontSize: 12,
      color: '#666',
   },
   applyButton: {
      borderWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 8,
      backgroundColor: '#E6734B',
      borderColor: '#C55B3A',
   },
   applyText: {
      color: 'white',
      fontWeight: '500',
   },
});