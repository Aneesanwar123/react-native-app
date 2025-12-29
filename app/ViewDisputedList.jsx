import {
    AntDesign,
    Ionicons,
    MaterialCommunityIcons
} from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ViewDisputedList = () => {
  const router = useRouter(); // Initialize router for navigation

  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* HEADER SECTION */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()} // Navigate back
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        
        <View style={styles.headerTitleRow}>
          <View>
            <Text style={styles.disputeId}>Dispute ID : 27</Text>
            <Text style={styles.orderCreatedText}>
              Order: 146 Created at : 23, October 2025
            </Text>
          </View>
          <View style={styles.statusBadge}>
            <MaterialCommunityIcons name="history" size={16} color="#4A6173" />
            <Text style={styles.statusText}>Pending</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* CARD 1: Order Summary */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Order Summary</Text>
          <Text style={styles.orderDescription}>
            I will create professional video animations and motion graphics for your brand
          </Text>
          
          <View style={styles.dataGrid}>
            <View style={styles.dataCol}>
              <Text style={styles.label}>Total Amount</Text>
              <Text style={styles.value}>$50.0</Text>
              <View style={styles.spacer} />
              <Text style={styles.label}>Order ID</Text>
              <Text style={styles.value}>146</Text>
            </View>
            
            <View style={styles.dataCol}>
              <Text style={styles.label}>Paid Amount</Text>
              <Text style={[styles.value, styles.greenText]}>$50.0</Text>
              <View style={styles.spacer} />
              <Text style={styles.label}>Gig ID</Text>
              <Text style={[styles.value, styles.greenText]}>66</Text>
            </View>
          </View>
          
          <Text style={styles.footerText}>Payment Status: No action taken yet</Text>
        </View>

        {/* CARD 2: Dispute Details */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dispute Details</Text>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Subject</Text>
            <Text style={styles.detailValue}>Test Dispute subject...</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Reason</Text>
            <Text style={styles.detailValue}>Test Dispute Detailed Reason</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Settlements</Text>
            <Text style={styles.detailValue}>No settlements proposed yet.</Text>
          </View>
        </View>

        {/* CARD 3: Evidence */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Evidence</Text>
          <View style={styles.evidenceRow}>
            <EvidenceItem />
            <EvidenceItem />
          </View>
        </View>

        {/* CARD 4: Response From The Freelancer */}
        <View style={styles.card}>
          <View style={styles.responseHeader}>
            <MaterialCommunityIcons name="comment-multiple-outline" size={24} color="#0B3040" />
            <Text style={styles.responseTitle}>
              Response From The Freelancer To This Dispute
            </Text>
          </View>
          
          <View style={styles.freelancerEvidenceBox}>
             <Text style={styles.evidenceLabelSmall}>Evidence</Text>
             <View style={styles.smallEvidenceRow}>
                <EvidenceItem small />
                <EvidenceItem small />
                <EvidenceItem small />
             </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// Helper component for Evidence items
const EvidenceItem = ({ small }) => (
  <View style={small ? styles.smallEvidenceContainer : styles.evidenceContainer}>
    <View style={small ? styles.smallImagePlaceholder : styles.imagePlaceholder}>
      <Ionicons name="image-outline" size={small ? 24 : 48} color="#C4C4C4" />
    </View>
    <TouchableOpacity style={styles.downloadButton}>
      <AntDesign name="download" size={small ? 10 : 14} color="white" />
      <Text style={small ? styles.smallDownloadText : styles.downloadText}>Download</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 },
  backButton: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#8CB4B8', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  headerTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  disputeId: { fontSize: 22, fontWeight: 'bold', color: '#0B3040' },
  orderCreatedText: { fontSize: 13, color: '#0B3040', marginTop: 4 },
  statusBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#DCE7EE', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20 },
  statusText: { fontSize: 14, color: '#4A6173', marginLeft: 5, fontWeight: '500' },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 30 },
  card: { backgroundColor: 'white', borderRadius: 12, padding: 20, marginBottom: 16, elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.4, shadowRadius: 2 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#0B3040', marginBottom: 12 },
  orderDescription: { fontSize: 14, color: '#7E8A96', lineHeight: 20, marginBottom: 20 },
  dataGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  dataCol: { flex: 1 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#0B3040' },
  value: { fontSize: 14, color: '#7E8A96', marginTop: 4 },
  greenText: { color: '#2EA44F', fontWeight: '600' },
  spacer: { height: 15 },
  footerText: { fontSize: 13, color: '#9AA5B1' },
  detailItem: { marginBottom: 15 },
  detailLabel: { fontSize: 15, fontWeight: 'bold', color: '#3B556E' },
  detailValue: { fontSize: 14, color: '#7E8A96', marginTop: 4 },
  evidenceRow: { flexDirection: 'row', justifyContent: 'space-between' },
  evidenceContainer: { width: '48%' },
  imagePlaceholder: { aspectRatio: 1, backgroundColor: '#EAEAEA', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  downloadButton: { flexDirection: 'row', backgroundColor: '#2EA44F', paddingVertical: 8, borderRadius: 6, justifyContent: 'center', alignItems: 'center' },
  downloadText: { color: 'white', fontSize: 13, fontWeight: 'bold', marginLeft: 6 },
  responseHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 15 },
  responseTitle: { flex: 1, fontSize: 17, fontWeight: 'bold', color: '#0B3040', marginLeft: 10 },
  freelancerEvidenceBox: { backgroundColor: '#EDF2F4', borderRadius: 10, padding: 12 },
  evidenceLabelSmall: { fontSize: 13, fontWeight: 'bold', color: '#0B3040', marginBottom: 10 },
  smallEvidenceRow: { flexDirection: 'row', justifyContent: 'space-between' },
  smallEvidenceContainer: { width: '31%' },
  smallImagePlaceholder: { aspectRatio: 1, backgroundColor: '#E2D9D9', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 6 },
  smallDownloadText: { color: 'white', fontSize: 9, fontWeight: 'bold', marginLeft: 3 },
});

export default ViewDisputedList;
