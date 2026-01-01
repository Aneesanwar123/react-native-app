import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useRouter } from 'expo-router';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock Data
const ORDERS = [
  {
    id: '1',
    orderNumber: '02',
    status: 'Pending',
    counterpart: 'Sohaib Nayyar',
    description: 'Designing seamless mobile app experiences with intuitive and user-friendly UI/UX.',
    createdAt: '27/08/2025',
  },
  {
    id: '2',
    orderNumber: '03',
    status: 'Completed',
    counterpart: 'Ahmed Khan',
    description: 'Frontend development for a fitness tracking application using React Native.',
    createdAt: '28/08/2025',
  }
];

const OrderCard = ({ item }) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.headerRow}>
        <Text style={styles.orderNumber}>Order Number : {item.orderNumber}</Text>
        <View style={styles.pendingBadge}>
          <MaterialCommunityIcons name="history" size={14} color="#8A8A8A" />
          <Text style={styles.pendingText}>{item.status}</Text>
        </View>
      </View>

      {/* Counterpart Section */}
      <View style={styles.sectionMargin}>
        <Text style={styles.labelSmall}>Counterpart</Text>
        <Text style={styles.counterpartName}>{item.counterpart}</Text>
      </View>

      {/* Description Section */}
      <View style={styles.sectionMargin}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionBody}>{item.description}</Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footerRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push("/ViewDisputedList")}
        >
          <LinearGradient
            colors={['#15A9B2', '#115B60']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.viewButton}
          >
            <Text style={styles.viewButtonText}>View Details</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.dateContainer}>
          <Text style={styles.labelSmall}>Created at:</Text>
          <Text style={styles.dateText}>{item.createdAt}</Text>
        </View>
      </View>
    </View>
  );
};

export default function FreelanceerDisputedlist() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <FlatList
        data={ORDERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard item={item} />}
        contentContainerStyle={styles.listPadding}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listPadding: {
    padding: 15,
  },
  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: '#0D3B4C',
  },
  pendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E8EF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    minWidth: 70,
  },
  pendingText: {
    fontSize: 14,
    color: '#0D3B4C',
    marginLeft: 5,
    fontWeight: '600',
  },
  sectionMargin: {
    marginBottom: 15,
  },
  labelSmall: {
    fontSize: 14,
    color: '#0D3B4C',
    opacity: 0.8,
  },
  counterpartName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0D3B4C',
    marginTop: 2,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#0D3B4C',
    marginBottom: 5,
  },
  descriptionBody: {
    fontSize: 14,
    color: '#0D3B4C',
    lineHeight: 20,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  viewButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  dateContainer: {
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0D3B4C',
  },
});
